import {
  defineRailway,
  group,
  image,
  postgres,
  project,
  redis,
  service,
  volume,
} from "railway/iac";

/**
 * Networking cost model for this project:
 * - Public domains only on user-facing ingress (products + api + minio API).
 * - Service-to-service and DB/cache traffic uses private vars
 *   (DATABASE_URL, REDIS_URL, RAILWAY_PRIVATE_DOMAIN) so it stays
 *   on Railway private networking and does not bill as egress.
 * - Browser clients hit public domains (ingress). SSR/server code
 *   talks to api over the private hostname.
 * - MinIO (S3-compatible) is wired to api + worker. Services use the
 *   private endpoint; browsers use the public MinIO domain via
 *   presigned URLs so large transfers are not proxied through api/worker.
 */
export default defineRailway((ctx) => {
  const db = postgres("postgres");
  const cache = redis("redis");

  const minioRootUser = "circlecross";
  const minioRootPassword = ctx.randomString("minio-root-password", 32);
  const minioData = volume("minio-data", { sizeMB: 10240 });

  const minio = service("minio", {
    source: image("minio/minio:latest"),
    start:
      'minio server /data --address ":${PORT:-9000}" --console-address ":9001"',
    volumeMounts: {
      "/data": minioData,
    },
    env: {
      MINIO_ROOT_USER: minioRootUser,
      MINIO_ROOT_PASSWORD: minioRootPassword,
    },
  });

  // Matches .env.example / docker-compose MinIO contract (path-style S3).
  const mediaEnv = {
    S3_ACCESS_KEY_ID: minioRootUser,
    S3_SECRET_ACCESS_KEY: minioRootPassword,
    S3_REGION: "us-east-1",
    S3_BUCKET: "media",
    S3_ENDPOINT:
      "http://${{minio.RAILWAY_PRIVATE_DOMAIN}}:${{minio.PORT}}",
    S3_PUBLIC_ENDPOINT: "https://${{minio.RAILWAY_PUBLIC_DOMAIN}}",
    S3_FORCE_PATH_STYLE: "true",
    AWS_ACCESS_KEY_ID: minioRootUser,
    AWS_SECRET_ACCESS_KEY: minioRootPassword,
    AWS_REGION: "us-east-1",
    AWS_ENDPOINT_URL:
      "http://${{minio.RAILWAY_PRIVATE_DOMAIN}}:${{minio.PORT}}",
  };

  const api = service("api", {
    build: {
      builder: "DOCKERFILE",
      dockerfilePath: "apps/api/Dockerfile",
    },
    healthcheck: "/health",
    env: {
      NODE_ENV: "production",
      // Private DB/cache URLs only — never DATABASE_PUBLIC_URL / REDIS_PUBLIC_URL.
      DATABASE_URL: db.env.DATABASE_URL,
      REDIS_URL: cache.env.REDIS_URL,
      HOST: "::",
      ...mediaEnv,
    },
  });

  // Internal-only: no public domain. Reaches api + data plane privately.
  const worker = service("worker", {
    build: {
      builder: "DOCKERFILE",
      dockerfilePath: "apps/worker/Dockerfile",
    },
    env: {
      NODE_ENV: "production",
      DATABASE_URL: db.env.DATABASE_URL,
      REDIS_URL: cache.env.REDIS_URL,
      API_HOST: api.env.RAILWAY_PRIVATE_DOMAIN,
      API_PORT: api.env.PORT,
      API_URL: "http://${{api.RAILWAY_PRIVATE_DOMAIN}}:${{api.PORT}}",
      HOST: "::",
      ...mediaEnv,
    },
  });

  const productEnv = {
    NODE_ENV: "production",
    // Browser → api is ingress on api (preferred public path).
    NEXT_PUBLIC_API_URL: "https://${{api.RAILWAY_PUBLIC_DOMAIN}}",
    // SSR / Route Handlers → api over private networking (no egress).
    API_URL: "http://${{api.RAILWAY_PRIVATE_DOMAIN}}:${{api.PORT}}",
    SITE_URL: "https://${{RAILWAY_PUBLIC_DOMAIN}}",
    HOSTNAME: "::",
  };

  const docs = service("docs", {
    build: {
      builder: "DOCKERFILE",
      dockerfilePath: "apps/docs/Dockerfile",
    },
    env: {
      NODE_ENV: "production",
      SITE_URL: "https://www.circlecross.app",
      HOSTNAME: "::",
    },
  });

  const go = service("go", {
    build: {
      builder: "DOCKERFILE",
      dockerfilePath: "apps/go/Dockerfile",
    },
    env: productEnv,
  });

  const uni = service("uni", {
    build: {
      builder: "DOCKERFILE",
      dockerfilePath: "apps/uni/Dockerfile",
    },
    env: productEnv,
  });

  const pro = service("pro", {
    build: {
      builder: "DOCKERFILE",
      dockerfilePath: "apps/pro/Dockerfile",
    },
    env: productEnv,
  });

  const admin = service("admin", {
    build: {
      builder: "DOCKERFILE",
      dockerfilePath: "apps/admin/Dockerfile",
    },
    env: productEnv,
  });

  return project("circlecross", {
    resources: [
      group("Data", [db, cache, minio, minioData]),
      group("Platform", [api, worker]),
      group("Products", [go, uni, pro, admin, docs]),
    ],
  });
});
