# Railway configuration

This project uses Railway Infrastructure as Code (`.railway/railway.ts`).

## Commands

```bash
railway link --project circlecross --environment production
railway config plan
railway config apply
railway up --service docs -m "deploy docs"
```

## Networking (ingress vs egress)

- Public domains on **docs / go / uni / pro / admin / api / minio** maximize **ingress** (browser and client traffic into Railway).
- **worker**, **postgres**, and **redis** stay private. Apps use `DATABASE_URL`, `REDIS_URL`, and `API_URL=http://${{api.RAILWAY_PRIVATE_DOMAIN}}:${{api.PORT}}` so service-to-service traffic is **private networking** (no egress bill).
- Product apps expose `NEXT_PUBLIC_API_URL` for browser calls (ingress to api) and `API_URL` for SSR over the private network.
- Never wire `DATABASE_PUBLIC_URL` or `REDIS_PUBLIC_URL` into app services.

Services listen on `::` so private IPv6 DNS works.

## MinIO (S3)

`minio` is an S3-compatible store (same contract as local `docker-compose`). Credentials are referenced into **api** and **worker** only:

| Variable | Source |
| --- | --- |
| `S3_ACCESS_KEY_ID` / `AWS_ACCESS_KEY_ID` | `MINIO_ROOT_USER` |
| `S3_SECRET_ACCESS_KEY` / `AWS_SECRET_ACCESS_KEY` | `MINIO_ROOT_PASSWORD` |
| `S3_REGION` / `AWS_REGION` | `us-east-1` |
| `S3_ENDPOINT` / `AWS_ENDPOINT_URL` | private `http://${{minio.RAILWAY_PRIVATE_DOMAIN}}:${{minio.PORT}}` |
| `S3_PUBLIC_ENDPOINT` | `https://${{minio.RAILWAY_PUBLIC_DOMAIN}}` |
| `S3_BUCKET` | `media` |
| `S3_FORCE_PATH_STYLE` | `true` |

Create the `media` bucket once MinIO is up (for example with `mc mb`). Product frontends should ask **api** for presigned URLs that use `S3_PUBLIC_ENDPOINT`, then upload/download directly (ingress on MinIO; do not proxy bytes through api/worker).

## Next.js standalone

Product Docker images run `node apps/<app>/server.js` from the Next.js standalone output. Do not use `next start` in production containers.
