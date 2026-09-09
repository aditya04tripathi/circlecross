# CircleCross scope

**Workflow:** Alpha
**Build approach:** Tracer Bullet. Build one complete runnable platform thread before adding breadth.

## At a glance

| Feature                                 | Status      | Spec                                                                 |
| --------------------------------------- | ----------- | -------------------------------------------------------------------- |
| Platform foundation                     | in-progress | [0001](../specs/_root/0001-circlecross-platform-foundation/index.md) |
| Public website and documentation portal | in-progress | [0001](../specs/docs/0001-public-website-portal/index.md)            |

## Platform foundation · in-progress

**Intent:** Create the accepted CircleCross platform scaffold with no product behaviour or live cloud resources.

**Spec:** [0001](../specs/_root/0001-circlecross-platform-foundation/index.md)

**Done when:** The repository runs the defined local scaffold, produces the declared images, and contains Railway IaC that has not been applied.

1. [x] Decide the stack (spec)
2. [ ] Scaffold from the decision: /develop platform foundation
   1. [ ] Create the repository, application, package, and UI scaffold.
   2. [ ] Create the API, worker, data, authentication, and local dependency contracts.
   3. [ ] Create container, local observability, ESLint and Prettier, GHCR, and Railway IaC contracts.
3. [ ] Verify it: /check verify platform foundation

## Public website and documentation portal · in-progress · GA

**Intent:** Create a public safe, accessible CircleCross website in `apps/docs` that introduces the platform to people and investors, explains Go, Uni, and Pro, and publishes selected high level technical writing.

**Done when:** Visitors can understand the CircleCross story, explore product and platform information, read published technical posts, and navigate the public site without private source content or product mechanics.

1. [x] Design it (spec): /architect public website and documentation portal
2. [ ] Build it: /develop public website and documentation portal
   1. [ ] Create the shared shadcn and visual foundation in `packages/ui`. (AC-7, AC-9)
   2. [ ] Build the public CircleCross story and product routes. (AC-1, AC-2, AC-3, AC-4)
   3. [ ] Add validated MDX publishing and technical blog routes. (AC-5, AC-6)
   4. [ ] Add public search metadata, responsive behaviour, and accessibility hardening. (AC-3, AC-7, AC-8)
3. [ ] Verify it: /check verify public website and documentation portal
4. [ ] Test it: /test public website and documentation portal
5. [ ] Review it (fresh model): /check review public website and documentation portal
6. [ ] Document it: /document public website and documentation portal

**Spec:** [0001](../specs/docs/0001-public-website-portal/index.md)
