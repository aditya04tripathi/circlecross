# Web application

## Overview

This is the initial Next.js application from the Turborepo starter. It is the temporary home for the first product experience until the CircleCross product workspaces are created.

## Key files

| File             | Owns                            |
| ---------------- | ------------------------------- |
| `app/page.tsx`   | Starter route                   |
| `app/layout.tsx` | Application layout              |
| `package.json`   | Local commands and dependencies |

## Commands

```bash
pnpm --filter web dev
pnpm --filter web build
pnpm --filter web lint
pnpm --filter web check-types
```

## Conventions

- Organize pages with route based folders.
- Keep product specific UI in this workspace and shared components in `@circlecross/ui`.
- Inherit root TypeScript, accessibility, error, and naming rules.

_Drafted by /audit from the repo, worth a quick human pass. Edit freely: once a line stops matching this draft, later runs treat it as curated and will flag rather than overwrite it._
