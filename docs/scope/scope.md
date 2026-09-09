# CircleCross scope

**Workflow:** Alpha
**Build approach:** Tracer Bullet. Build one complete runnable platform thread before adding breadth.

## At a glance

| Feature                                 | Status      | Spec                                                                 |
| --------------------------------------- | ----------- | -------------------------------------------------------------------- |
| Platform foundation                     | in-progress | [0001](../specs/_root/0001-circlecross-platform-foundation/index.md) |
| Public website and documentation portal | in-progress | [0001](../specs/docs/0001-public-website-portal/index.md)            |
| Homepage visual system                  | in-progress | [0002](../specs/docs/0002-homepage-visual-system/index.md)           |
| Product pages and recovery              | in-progress | [0003](../specs/docs/0003-product-pages-recovery.md)                 |
| Brand logo and search metadata          | in-progress | [0004](../specs/docs/0004-brand-logo-seo.md)                         |

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

## Homepage visual system · in-progress · GA · from spec 0002

**Intent:** Upgrade the live `apps/docs` marketing homepage so hierarchy, pacing, shared buttons and cards, orientation chrome, concrete trust copy, footer, and drafted legal pages read as one system, then apply that system to `/privacy` and `/terms`.

**Done when:** Visitors get a paced long scroll with clear hierarchy, scroll spy and progress, comparable Go or Uni or Pro cards, quieter trust before the ask, a start block with three quiet world rows that save on tap, a multi column footer, and draft Privacy plus Terms pages that match what the marketing site actually does.

1. [x] Design it (spec): /architect homepage visual system
2. [x] Build it: /develop homepage visual system
   1. [x] Land visual tokens, shared content modules, and docs button or card wrappers. (AC-1, AC-3, AC-4, AC-5, AC-10, AC-11, AC-12)
   2. [x] Reorder the homepage, merge encounter, enrich world and principle cards, quiet trust. (AC-2, AC-7, AC-8)
   3. [x] Add scroll spy, progress bar, multi column footer, and asset TODO file. (AC-6, AC-9, AC-13)
   4. [x] Ship draft Privacy and Terms, apply the system sitewide on marketing legal routes, harden accessibility. (AC-14, AC-15, AC-16)
   5. [x] Replace the start carousel or select with three quiet world rows, one tap save, and status only. (start picker AC-1 to AC-8)
   code in `apps/docs/`
3. [ ] Verify it: /check verify homepage visual system
4. [ ] Test it: /test homepage visual system
5. [ ] Review it (fresh model): /check review homepage visual system
6. [ ] Document it: /document homepage visual system

**Spec:** [0002](../specs/docs/0002-homepage-visual-system/index.md)

## Product pages and recovery · in-progress · from spec 0003

**Intent:** Give the public marketing site deep shareable pages for Go, Uni, and Pro, branded not found and error recovery, one preference cookie shared with start, and legal drafts that match.

**Done when:** Visitors can open `/go`, `/uni`, or `/pro`, choose a world, land on `/#start` with the preference saved in the cookie, recover calmly from unknown URLs and render failures, and read Privacy copy that describes that cookie.

1. [x] Design it (spec): /architect product pages and recovery
2. [x] Build it: /develop product pages and recovery
   1. [x] Extend world and recovery content; add the preference cookie helper. (AC-2, AC-5, AC-6, AC-7)
   2. [x] Shared product chapter on the homepage; first product route end to end. (AC-1, AC-3, AC-4)
   3. [x] Remaining product routes; migrate start; update footer product links. (AC-1, AC-5, AC-9)
   4. [x] Branded not found and error; sitemap and metadata; Privacy/Terms; accessibility; leave `/products` unbuilt. (AC-6, AC-7, AC-8, AC-10, AC-11, AC-12)
   code in `apps/docs/`
3. [ ] Verify it: /check verify product pages and recovery

**Spec:** [0003](../specs/docs/0003-product-pages-recovery.md)

## Brand logo and search metadata · in-progress · GA · from spec 0004

**Intent:** Make one theme aware CircleCross `Logo` (`mark` | `wordmark` | `logo`) the only brand lockup on the marketing site, and give every indexable route full search and social metadata through `generateSeo`, unique Open Graph cards, JSON-LD, robots, and fail closed checks.

**Done when:** Nav and footer use the typed logo, favicons match the mark art, every public marketing route has rich metadata and its own OG image, recovery stays noindex, and missing SEO or overlong OG titles fail the build.

1. [x] Design it (spec): /architect brand logo and search metadata
2. [x] Build it: /develop brand logo and search metadata
   1. [x] Typed `Logo` with token fills; wire nav and footer; remove chrome `Mark`. (AC-1, AC-2)
   2. [x] `SeoDefaults`, typed `seoPages`, `generateSeo`, icons, and first route OG thread. (AC-3, AC-4, AC-5, AC-8, AC-9)
   3. [x] Roll metadata, JsonLd, and OG images across all indexable routes. (AC-4, AC-5, AC-6, AC-7)
   4. [x] `robots.ts`, sitemap ⊆ SEO assert, dead Mark cleanup. (AC-2, AC-7, AC-8)
   code in `apps/docs/`
3. [ ] Verify it: /check verify brand logo and search metadata
4. [ ] Test it: /test brand logo and search metadata
5. [ ] Review it (fresh model): /check review brand logo and search metadata
6. [ ] Document it: /document brand logo and search metadata

**Spec:** [0004](../specs/docs/0004-brand-logo-seo.md)

## Deferred

- Resolve 0001 `/products` AC against the three world routes (from spec 0003)
- Replace temporary world photographs and clear `TODO(asset)` markers (from spec 0003)
- Add `global-error.tsx` only if root layout failures show up in production (from spec 0003)
- Extend `IndexablePath` and SEO when 0001 blog or about routes ship (from spec 0004)
- Revisit required `keywords` after Search Console review (from spec 0004)
