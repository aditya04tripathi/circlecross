# CircleCross

## Stack

- **Language / Runtime**: Strict TypeScript, Node.js 24 or later
- **Framework**: pnpm and Turborepo monorepo, Next.js and NestJS applications
- **Key dependencies**: Next.js, NestJS, Prisma, Better Auth, Zod, ESLint, Prettier
- **Package manager**: pnpm

## Build approach

Tracer Bullet. Build one complete runnable platform thread before adding breadth.

## Commands

```bash
# Install
pnpm install

# Develop all workspaces
pnpm dev

# Build
pnpm build

# Type check
pnpm check-types

# Format check
pnpm format:check
```

## Specs

Stored in `docs/specs/`. Format: `docs/specs/NNNN-title.md`.

## Rules

- Model business logic with bounded contexts and a shared domain language.
- Keep aggregates as consistency boundaries and refer across contexts by identifier.
- Use immutable domain events for meaningful past business events.
- Use strict TypeScript. Do not use `any`. Make unions exhaustive.
- Use feature folders in NestJS. Use route based folders in Next.js.
- Use named exports only. Validate environment variables at startup.
- Use one consistent error model. Keep domain logic outside application services.
- Meet WCAG AA accessibility standards for user facing work.
- Use conventional commits. Make one commit for each completed milestone.

## Tooling

- Use ESLint and Prettier. Run linting, formatting, and type checks before each commit.
- No test runner is configured for the initial scaffold. On push, publish Docker images to GHCR after the local gate has passed.

## Git

- integration: on
- branch prefix: feat/
- commit: per-milestone

## Agent skills

Declined: Agent Skills
MCP servers: GitHub MCP server (recommended), Docker MCP support (recommended)

## Context files

- [apps/docs/AGENTS.md](apps/docs/AGENTS.md) (documentation application)
- [apps/go/AGENTS.md](apps/go/AGENTS.md) (CircleCross Go application)
- [apps/uni/AGENTS.md](apps/uni/AGENTS.md) (CircleCross Uni application)
- [apps/pro/AGENTS.md](apps/pro/AGENTS.md) (CircleCross Pro application)
- [apps/admin/AGENTS.md](apps/admin/AGENTS.md) (administration application)
- [apps/api/AGENTS.md](apps/api/AGENTS.md) (platform API)
- [apps/worker/AGENTS.md](apps/worker/AGENTS.md) (background worker)
- [packages/auth/AGENTS.md](packages/auth/AGENTS.md) (authentication contract)
- [packages/config/AGENTS.md](packages/config/AGENTS.md) (environment configuration contract)
- [packages/contracts/AGENTS.md](packages/contracts/AGENTS.md) (shared API contracts)
- [packages/database/AGENTS.md](packages/database/AGENTS.md) (Prisma schema package)
- [packages/ui/AGENTS.md](packages/ui/AGENTS.md) (shared React UI components)
- [packages/typescript-config/AGENTS.md](packages/typescript-config/AGENTS.md) (shared TypeScript configuration)

_Drafted by /audit from the repo, worth a quick human pass. Edit freely: once a line stops matching this draft, later runs treat it as curated and will flag rather than overwrite it._
