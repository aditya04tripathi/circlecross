# 0001. CircleCross platform foundation

**Date**: 2026-09-08
**Status**: Accepted

## Summary

CircleCross will start as one platform with three separate Next.js product applications, one NestJS API, and one NestJS worker. The API is a modular monolith, meaning one deployable backend with clear business boundaries inside it. This keeps one identity and relationship foundation while avoiding the cost of early microservices.

This decision only defines a runnable scaffold. It must not build CircleCross product journeys, product screens, domain workflows, provider connections, or live Railway resources.

## Decision

**Chosen option**: A modular NestJS monolith with separate Next.js applications, a separate worker, and local infrastructure contracts.

The scaffold owns the shared runtime shape. Future product work owns every real user flow and business module. (basis: the user supplied CircleCross recommendation, the root `AGENTS.md`, [NestJS CLI overview](https://docs.nestjs.com/cli/overview))

## Proposed stack

| Layer            | Choice                                                                              | Reason                                                                                                                                                                                                                  |
| ---------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Repository       | pnpm and Turborepo monorepo                                                         | It gives independent applications shared packages, and one task graph.                                                                                                                                                  |
| Web applications | `apps/go`, `apps/uni`, `apps/pro`, and `apps/admin` on Next.js App Router           | Product experiences can diverge without duplicate platform services.                                                                                                                                                    |
| Documentation    | `apps/docs` on Next.js                                                              | Product documentation remains separate from product applications.                                                                                                                                                       |
| Shared UI        | shadcn `base-nova` with Tailwind CSS 4 in `packages/ui`                             | The shadcn monorepo flow routes shared components and dependencies to one package. (basis: [shadcn monorepo guide](https://ui.shadcn.com/docs/monorepo))                                                                |
| Backend          | NestJS modular monolith in `apps/api`                                               | One deployment keeps transactions, identity, and policies coherent while module boundaries preserve an extraction path. (basis: modular monolith practice, [NestJS CLI overview](https://docs.nestjs.com/cli/overview)) |
| Worker           | Separate NestJS process in `apps/worker`                                            | Background work cannot delay HTTP or realtime requests.                                                                                                                                                                 |
| HTTP interface   | Versioned REST, OpenAPI output, and a WebSocket gateway scaffold                    | REST is direct for initial resource APIs and the gateway reserves the realtime boundary without implementing events. (basis: REST first practice, [NestJS documentation](https://docs.nestjs.com/cli/overview))         |
| Validation       | Zod schemas in `packages/contracts`                                                 | One runtime schema can validate API inputs and shared client contracts.                                                                                                                                                 |
| Database         | PostgreSQL with PostGIS and Prisma                                                  | Relational data fits identity and graph relationships. PostGIS preserves a future location boundary without building discovery now.                                                                                     |
| Cache and jobs   | Redis and BullMQ                                                                    | Redis is an ephemeral helper, while BullMQ gives the worker a defined asynchronous boundary.                                                                                                                            |
| Identity         | Better Auth with its Prisma adapter                                                 | It provides a proven identity implementation while CircleCross keeps product eligibility and permissions outside authentication. (basis: [Better Auth Prisma adapter](https://better-auth.com/docs/adapters/prisma))    |
| Storage          | S3 compatible adapter, MinIO locally                                                | Files stay outside the relational database and deployments can select an S3 compatible service later.                                                                                                                   |
| Observability    | OpenTelemetry, Prometheus, Grafana, structured JSON logs, and Sentry placeholders   | Every runnable process can expose consistent signals before product behaviour increases operational risk.                                                                                                               |
| Local runtime    | Root Docker Compose for all apps, PostgreSQL, Redis, MinIO, Prometheus, and Grafana | The whole scaffold can run locally with explicit dependencies and no hosted account connection.                                                                                                                         |
| Containers       | One Dockerfile for each deployable application                                      | Each deployable unit has a reproducible image for local and cloud use.                                                                                                                                                  |
| Cloud shape      | Railway IaC in `.railway/railway.ts`                                                | Railway now prefers this project level format over new `railway.toml` files. (basis: [Railway CLI](https://docs.railway.com/cli), [Railway config guidance](https://docs.railway.com/config-as-code))                   |
| Image publishing | GitHub Actions publishes GHCR images from `main` and version tags                   | It keeps feature branches out of the registry and separates image production from deployment.                                                                                                                           |
| Code quality     | ESLint flat configuration and Prettier from a shared workspace                      | Shared defaults keep linting consistent while each framework selects its Next.js or NestJS rules.                                                                                                                       |

## Scaffold boundary

The scaffold may create project folders, configuration, environment examples, health endpoints, dependency registrations, empty module seams, Docker assets, Railway IaC definitions, and generated Better Auth Prisma models.

The scaffold must not apply a database migration, create a hosted service, create a Railway project, create a bucket, enable a Better Auth sign in method, create a product feature, create product data models, add a real queue processor, or add a test runner or test suite.

The only public API behaviour is unauthenticated liveness and readiness health endpoints. Readiness reports configuration and local dependency availability without any product data access. The WebSocket gateway remains unbound and no Better Auth handler or session read is mounted.

## Scaffold contracts

### Operational HTTP contract

| Route               | Audience                      | Response                                                                      | Source                                                               | Failure rule                                                                                                |
| ------------------- | ----------------------------- | ----------------------------------------------------------------------------- | -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `GET /health/live`  | Public deployment probe       | `200` and `{ "status": "ok" }`                                                | Running API or worker process                                        | Never checks a dependency.                                                                                  |
| `GET /health/ready` | Public deployment probe       | `200` with `ok`, or `503` with `unavailable`, and redacted named check states | PostgreSQL connection, Redis ping, and required configuration values | Each check has a two second deadline. No response includes URLs, credentials, table names, or bucket names. |
| `GET /metrics`      | Internal Compose network only | Prometheus text metrics                                                       | API and worker process metrics                                       | Not exposed by a public host port. Disabled unless `PROMETHEUS_METRICS_ENABLED=true`.                       |

Readiness must not query Better Auth tables, require a PostGIS extension, create a database object, create a MinIO bucket, or probe an object bucket. PostgreSQL connectivity and Redis ping are sufficient for this scaffold.

### Better Auth contract

`packages/auth` owns the Better Auth configuration used only for Prisma model generation. It declares the Prisma adapter and no sign in providers. The generated models live in `packages/database/prisma/schema.prisma`, but no migration is created or applied.

No application imports a live Better Auth instance during scaffold startup. `apps/api` does not mount Better Auth handlers, issue sessions, accept credentials, or initialise Better Auth storage. A later identity spec must explicitly enable those behaviours.

### Workspace and dependency map

| Area                                                         | Owns                                                                                              | May depend on                                                                 |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `apps/go`, `apps/uni`, `apps/pro`, `apps/admin`, `apps/docs` | Next.js routes and application shells only                                                        | `packages/ui`, `packages/contracts`, `packages/config`                        |
| `apps/api`                                                   | Express bootstrap, health routes, OpenAPI setup, unbound gateway, and infrastructure registration | `packages/auth`, `packages/config`, `packages/contracts`, `packages/database` |
| `apps/worker`                                                | Worker bootstrap, health route, queue registration, and empty processor seams                     | `packages/config`, `packages/contracts`, `packages/database`                  |
| `packages/ui`                                                | Shared shadcn components, Tailwind tokens, and global CSS                                         | React only                                                                    |
| `packages/contracts`                                         | Zod schemas and shared TypeScript types                                                           | Zod only                                                                      |
| `packages/config`                                            | Environment schemas and safe configuration loading                                                | Zod only                                                                      |
| `packages/database`                                          | Prisma schema, generated client, and database connection factory                                  | Prisma and PostgreSQL driver                                                  |
| `packages/auth`                                              | Better Auth generation configuration only                                                         | Better Auth and `packages/database`                                           |

Packages must never import an application. Product applications must never import each other. The API owns HTTP and gateway registration. The worker owns queue registration and must start with no processor work.

### Local runtime contract

| Service       | Host port            | Container address | Start group     |
| ------------- | -------------------- | ----------------- | --------------- |
| Go            | `8000`               | `go:8000`         | `products`      |
| Uni           | `8001`               | `uni:8001`        | `products`      |
| Pro           | `8002`               | `pro:8002`        | `products`      |
| Admin         | `8003`               | `admin:8003`      | `products`      |
| Docs          | `8004`               | `docs:8004`       | `products`      |
| API           | `8005`               | `api:8005`        | default         |
| Worker health | `8006`               | `worker:8006`     | default         |
| PostgreSQL    | `5432` loopback only | `postgres:5432`   | default         |
| Redis         | `6379` loopback only | `redis:6379`      | default         |
| MinIO API     | `9000` loopback only | `minio:9000`      | default         |
| MinIO console | `9001` loopback only | `minio:9001`      | default         |
| Prometheus    | `9090` loopback only | `prometheus:9090` | `observability` |
| Grafana       | `3005` loopback only | `grafana:3000`    | `observability` |

`pnpm dev` starts application shells on the host and expects local dependencies from Docker Compose. `docker compose up` starts PostgreSQL, Redis, MinIO, API, and Worker. `docker compose --profile products --profile observability up` starts the full scaffold. `docker compose down` stops services without deleting volumes. Only an explicit volume removal may erase local data.

`DATABASE_URL`, `REDIS_URL`, `S3_ENDPOINT`, `S3_REGION`, `S3_BUCKET`, `S3_ACCESS_KEY_ID`, `S3_SECRET_ACCESS_KEY`, `PROMETHEUS_METRICS_ENABLED`, `OTEL_EXPORTER_OTLP_ENDPOINT`, `SENTRY_DSN`, and `BETTER_AUTH_SECRET` belong in an ignored local environment file or cloud secret store. Compose provides development only credentials through an ignored local environment file. Logs, health responses, committed examples, and Railway IaC must contain variable names only, never values.

### Observability and image contract

Prometheus scrapes the internal API and Worker `/metrics` endpoints. Grafana is provisioned with Prometheus as its local datasource. OpenTelemetry exports only when `OTEL_EXPORTER_OTLP_ENDPOINT` is set. Sentry initialises only when `SENTRY_DSN` is set. Neither optional integration blocks startup when absent.

GitHub Actions builds images for `go`, `uni`, `pro`, `admin`, `docs`, `api`, and `worker`. The image path is `ghcr.io/<owner>/circlecross-<service>`. Every image receives the immutable commit SHA tag. `main` also receives `latest`, and a version tag receives its matching version. CI runs formatting, linting, type checks, and the container build before publication. The scaffold exception is recorded as no test runner and no test suite.

`.railway/railway.ts` declares the intended application services and their image or Dockerfile sources, plus references for managed PostgreSQL, Redis, and object storage. It contains no account identifier, token, secret, project creation call, resource creation call, or apply step.

## Consequences

**Positive**

1. A person can keep one platform identity as they move between Go, Uni, and Pro.
2. The team can develop distinct products without separate backend estates.
3. Every service has an explicit container and local operating contract before deployment.
4. The scaffold can later add real modules without replacing the chosen foundations.

**Negative / tradeoffs**

1. The repository starts with several runnable applications, so package and container upkeep is higher than a single application starter.
2. PostgreSQL, Redis, MinIO, Prometheus, and Grafana require local resources even before product features exist.
3. The central backend requires strict module discipline. Without it, a modular monolith can degrade into an unstructured large application.
4. Better Auth models are generated but inactive, so the team must define real authentication methods before sign in work begins.

**Neutral**

1. Railway IaC is source controlled but intentionally unapplied.
2. ESLint and Prettier provide the repository quality gate through a shared configuration package.

## Follow-up

1. Design the CircleCross identity, session, and provider policy before enabling Better Auth methods.
2. Design tenancy, roles, permissions, and product eligibility before the first CircleCross domain migration.
3. Design the Go safety and age policy before any Go user feature.
4. Review generated Better Auth Prisma models before applying a migration.
5. Create Railway resources and apply the IaC only after human review.
6. Add a test strategy when the first product feature begins.
7. Run `/sync` after scaffold work so the context files reflect the expanded repository and the no test scaffold exception.

## Rationale

Reasoning, options, and sources are in [rationale.md](rationale.md).
