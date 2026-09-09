# CircleCross background worker

## Overview

This NestJS process will run asynchronous CircleCross work. It is a separate scaffold so jobs can scale independently of the public API.

## Commands

```bash
pnpm --filter worker start:dev
pnpm --filter worker build
pnpm --filter worker check-types
```

## Conventions

- Keep job handlers grouped by feature and bounded context.
- Make retries and failures explicit before adding production jobs.

_Drafted by /audit from the repo, worth a quick human pass. Edit freely: once a line stops matching this draft, later runs treat it as curated and will flag rather than overwrite it._
