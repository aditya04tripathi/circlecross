# 0004. Brand logo system and search metadata

**Date**: 2026-09-09
**Status**: In Progress

## Summary

This pass makes one theme aware brand mark the only CircleCross lockup on the public marketing site, and gives every indexable route full search and social metadata. The shared SVG from `logo.tsx` becomes a typed `Logo` component (`mark`, `wordmark`, or `logo`). A `generateSeo` helper merges site defaults with per path rows, builds unique Open Graph images (share preview pictures) with the page title on a shared frame, and emits JSON-LD (structured data for search engines). Build and types fail if a known public route is missing SEO or if an OG title is too long for the frame.

## Context

> ⚠️ Premise note: `apps/docs/AGENTS.md` says no images should be generated, aimed at photography and temporary local assets. This feature still generates Open Graph cards with Next.js `ImageResponse`. That is UI chrome for shares, not product photography. Keep the photography rule as is. Also, rich metadata helps machines understand pages; it does not by itself create rankings. Content quality and links still matter more than tags.

The public marketing site in `apps/docs` already has a warm paper visual system (spec 0002) and product plus recovery routes (spec 0003). Spec 0001 asked for metadata, canonicals, social preview, sitemap, and robots at a high level. Spec 0003 required unique metadata for `/go`, `/uni`, and `/pro`.

What shipped is still thin. Root layout uses one title, one description, and a photographic Open Graph image (`together.jpg`). Product routes override a little copy. Privacy and terms mostly set a title. There is a sitemap and no `robots` file. The nav wordmark still uses a small two circle `Mark` in `components/ui.tsx`. The fuller circle and cross art in `components/logo.tsx` is unused, with hard coded `#CC0000` and `#111111` fills that ignore theme tokens.

Without a decision, `/develop` would invent logo API shape, whether Mark stays, how OG images are produced, how deep SEO goes, and how missing route metadata is caught. Brand language would stay split. Share cards would keep looking like stock photos. Search hygiene would stay uneven across routes.

## Requirements

**User stories**:

1. As a visitor, I want one clear CircleCross mark in nav and footer so that the brand feels consistent on every marketing page.
2. As someone sharing a link, I want each public page to show a proper preview card so that the title and brand read well in social apps and chat.
3. As the team shipping new marketing routes, I want SEO wired through one helper so that we cannot forget titles, descriptions, or social fields by accident.

**Acceptance criteria**:

1. **AC-1**: A named export `Logo` accepts required `type`: `mark` | `wordmark` | `logo`. `mark` renders only the SVG art from today’s `logo.tsx`. `wordmark` renders only the CircleCross® text. `logo` renders mark plus wordmark. Fills use theme tokens (ink and mark accent), not hard coded hex that ignore the page mood.
2. **AC-2**: Nav and footer brand lockups use `Logo` (typically `type="logo"`). The two circle `Mark` is removed from marketing chrome and is not left as a second brand language.
3. **AC-3**: Favicon and app icons come from the same mark art via the Next.js Metadata File API (`icon`, `apple-icon`).
4. **AC-4**: Shared SEO module holds `SeoDefaults` and a typed `seoPages` map keyed by path. `generateSeo(path, overrides?)` merges defaults with the row and returns Next.js `Metadata` (document head fields). Title template is `%s · CircleCross`. Home may use an absolute brand title. Open Graph and Twitter `summary_large_image` are always set. Facebook app id, Twitter site handle, and site verification tags appear only when matching env vars are set.
5. **AC-5**: Every indexable path (`/`, `/go`, `/uni`, `/pro`, `/privacy`, `/terms`) has a unique OG image from a shared frame with that page’s title (and short line) drawn on it. Thin per route `opengraph-image` files call the shared renderer. Photographic `together.jpg` is no longer the default social image (photos may remain for on page sections).
6. **AC-6**: `getJsonLd(path)` plus a small `JsonLd` helper emit Organization and WebSite on the site, and the page’s `jsonLdType` graph on each indexable route.
7. **AC-7**: `robots.ts` allows indexing of public marketing routes. Recovery (`not-found`, `error`) stays noindex (and out of the sitemap). Legal routes are indexable with full metadata and WebPage JSON-LD.
8. **AC-8**: Each `SeoPage` requires `path`, `title`, `description`, `keywords`, `jsonLdType`, and OG title/description (OG fields may default from title/description). Optional: `robots`, `canonicalPath`, `ogImagePath`, extra JSON-LD bits. TypeScript requires every `IndexablePath` key in `seoPages`. A build or CI assert checks sitemap URLs are a subset of those keys.
9. **AC-9**: If primary or secondary OG title text exceeds the agreed max length for the frame, the build fails.

## Options considered

### Option 1: Shared Logo API plus generateSeo and Next.js image conventions

One theme aware `Logo` with `type`, content module SEO with `generateSeo`, Next.js `ImageResponse` OG frames, Metadata File icons, hand built JSON-LD, typed path union plus sitemap assert.

**Pros**:
- Reuses App Router features already in the stack
- One brand source for UI, tab icon, and share cards
- Missing route SEO fails early

**Cons**:
- OG text layout and length limits need care
- Keywords field has little effect on Google ranking today

### Option 2: Static assets and inline metadata only

Commit PNG favicon and OG files; keep `export const metadata` inline per page; leave Mark or paste SVG by hand.

**Pros**:
- Simple mental model
- No image generation at request or build time

**Cons**:
- Copy and art drift across routes
- Easy to ship a page with thin tags
- Two circle Mark and logo.tsx stay as competing marks

### Option 3: Third party SEO or OG SaaS

Wire an external metadata or social card service.

**Pros**:
- Dashboard editing without deploys

**Cons**:
- New vendor and keys for a static marketing site
- Conflicts with source controlled content modules in 0002

## Decision

**Chosen option**: Option 1: Shared Logo API plus generateSeo and Next.js image conventions.

Ship a named `Logo` (`mark` | `wordmark` | `logo`), replace chrome Mark usage, generate icons and per route OG cards from the mark art and shared frame, and centralise metadata through `SeoDefaults`, typed `seoPages`, `generateSeo`, `getJsonLd`, `robots.ts`, and a sitemap key assert.

**RECOMMEND settlements** (engineer did not pick these; locked here):

- Mark accent token: keep the diamond red as `--mark-accent` (from the art’s `#CC0000`); rings use ink / `currentColor` so panels can invert.
- Product and legal JSON-LD: use `WebPage` (or a thin subtype) for `/go`, `/uni`, `/pro`, `/privacy`, `/terms`; do not emit schema.org `Product` without offers or pricing.
- OG length limits: primary title max 60 characters; secondary line max 90; exceed either → build fail (**AC-9**).
- Sitemap `priority` / `changeFrequency` stay in `sitemap.ts`; assert only that paths ⊆ `seoPages` keys.
- Optional env (document in `.env.example`, omit tags when unset): `FACEBOOK_APP_ID`, `GOOGLE_SITE_VERIFICATION`, `TWITTER_SITE` (handle). `SITE_URL` stays required as today.

## Rationale

The gap is inconsistency and incompleteness, not a broken stack. Next.js already owns metadata files and `ImageResponse`, so a SaaS or a pile of static PNGs would add drift without buying much. A typed path map plus sitemap assert matches the repo’s strict TypeScript habit and the “fail if forgotten” requirement. Token fills keep the mark readable when chrome sits on cream, olive, or ink without inventing a full dark mode product. Requiring `keywords` is an explicit team choice for completeness even though major engines largely ignore that tag; the real ranking levers here are unique titles, descriptions, canonicals, crawl rules, and clear structured data.

## Feature design

**Data model sketch**:

| Entity | Storage | Required fields | Rules |
| --- | --- | --- | --- |
| `SeoDefaults` | `apps/docs/content/seo.ts` (or `lib/seo`) singleton | `siteName`, `titleTemplate` (`%s · CircleCross`), `defaultDescription`, `locale`, `twitterCard` (`summary_large_image`), Organization core (`name`, `url`, `logo`), WebSite node, OG frame settings | Env slots for verification / app ids; omit output keys when unset |
| `SeoPage` | same module, map keyed by `IndexablePath` | `path`, `title`, `description`, `keywords`, `jsonLdType`, `ogTitle`, `ogDescription` | `ogTitle` / `ogDescription` may default from title / description at merge time; optional `robots`, `canonicalPath`, `ogImagePath`, extra `jsonLd` |
| Brand props | component props | `type`: `mark` \| `wordmark` \| `logo` | Optional `className`; named export only |

**Indexable paths**: `"/"`, `"/go"`, `"/uni"`, `"/pro"`, `"/privacy"`, `"/terms"`. Recovery is not a `SeoPage` key.

**State transitions**: none.

**API surface**:

| Surface | Kind | Key inputs | Key outputs | Auth | Key errors |
| --- | --- | --- | --- | --- | --- |
| `generateSeo(path, overrides?)` | function | `IndexablePath`, optional partial page | `Metadata` | public build | type error if path unknown |
| `getJsonLd(path)` | function | `IndexablePath` | JSON-LD graph object | public | type error if path unknown |
| `JsonLd` | component | graph from `getJsonLd` | `<script type="application/ld+json">` | public | none |
| `Logo` | component | `type`, `className?` | SVG and or text lockup | public | none |
| `opengraph-image` per indexable route | Next metadata file | route title lines from SEO row | PNG via `ImageResponse` | public | build fail if title over limit |
| `icon` / `apple-icon` | Next metadata file | mark SVG art | icon bytes | public | none |
| `robots.ts` | Next metadata route | rules | robots.txt | public | none |
| sitemap ⊆ seo assert | build or CI check | `sitemap.ts` paths, `seoPages` keys | pass / fail | CI | fail build if sitemap path missing from SEO |

**Value sourcing**:

| Action | Value produced / displayed | Source |
| --- | --- | --- |
| `generateSeo` | document title | `SeoPage.title` + `SeoDefaults.titleTemplate` (home may absolute) |
| `generateSeo` | meta description | `SeoPage.description` else defaults |
| `generateSeo` | keywords | `SeoPage.keywords` |
| `generateSeo` | canonical URL | `SITE_URL` + (`canonicalPath` else `path`) |
| `generateSeo` | OG / Twitter title and description | page OG fields after defaulting |
| `generateSeo` | OG image URL | convention from path unless `ogImagePath` |
| `generateSeo` | facebook / verification / twitter site | env when set |
| OG renderer | text on image | same SEO row title lines; length check at build |
| `getJsonLd` | Organization / WebSite | `SeoDefaults` |
| `getJsonLd` | page node `@type` | `SeoPage.jsonLdType` |
| `Logo` mark paths | SVG geometry | `components/logo.tsx` art |
| Favicon | icon bitmap / SVG | same mark art |
| Nav / footer lockup | visible brand | `Logo` with `type="logo"` (or chosen type) plus existing chrome layout |

**Key invariants**:

- One brand mark language on the marketing site; no parallel two circle Mark in chrome.
- Every indexable route has a `SeoPage` and a unique OG image.
- Recovery never enters `seoPages` or the sitemap; recovery responses stay noindex.
- Hard coded mark hex that ignore tokens are not allowed in the shipped `Logo`.
- OG primary > 60 chars or secondary > 90 chars fails the build.

**Security model**:

- All surfaces are public read. Only engineers change SEO content via source control.
- Optional verification and app id values live in env, never committed. Missing env means omit the tag, never invent an id.

**Configuration required**:

- `SITE_URL`: existing; metadata base and canonical origin (HTTP or HTTPS)
- `FACEBOOK_APP_ID` (optional): Open Graph app id when set
- `GOOGLE_SITE_VERIFICATION` (optional): Google Search Console verification when set
- `TWITTER_SITE` (optional): Twitter / X site handle when set

**Critical test scenarios**:

- Happy path: open `/`, `/go`, and `/privacy`; view source or Metadata; confirm title template, description, OG image URL, Twitter card, and JSON-LD Organization plus page type. Nav shows `Logo` lockup. Verifies **AC-1**, **AC-2**, **AC-4**, **AC-5**, **AC-6**, **AC-7**
- Failure case: remove one `seoPages` key or lengthen an OG title past the limit; `pnpm` typecheck or build fails. Verifies **AC-8**, **AC-9**
- Recovery: hit unknown URL; response is noindex and not listed in sitemap. Verifies **AC-7**
- Icons: `/favicon.ico` or app icon route returns mark derived art. Verifies **AC-3**

## Build plan

Tracer Bullet: one thin vertical thread first (shared `Logo` in nav, defaults plus one path through `generateSeo`, one OG image, icons), then widen to every indexable route, robots, assert, and footer.

1. [x] Refactor `logo.tsx` to named `Logo` with `type` and token fills; wire nav lockup; remove chrome use of two circle `Mark`. Satisfies **AC-1**, **AC-2**
2. [x] Add `SeoDefaults`, typed `seoPages`, `generateSeo`, and `getJsonLd`; point root layout and one product route at them; document optional env in `.env.example`. Satisfies **AC-4**, **AC-8** (types)
3. [x] Shared OG frame helper plus `opengraph-image` for that first route; add `icon` / `apple-icon` from mark art; stop using `together.jpg` as default OG. Satisfies **AC-3**, **AC-5**, **AC-9**
4. [x] Roll `generateSeo`, `JsonLd`, and OG files across remaining indexable routes; set legal and product copy including required `keywords` and `jsonLdType`. Satisfies **AC-4**, **AC-5**, **AC-6**, **AC-7**
5. [x] Add `robots.ts`; sitemap path ⊆ SEO keys assert in build or CI; footer brand uses `Logo`; delete or stop exporting dead `Mark` if unused. Satisfies **AC-2**, **AC-7**, **AC-8**

## Consequences

**Positive**:

- One mark language across UI, tab, and shares
- Per route SEO becomes hard to skip
- Share previews look on brand instead of a generic photo

**Negative / tradeoffs**:

- OG frame typography and length limits become build breakers (by design)
- `keywords` add maintenance with little ranking upside
- ImageResponse OG must stay in sync with visual tokens by hand

**Neutral**:

- Spec 0001 AC-8 and 0003 AC-8 stay valid; this spec is the concrete implementation for the marketing routes that exist today
- Blog, `/about`, and `/technology` from 0001 are out of scope until those routes exist; extend `IndexablePath` when they ship
- Clarify in `apps/docs/AGENTS.md` that OG card generation is allowed while photography remains non generated

## Follow-up

- [ ] When 0001 blog or about routes ship, extend `IndexablePath`, `seoPages`, sitemap, and OG files
- [ ] Add real Search Console / Facebook / Twitter values to env in deploy when available
- [ ] Note in `apps/docs/AGENTS.md` that Next.js OG and icon generation is allowed; the “no images generated” rule still applies to photography
- [ ] Revisit whether `keywords` remain required after the first Search Console review

## Migration plan

**Strategy**: strangler inside the marketing app (replace Mark and metadata route by route in one feature branch; no live data migration)

**Phases**:

1. Land `Logo` and SEO helpers beside old Mark and inline metadata
2. Cut nav, footer, layout, and each indexable route over to the new helpers
3. Remove dead Mark export and photographic default OG reference

**Rollback**: revert the feature branch or commit; static site has no data backfill

**Risks**: temporary mix of Mark and Logo if a chrome call site is missed; catch with grep for `Mark` and visual pass on nav, footer, and recovery shells
