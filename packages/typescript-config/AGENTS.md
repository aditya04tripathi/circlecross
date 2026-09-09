# Shared TypeScript configuration

## Overview

This workspace provides shared TypeScript configuration presets for applications and packages. It defines the common compiler baseline for the monorepo.

## Key files

| File                 | Owns                            |
| -------------------- | ------------------------------- |
| `base.json`          | Shared compiler settings        |
| `nextjs.json`        | Next.js compiler settings       |
| `react-library.json` | React library compiler settings |

## Conventions

- Keep strict TypeScript enabled in every shared preset and consumer.
- Add a preset only when a workspace type has a distinct compiler need.

_Drafted by /audit from the repo, worth a quick human pass. Edit freely: once a line stops matching this draft, later runs treat it as curated and will flag rather than overwrite it._
