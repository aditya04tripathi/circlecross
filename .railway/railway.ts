import {
  defineRailway,
  group,
  project,
  service,
} from "railway/iac";

export default defineRailway(() => {
  const productEnv = {
    NODE_ENV: "production",
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
      group("Products", [uni, pro, admin, docs]),
    ],
  });
});

