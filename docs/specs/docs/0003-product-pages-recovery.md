# 0003. Product pages and recovery surfaces

**Date**: 2026-09-09
**Status**: In Progress

## Summary

CircleCross needs dedicated public pages for Go, Uni, and Pro so a visitor can go deeper than a homepage card, then choose a world and return to the start call to action. Unknown URLs and runtime failures get calm branded recovery pages that keep full marketing chrome. World preference moves from browser local storage to one first party cookie, and Privacy plus Terms drafts are updated to match.

## Context

> ⚠️ Premise note: Clearing the old local storage key on load (without copying it into the cookie) drops any saved world for returning visitors. That is a conscious simplicity choice. If launch traffic already depends on that preference, prefer a one time copy instead. This feature also defers `/products` from spec 0001 AC-2; the three world routes replace that overview for now.

The public marketing site in `apps/docs` already tells the Go to Uni to Pro story on the homepage and in shared content. Visitors and investors still lack shareable deep links for each world. Spec 0001 planned a single `/products` overview. Spec 0002 hardened homepage world cards, tokens, buttons, cards, footer, and draft legal pages. Neither shipped standalone `/go`, `/uni`, or `/pro` routes, nor branded `not-found` / `error` surfaces.

Product apps under `apps/go`, `apps/uni`, and `apps/pro` remain scaffolds with no product behaviour. This decision is only for the public marketing site. The homepage start flow still saves a world preference on device with no account. That preference is currently `localStorage` under `circlecross-world`. Legal drafts still describe local storage. Footer product links still jump to homepage anchors rather than world routes.

Without a decision, `/develop` would invent route shape, recovery UX, preference storage, and how homepage chapters relate to deep pages. Drift between homepage copy and product pages would be likely. Not deciding also leaves 0001’s `/products` AC and the live long scroll story unresolved against each other.

## Requirements

**User stories**:

1. As a curious visitor, I want a deep page for Go, Uni, or Pro so that I can understand that world and choose it with confidence.
2. As a visitor who hit a bad URL or a broken render, I want a calm branded recovery page so that I can get home or to a world without seeing technical noise.
3. As a returning visitor on the marketing site, I want one clear world preference on this device so that start and product CTAs stay consistent.

**Acceptance criteria**:

1. **AC-1**: `/go`, `/uni`, and `/pro` each render a deep world story (hero, story, richer features, other worlds, choose CTA, footer) using shared tokens and chrome from spec 0002.
2. **AC-2**: Product page feature lists may be richer than homepage cards but only from existing approved marketing copy; no product mechanics, accounts, waitlists, or unverified commercial claims.
3. **AC-3**: Choosing on a product page writes the world preference cookie and navigates to `/#start`.
4. **AC-4**: Homepage worlds use the shared product chapter block; chapter CTAs link to `/go`, `/uni`, and `/pro`.
5. **AC-5**: Sitewide world preference uses one cookie (`circlecross-world`, values `Go`|`Uni`|`Pro`); homepage start no longer writes `localStorage`; on helper load any existing `circlecross-world` local storage key is cleared immediately.
6. **AC-6**: Unknown routes render branded `not-found` with full nav and footer, narrow content column, Home link, and links to the three worlds.
7. **AC-7**: Runtime `error` uses the same recovery layout and link set as not found, with different copy and no Try again control; stack traces never render to visitors.
8. **AC-8**: `/go`, `/uni`, and `/pro` are indexable, have unique metadata and canonical URLs, and appear in the sitemap; recovery surfaces stay out of the sitemap and rely on HTTP status.
9. **AC-9**: Footer product column links point at `/go`, `/uni`, and `/pro`.
10. **AC-10**: Privacy (and Terms if they mention storage) describe the first party preference cookie, not local storage.
11. **AC-11**: WCAG AA, keyboard use, visible focus, and `prefers-reduced-motion` remain intact on product and recovery pages.
12. **AC-12**: `/products` is not built in this feature; conflict with 0001 AC-2 is recorded as follow up.

## Options considered

### Option 1: Thin shareable shells only

Ship `/go`, `/uni`, `/pro` as near clones of homepage world cards with minimal new copy, keep local storage, and use default Next.js recovery UI.

**Pros**:
- Fastest path to shareable URLs.

**Cons**:
- Does not deepen the story; recovery feels unfinished; storage story stays split from legal drafts.

### Option 2: Deep product pages, branded recovery, cookie preference (chosen)

Dedicated story pages with a shared chapter used on the homepage, calm recovery chrome, one cookie for preference, legal copy updated, `/products` deferred.

**Pros**:
- Matches the conversion job; one content model; recovery matches brand; preference and Privacy stay aligned.

**Cons**:
- Larger than shells alone; clears prior local storage without migration; leaves 0001 `/products` AC unresolved until follow up.

### Option 3: Single `/products` hub plus anchors

Keep 0001’s one products page and deepen sections there instead of three routes.

**Pros**:
- Honours 0001 AC-2 directly; fewer routes.

**Cons**:
- Weaker share URLs per world; harder to give each world a hero first viewport.

## Decision

**Chosen option**: Option 2: Deep product pages, branded recovery, cookie preference.

Ship static App Router pages for `/go`, `/uni`, and `/pro` in `apps/docs`, shared product chapter composition, branded `not-found` and `error`, one first party preference cookie with immediate local storage clear, footer and sitemap updates, and legal draft edits. Design source is a suggested direction aligned to the live editorial system (no Figma frame set).

**Implementation skills**: none (project AGENTS.md records Agent Skills as declined)

## Rationale

Visitors need a deeper, shareable story per world and a clear choose path back to start. Three routes beat a single `/products` hub for that job, so this feature defers 0001’s overview rather than half building both. Reusing 0002 tokens and a shared chapter prevents homepage and deep page drift. A cookie unifies preference across routes better than leaving start on local storage while product pages write something else. Updating Privacy in the same pass avoids shipping a storage change the legal draft still denies. Clearing local storage immediately is simpler than a migration path; the cost is losing any prior saved world, which the team accepted.

Motion stays restrained and optional: short entrance or scroll cues only where the homepage already does similar work, always honouring `prefers-reduced-motion`, and never depending on WebGL. No new analytics product ships here. No `global-error.tsx` unless root layout failure becomes a real incident later.

## Feature design

**Data model sketch**:

| Entity | Storage | Required fields | Rules |
| --- | --- | --- | --- |
| `World` | `apps/docs/content/worlds.ts` | `id` (`go`\|`uni`\|`pro`), `name`, `theme`, `accent`, `headline`, `description`, `story`, `features[]`, `hint`, `image`, `alt` | Exactly three worlds. `story` required for product pages. `features` may grow only from approved marketing copy. Image may stay temporary with `TODO(asset)` and prompts in `design-assets.todo.md`. |
| `RecoveryCopy` | `apps/docs/content/recovery.ts` | For `notFound` and `error`: `title`, `body`; shared link labels as needed | Drives recovery UI only. Not in sitemap. |

**State transitions**:

World preference on device: `unset` → `Go`\|`Uni`\|`Pro` (cookie write). Failed write → `unavailable` UI state (explore still allowed). On helper init: delete `localStorage["circlecross-world"]` if present, regardless of cookie state.

**Page composition** (product pages):

1. Hero (world name as brand signal, headline, short support, full bleed atmosphere from `World.image`)
2. Story (`World.story`)
3. Features (richer `features[]`)
4. Other worlds (links to the other two routes)
5. Choose CTA (write cookie, go to `/#start`)
6. Site footer

**Recovery composition**:

Full marketing nav and footer; narrow content column like legal pages; headline; one sentence; Home; links to `/go`, `/uni`, `/pro`. Error copy differs; no Try again.

**Design direction**: Warm paper, copper, olive editorial system from the live site and spec 0002. No purple glow dashboard look. Temporary photos ship now; engineer adds replacements later via asset TODOs.

**API surface** (App Router routes; static marketing, no JSON API):

| Route / file | Render | Key inputs | Output | Access | Key errors |
| --- | --- | --- | --- | --- | --- |
| `/go`, `/uni`, `/pro` | Static | `World` by id | Deep product page + metadata | Public | Build fails on invalid content |
| `app/not-found.tsx` | Special | `RecoveryCopy.notFound` | Branded 404 UI | Public | N/A |
| `app/error.tsx` | Client special | `RecoveryCopy.error` | Branded error UI | Public | Must not render `error.stack` |
| Preference helper | Client | world `Go`\|`Uni`\|`Pro` | Cookie write / read / clear local storage | Public device | Write failure → unavailable |

Cookie: name `circlecross-world`; values `Go`\|`Uni`\|`Pro`; `Path=/`; `SameSite=Lax`; `Max-Age` ≈ 1 year; readable by JS (not HttpOnly); `Secure` on HTTPS.

**Value sourcing**:

| Action | Value produced / displayed | Source |
| --- | --- | --- |
| Render product page | Name, headline, description, story, features, image, alt | `World` in `content/worlds.ts` |
| Render other worlds links | Other world names and hrefs | Remaining `World` rows; hrefs `/go` `/uni` `/pro` |
| Product choose CTA | Preference value written | Button’s world `name`; cookie helper |
| Navigate after choose | `/#start` | Decided in this spec |
| Render not found / error | Title, body, link labels | `content/recovery.ts` |
| Metadata title / description | Per world SEO strings | Derived from `World.name` + `headline` / `description` |
| Canonical / OG URL | Absolute URL | Path + existing `SITE_URL` validation |
| Sitemap entries | `/go` `/uni` `/pro` | Static inventory in this feature |
| Footer product links | Labels and hrefs | `content/footer.ts` updated to the three routes |
| Legal storage section | Cookie behaviour copy | Updated `content/legal/privacy.ts` (Terms if needed) |
| Start section save / read | Preference | Same cookie helper as product CTA |
| Unavailable message | Calm copy when cookie blocked | Existing start pattern, reused |

**Key invariants**:

1. Only three product world ids exist; unknown world routes do not soft render a fourth world.
2. Public copy never describes product mechanics, credentials, private ops, or unverified commercial facts.
3. Preference cookie values are exactly `Go`, `Uni`, or `Pro`.
4. Recovery UI never shows stack traces or internal error digests.
5. Shared product chapter is the only homepage worlds presentation; product pages compose from the same block plus story, features, other worlds, and choose CTA.
6. `/products` is out of scope for this build.

**Security model**:

All routes are public and read only. Preference is a non sensitive first party UX cookie, not authentication. No accounts, forms that collect PII beyond the preference itself, or server side personal data stores in this feature. MDX and content remain trusted source controlled files. Cookie is not HttpOnly so client UI can read it; that is acceptable for a non auth preference and must stay documented in Privacy.

**Configuration required**:

No new env vars. Continues to use existing `SITE_URL` for canonical and social metadata origins.

**Critical test scenarios**:

- Happy path: open `/go`, read story, choose Go, cookie set, land on `/#start` with preference reflected, verifies **AC-1**, **AC-3**, **AC-5**
- Happy path: homepage world CTA navigates to `/uni`, verifies **AC-4**
- Failure case: cookie write blocked shows unavailable copy and still allows explore / home, verifies **AC-5** and the unavailable rule
- Failure case: unknown path shows branded not found with Home and three world links, verifies **AC-6**
- Failure case: forced render error shows branded error without stack or Try again, verifies **AC-7**
- Auth/permission: every route remains publicly readable with no session gate, verifies public access under **AC-8** and **AC-11**
- Content safety: product features come only from approved marketing strings, verifies **AC-2**
- SEO: sitemap lists three product URLs and omits recovery, verifies **AC-8**
- Legal: Privacy mentions the preference cookie, verifies **AC-10**

## Build plan

Tracer Bullet: one thin path through content, preference, one product page, recovery, then widen.

1. [x] Add `story` (and any richer `features`) on `World`, add `content/recovery.ts`, add `lib` cookie helper that clears `localStorage` key `circlecross-world` on load, satisfies **AC-2**, **AC-5**, **AC-6**, **AC-7**
2. [x] Build shared product chapter; wire homepage worlds to it with CTAs to `/go` `/uni` `/pro`; ship one product route end to end (hero → story → features → other worlds → choose → `/#start`), satisfies **AC-1**, **AC-3**, **AC-4**
3. [x] Ship the remaining two product routes; migrate start off local storage onto the cookie helper; update footer product links, satisfies **AC-1**, **AC-5**, **AC-9**
4. [x] Add `not-found.tsx` and `error.tsx` with full chrome and recovery content; metadata + sitemap for product URLs; update Privacy/Terms storage language; accessibility pass, satisfies **AC-6**, **AC-7**, **AC-8**, **AC-10**, **AC-11**
5. [x] Confirm `/products` remains unbuilt and note 0001 follow up, satisfies **AC-12**

## Consequences

**Positive**:

- Shareable deep links per world with a clear choose path
- Homepage and product pages share one chapter model
- Preference storage and legal drafts stay honest
- Recovery matches brand instead of framework defaults

**Negative / tradeoffs**:

- Returning visitors lose any prior local storage preference immediately
- 0001 AC-2 (`/products`) stays unmet until a later decision
- Client readable cookie is visible to XSS if a script injection ever appears (mitigate by keeping the surface static and tight)

**Neutral**:

- Temporary world images remain until the engineer replaces them
- Product apps are unchanged
- No `global-error.tsx` in this pass

## Migration plan

**Strategy**: big bang for preference storage on the marketing site
**Phases**:
1. Land cookie helper; clear local storage key on load; switch start and product CTA writers
2. Update Privacy/Terms in the same change set so drafts match behaviour
**Rollback**: revert the helper and legal copy; visitors simply unset preference again
**Risks**: silent loss of prior preference; copy drift if legal update is skipped

## Follow-up

- [ ] Resolve 0001 AC-2: keep `/products` deferred, add a light hub, or supersede that criterion toward the three routes (also listed under Deferred in `docs/scope/scope.md`)
- [ ] Replace temporary world photographs and clear related `TODO(asset)` markers
- [ ] Consider `global-error.tsx` only if root layout failures show up in production
