# Shared UI package

## Overview

This workspace holds reusable React UI components for application workspaces. Keep it product neutral so it can support the distinct CircleCross products.

## Key files

| File             | Owns                         |
| ---------------- | ---------------------------- |
| `src/button.tsx` | Button component             |
| `src/card.tsx`   | Card component               |
| `src/code.tsx`   | Code presentation component  |
| `package.json`   | Package exports and commands |

## Commands

```bash
pnpm --filter @circlecross/ui lint
pnpm --filter @circlecross/ui check-types
pnpm --filter @circlecross/ui generate:component
```

## Conventions

- Export components through the package export pattern.
- Keep components accessible and product neutral.
- Inherit root TypeScript, error, and naming rules.

## Gotchas

- The package uses the shared ESLint configuration and root Prettier policy.

_Drafted by /audit from the repo, worth a quick human pass. Edit freely: once a line stops matching this draft, later runs treat it as curated and will flag rather than overwrite it._
