# CircleCross platform API

## Overview

This NestJS application is the shared modular platform API for every CircleCross product. It currently exposes scaffold health endpoints only.

## Commands

```bash
pnpm --filter api start:dev
pnpm --filter api build
pnpm --filter api check-types
```

## Conventions

- Group new work by feature and bounded context.
- Keep domain logic outside transport handlers.
- Use the shared error model and validate environment values at startup.

_Drafted by /audit from the repo, worth a quick human pass. Edit freely: once a line stops matching this draft, later runs treat it as curated and will flag rather than overwrite it._
