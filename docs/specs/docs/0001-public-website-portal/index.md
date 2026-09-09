# 0001. Public website and technology blog

**Date**: 2026-09-08
**Status**: Proposed

## Summary

CircleCross needs a clear public home for people and investors, plus a small technical blog for engineers. The site will replace the generated starter in `apps/docs` with static Next.js routes, source controlled MDX posts, and an accessible shared interface. It will explain the platform without revealing proprietary product mechanics or private operational details.

## Requirements

**User stories**:

1. As a prospective member, I want to understand CircleCross and its three products so that I can see how the platform can remain part of my life journey.
2. As an investor, I want to understand the product direction and technical foundations so that I can assess the long term platform story.
3. As a technical reader, I want to browse public engineering writing so that I can understand selected principles and progress without access to private implementation details.

**Acceptance criteria**:

1. **AC-1**: `/` presents the CircleCross purpose, the “Your circles. Where they cross.” idea, the Go to Uni to Pro journey, platform continuity, and an “Explore the platform” action.
2. **AC-2**: `/products` presents separate Go, Uni, and Pro sections while clearly explaining their shared CircleCross identity.
3. **AC-3**: `/technology` explains selected high level platform principles and privacy and safety commitments without describing product mechanics, source code, credentials, environment values, or private operational details.
4. **AC-4**: `/about` presents the CircleCross brand story and mission for people and investors without unverified commercial claims.
5. **AC-5**: `/blog` lists only published MDX posts and `/blog/[slug]` renders a selected published post with its typed metadata.
6. **AC-6**: A draft or an unknown post route returns the standard Next.js not found response. Invalid post metadata fails the build with a clear validation message.
7. **AC-7**: All public routes provide responsive keyboard navigation, visible focus, semantic landmarks, suitable colour contrast, and meaningful text alternatives at WCAG AA level.
8. **AC-8**: Published routes have appropriate metadata, canonical URLs, social preview metadata, a sitemap, and robots rules that allow public marketing and published blog pages to be indexed.
9. **AC-9**: Shared shadcn components and styling primitives live in `packages/ui`, while the public routes contain only CircleCross content and route composition.

## Decision

**Chosen option**: A static Next.js public site with local MDX blog posts and shared shadcn components.

Use Next.js App Router routes in `apps/docs`, the official `@next/mdx` integration, typed frontmatter validation, Prettier formatting, and the shared `packages/ui` component package. No runtime content API, database, authentication, or visitor submission form belongs in this feature.

## Feature design

**Data model sketch**:

| Entity     | Storage               | Required fields                                                                                | Rules                                                                              |
| ---------- | --------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `BlogPost` | One local `.mdx` file | `title`, `description`, `slug`, `publishedAt`, `topic`, `readingTime`, `isPublished`, MDX body | `slug` is unique by filename and frontmatter. Invalid frontmatter stops the build. |

**State transitions**:

`BlogPost` has a source controlled publishing state. A draft has `isPublished: false`. A published post has `isPublished: true`. Changing the field and merging a reviewed change is the only publishing action.

**Route surface**:

| Route          | Render mode | Key inputs                       | Output                          | Access | Failure handling                        |
| -------------- | ----------- | -------------------------------- | ------------------------------- | ------ | --------------------------------------- |
| `/`            | Static      | Site content                     | Public CircleCross introduction | Public | Build fails on invalid local content    |
| `/products`    | Static      | Product content                  | Go, Uni, and Pro story          | Public | Build fails on invalid local content    |
| `/technology`  | Static      | Approved technical copy          | High level principles           | Public | Build fails on invalid local content    |
| `/about`       | Static      | Approved brand copy              | Mission and brand story         | Public | Build fails on invalid local content    |
| `/blog`        | Static      | Published `BlogPost` entries     | Post index                      | Public | Empty state when no posts are published |
| `/blog/[slug]` | Static      | URL `slug`, published post index | One MDX post                    | Public | `notFound()` for unknown or draft posts |

**Value sourcing**:

| Action                   | Value displayed                                     | Source                                                                                                       |
| ------------------------ | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Render a marketing route | Headline, product copy, calls to action             | Reviewed source controlled copy in `apps/docs`                                                               |
| Render the blog index    | Title, description, topic, date, reading time, link | Validated frontmatter from published `apps/docs/content/blog/*.mdx` files                                    |
| Render a post            | Metadata and article body                           | The matching validated MDX file selected by `slug`                                                           |
| Generate metadata        | Title, description, canonical URL, social values    | Route copy or validated `BlogPost` frontmatter, the route pathname, and `https://circlecross.up.railway.app` |
| Generate sitemap         | Indexable public URLs                               | Static route inventory and published `BlogPost` entries                                                      |

**Key invariants**:

1. Only `BlogPost` files with `isPublished: true` appear in the blog index, sitemap, and post routes.
2. Public copy must not describe product mechanics, source code, credentials, environment values, private prompts, private conversations, or unverified commercial facts.
3. The site makes no network call for content during rendering.
4. All reusable UI components are owned by the shared `packages/ui` workspace and imported through named exports from `@circlecross/ui`.

**Security model**:

Every route is public and read only. The repository is the only content authoring boundary. MDX is trusted source controlled content and must not load remote code or evaluate user supplied content. There are no accounts, forms, cookies for feature behaviour, private route checks, or personal data writes in this feature.

**Configuration required**:

None. `https://circlecross.up.railway.app` is the approved canonical public origin for metadata, social previews, and the sitemap.

**Critical test scenarios**:

1. Happy path: a published MDX post is listed and renders its metadata and body, verifies **AC-5**.
2. Failure case: an unknown or draft slug returns the not found page, verifies **AC-6**.
3. Failure case: invalid frontmatter is rejected before a production build completes, verifies **AC-6**.
4. Accessibility: keyboard users can reach every navigation item and see focus, verifies **AC-7**.
5. Search visibility: generated sitemap excludes drafts and includes every public route, verifies **AC-8**.

## Build plan

1. Maintain shared components, tokens, and named exports in `packages/ui` for every application, satisfies **AC-7**, **AC-9**.
2. Replace the generated `apps/docs` shell with a responsive shared layout, global visual tokens, header, footer, navigation, and public safe content constants, satisfies **AC-1**, **AC-7**, **AC-9**.
3. Add the static marketing routes for home, products, technology, and about with the approved CircleCross story, satisfies **AC-1**, **AC-2**, **AC-3**, **AC-4**.
4. Add typed MDX loading, frontmatter validation, published post filtering, blog index, post route, and not found behaviour, satisfies **AC-5**, **AC-6**.
5. Add route metadata, canonical URL handling, social previews, sitemap, robots rules, responsive refinements, and public content guardrails, satisfies **AC-3**, **AC-7**, **AC-8**.
6. Run formatting, linting, type checks, production build, route checks, accessibility checks, and the agreed review steps, satisfies **AC-1** through **AC-9**.

## Consequences

**Positive**:

1. CircleCross has a coherent public story and a safe technical publishing surface without a new service.
2. Posts are reviewed, versioned, and deployable with ordinary Git changes.
3. The interface can be reused by every application through `packages/ui`.

**Negative / tradeoffs**:

1. Nontechnical authors need a developer to publish or update content.
2. Installing every shadcn component increases the shared package surface and requires dependency maintenance even when a component is not used yet.
3. A static site cannot support a waitlist, contact form, or analytics driven personalisation until a separate feature defines data handling and consent.

**Neutral**:

1. The generated starter is replaced directly because it has no users, data, or public contract to migrate.
2. The feature creates no database migration and no new environment variable.

## Follow-up

1. [ ] Define a reviewed public content process before publishing any commercial, fundraising, safety, or partnership claim.
2. [ ] Design a separate feature before adding a waitlist, contact form, newsletter, analytics product, or content management service.

## Rationale

Reasoning and options are in [rationale.md](./rationale.md).
