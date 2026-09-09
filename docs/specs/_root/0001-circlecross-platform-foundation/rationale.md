# Rationale for CircleCross platform foundation

## Context

> ⚠️ Premise note: The source recommendation covers many future decisions, including identity policy, product safety, tenancy, search, recommendations, and billing. This spec narrows the work to the platform scaffold. Each future product or policy decision needs its own spec before implementation.

CircleCross needs one durable account and relationship layer across youth, university, and professional products. The repository already has a small pnpm and Turborepo starter, but it has no product architecture, backend, worker, data contract, infrastructure contract, or development environment.

The immediate goal is a runnable, source controlled foundation. The requested outcome is a scaffold only. It must give every future application a clear home while refusing to turn placeholders into partly built product behaviour.

The product will handle personal data and will eventually have youth safety, institution, and organisation concerns. No legal or compliance standard has been selected yet. The scaffold must therefore avoid collecting data and must leave safety, retention, audit, and permission policy to dedicated decisions.

## Options considered

### Option 1: Independent product backends

Each product would have its own Next.js application, backend, database, and worker.

**Pros**

1. Teams can deploy and change products independently.
2. A product specific failure has a smaller immediate blast radius.

**Cons**

1. Identity, consent, relationships, and safety controls would be duplicated or synchronised across systems.
2. Cross product transitions would require distributed data ownership before there is a product scale reason for it.

### Option 2: Microservice network from day one

Each future platform domain would run as a separate service with its own data store and messaging contract.

**Pros**

1. It provides strong deployment and ownership separation when many teams already exist.
2. Individual services can scale independently when a measured workload demands it.

**Cons**

1. Local development, tracing, retries, data consistency, and deployments become distributed systems work before there is any product traffic.
2. The team would operate many containers and contracts without a measured bottleneck or a matching ownership structure.

### Option 3: Modular monolith with separate product applications

One NestJS API and one worker own platform data, while Go, Uni, Pro, and Admin have separate Next.js application shells.

**Pros**

1. Shared identity and relationships remain transactional and simple to reason about.
2. Product user interfaces can diverge naturally.
3. NestJS modules and internal events give future extraction points without paying distributed system cost now.

**Cons**

1. Module boundaries must be protected in reviews and architecture checks.
2. A backend deployment affects all products until a justified service split occurs.

## Rationale

Option 3 is the right day one architecture. The source recommendation identifies identity, context, encounter, intent, and consent as platform concepts rather than product specific concepts. A single relational data store and one API therefore remove needless synchronisation while the applications retain product freedom. (basis: the user supplied CircleCross recommendation, relational data modelling practice)

The chosen approach deliberately avoids early microservices. It gives the future team modules, contracts, queues, and a separate worker process, but keeps the operational unit small enough to inspect and repair. A service may be extracted only when a real workload, deployment cadence, reliability need, or team ownership boundary proves the monolith is no longer the simpler choice. (basis: modular monolith practice, [NestJS CLI overview](https://docs.nestjs.com/cli/overview))

The container and Railway work is also deliberately bounded. Docker Compose is the local contract. Railway IaC is the cloud declaration. Neither creates live resources. Railway maps each long running Compose service to a separate service rather than running the compose file in production, so the future Railway setup must be reviewed as explicit services. (basis: [Railway Docker Compose guide](https://docs.railway.com/guides/docker-compose), [Railway CLI](https://docs.railway.com/cli))

ESLint and Prettier are appropriate because the repository needs conventional framework aware rules while keeping formatting independent of linting. A shared ESLint workspace holds the common baseline, while Next.js and NestJS applications select their framework specific configuration. This keeps the Turborepo task graph simple and makes formatter behaviour explicit.

The local contract uses profiles because a complete environment should still be useful on a laptop. PostgreSQL, Redis, MinIO, API, and Worker form the smallest meaningful default. Product shells and observability remain runnable on demand. This preserves the deployment topology without forcing every local session to operate every process.

Operational endpoints are the narrow exception to the no product behaviour rule. Liveness, readiness, and internal metrics make a scaffold observable without exposing users, data, sessions, queues, uploads, or business actions. Better Auth is generation only because mounting it would add public authentication behaviour before its policy has a dedicated decision.

## References

**Project sources**

1. `AGENTS.md`, repository conventions, Git workflow, tooling preferences, and current starter stack.
2. User supplied `CircleCross: Enterprise Architecture Recommendation`, platform and deployment intent.

**Practices and standards**

1. Modular monolith practice for a shared domain platform.
2. Relational first data modelling for transactional relationship data.
3. Twelve factor configuration practice for environment driven service configuration.

**Links**

1. [NestJS CLI overview](https://docs.nestjs.com/cli/overview)
2. [Next.js installation](https://nextjs.org/docs/app/getting-started/installation)
3. [shadcn monorepo guide](https://ui.shadcn.com/docs/monorepo)
4. [Better Auth Prisma adapter](https://better-auth.com/docs/adapters/prisma)
5. [Railway CLI](https://docs.railway.com/cli)
6. [Railway Docker Compose guide](https://docs.railway.com/guides/docker-compose)
