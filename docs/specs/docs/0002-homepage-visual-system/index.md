# 0002. Homepage visual system

**Date**: 2026-09-09
**Status**: In Progress

## Summary

This decision upgrades the CircleCross public marketing site so the long homepage reads as one composed story. Shared type, spacing, colour, button, and card rules replace one off section styling. Copy moves into a shared content module, trust and product blocks get concrete but safe detail, and Privacy plus Terms drafts ship for legal review. Build it as a Tracer Bullet through the homepage, then apply the same system to `/privacy` and `/terms`.

## Structure

- [0002-visual-tokens.md](./0002-visual-tokens.md): heading tiers, copper emphasis, padding scale, shared left inset, eyebrow floor
- [0002-page-composition.md](./0002-page-composition.md): section order, merged encounter, quiet quote beat, quieter trust before the CTA
- [0002-ui-components.md](./0002-ui-components.md): docs button wrappers, card pattern, scroll spy, progress bar, footer shell
- [0002-content-legal.md](./0002-content-legal.md): shared `content/` module, asset prompt file, Privacy and Terms drafts
- [0002-start-world-picker.md](./0002-start-world-picker.md): start section world rows, one tap local save, status only (no carousel or select)

**Cross child contract**: Tokens from the visual tokens child are the only allowed heading, padding, inset, and emphasis classes. Page composition may only consume those classes plus the UI components child. Content and legal supply data only; components must not hard code product or legal copy. Copper is the sole inline emphasis and active chrome colour across every child. The start world picker child owns the `#start` preference control; other children must not reintroduce a select, wheel, or carousel there.

## Requirements

**User stories**:

1. As a visitor, I want clear visual hierarchy and pacing on the long homepage so that I can follow the CircleCross story without every section shouting at once.
2. As a privacy minded visitor, I want soft concrete trust examples so that I understand control without reading product backend detail.
3. As a visitor choosing a world, I want Go, Uni, and Pro presented as consistent cards with feature lists drawn from existing marketing copy so that I can tell them apart.
4. As a visitor near the end of the page, I want a complete footer and honest legal pages so that I can find anchors, contact, Privacy, and Terms.
5. As a visitor scrolling a long page, I want nav “you are here” state and a slim progress cue so that I keep orientation.

**Acceptance criteria**:

1. **AC-1**: Shared heading tiers (`h-hero`, `h-section`, `h-subsection`) and a single copper emphasis token are defined and used; olive and cream appear only as section moods, never as inline emphasis text.
2. **AC-2**: Homepage section order is hero → idea → merged `#connections` encounter → quiet quote beat → worlds → identity → quieter trust → start CTA → richer footer.
3. **AC-3**: Sections use a shared padding scale (`py-dense` for grid or card blocks, `py-statement` for single line or manifesto style blocks) instead of one flat `py-[140px]` everywhere.
4. **AC-4**: Eyebrow, headline, and body copy share one left inset (`px-[5.4%]` desktop, `px-[6%]` mobile). Only the final start CTA may centre text as an arrival beat.
5. **AC-5**: Eyebrow labels never render below 10px. Headlines wrap via max width; manual `<br>` tags are removed except where a natural wrap leaves a true orphan.
6. **AC-6**: Nav links for on page sections set `aria-current` from IntersectionObserver. A 2 to 3px copper progress bar updates via GSAP ScrollTrigger when motion is allowed, and via a simple scroll ratio when `prefers-reduced-motion` is set. Without client JS the page stays readable and linked.
7. **AC-7**: Each Go, Uni, and Pro chapter uses the shared card pattern: eyebrow or name, headline, poetic hook, feature list split from existing `tags`, image, CTA. Feature lines come only from current docs copy.
8. **AC-8**: Each trust principle includes one soft concrete example (user facing control language only). The presence card includes a static privacy control illustration. The trust block is visually quieter than the start CTA that follows.
9. **AC-9**: Footer is multi column (brand and tagline, product anchors, company or contact, legal) using the shared inset. Contact uses `hello@circlecross.app` marked TODO until confirmed. Store and social links are omitted or marked coming soon until real URLs exist.
10. **AC-10**: Docs button wrappers expose `primary`, `secondary`, and `link` variants on `@circlecross/ui` Button without `!` specificity fights on encounter toggles and chapter triggers.
11. **AC-11**: One card component pattern is reused for world chapters and principle items (optional image or icon, optional CTA).
12. **AC-12**: Homepage copy for worlds, principles, nav, and footer lives under `apps/docs/content/` and is imported by sections.
13. **AC-13**: `apps/docs/design-assets.todo.md` lists photography prompts per slot. Every missing or temporary image site has a `TODO(asset): …` marker in code.
14. **AC-14**: `/privacy` and `/terms` render drafted marketing site legal copy aligned with current site facts (no accounts, local world preference, host technical logs) and show a clear “draft for legal review” banner.
15. **AC-15**: After `/` is solid, the same tokens, buttons, cards, and footer apply to `/privacy` and `/terms`.
16. **AC-16**: WCAG AA, reduced motion, keyboard operation of world chapters and encounter toggles, and non dependence on WebGL remain intact.

## Decision

**Chosen option**: Option 2: Homepage Tracer Bullet then sitewide marketing system.

Enhance the live `apps/docs` editorial site in place. Introduce shared tokens and docs local component wrappers first, reorder and enrich the homepage as one vertical thread, then apply the same system to legal routes. Do not push editorial chrome into product apps in this pass.

## Feature design

**Data model sketch**:

| Entity | Storage | Required fields | Rules |
| --- | --- | --- | --- |
| `World` | `apps/docs/content/worlds.ts` | `id`, `name`, `theme`, `headline`, `description`, `features[]`, `hint`, `image`, `alt` | Exactly Go, Uni, Pro. `features` derived from today’s tag strings. Image may be `TODO(asset)`. |
| `Principle` | `apps/docs/content/principles.ts` | `title`, `copy`, `example`, `icon` | Soft concrete `example` only. No backend or matching mechanics. |
| `NavItem` | `apps/docs/content/nav.ts` | `label`, `href`, `sectionId?` | Scroll spy matches `sectionId` when present. |
| `FooterColumn` | `apps/docs/content/footer.ts` | `title`, `links[]` | Brand, product, company or contact, legal. |
| `LegalDoc` | `apps/docs/content/legal/` | `slug`, `title`, `sections[]`, `draftBanner` | Slugs `privacy` and `terms`. Draft until counsel signs off. |
| `AssetPrompt` | `apps/docs/design-assets.todo.md` | slot id, prompt, target path | Every missing slot has a matching code TODO. |

**State transitions**:

Nav active section: `none` → `sectionId` when a section crosses the observer root margin; returns to `none` when none match. World preference in `localStorage` stays as today (`circlecross-world`).

**Interface surface** (components, not HTTP):

| Surface | Inputs | Outputs | Notes |
| --- | --- | --- | --- |
| `SiteButton` | `variant`: primary \| secondary \| link, href or onClick, children | Accessible control | One primary per section max |
| `SiteCard` | eyebrow?, title, body, features?, media?, cta? | Article or region | Worlds and principles |
| `ScrollProgress` | none | Visual progress | GSAP when motion ok |
| `useSectionSpy` | section ids | active id | Sets `aria-current` on nav |
| `SiteFooter` | columns from content | Footer landmark | Shared across marketing routes |
| `LegalPage` | `LegalDoc` | Article | Draft banner required while draft |

**Value sourcing**:

| Action | Value displayed | Source |
| --- | --- | --- |
| Render world card features | Feature list items | Split from existing `tags` in `worlds` content (Explore · Find your people · Try something new; Campus life · Clubs & events · Shared ambitions; Workplaces · Collaboration · New opportunities) |
| Render world headlines and body | Headline, description, hint | Existing `apps/docs/components/worlds.tsx` copy moved into `content/worlds.ts` |
| Render principle examples | Soft concrete one liners | Drafted in content child; engineer may edit in review |
| Quiet quote beat | Two line philosophy | Reuse current “Less collecting contacts. / More finding your people.” |
| Nav active state | `aria-current` | IntersectionObserver on section ids from `content/nav.ts` |
| Progress bar width | 0 to 100% | Document scroll ratio via ScrollTrigger (or scroll listener under reduced motion) |
| Footer contact | Email string | Placeholder `hello@circlecross.app` with TODO until confirmed |
| Privacy and Terms body | Legal sections | Drafted from current `/privacy` facts plus parallel Terms structure; marked draft |
| Missing photograph | Placeholder and prompt | `design-assets.todo.md` slot + `TODO(asset)` at call site |
| Copper emphasis | Accent colour | Existing `--copper` / `text-copper` token; sole emphasis signal |

**Key invariants**:

1. Copper is the only inline text emphasis and active chrome colour. Olive and cream are backgrounds or moods only.
2. Public copy must not describe product backend mechanics, credentials, or unverified commercial claims (aligned with portal `0001`). Soft concrete trust language is limited to user facing controls.
3. No live waitlist, App Store, Play Store, or social URLs until real destinations exist.
4. Legal pages show a draft banner until human legal review replaces it.
5. Reusable editorial wrappers live in `apps/docs`; they compose `@circlecross/ui` primitives rather than forking product app chrome.
6. Content is never dependent on WebGL.

**Security model**:

All routes remain public and read only. World preference stays in browser `localStorage` only. Legal drafts must not invent data practices beyond the marketing site. Contact email is a `mailto:` link, not a form that collects PII on this site.

**Configuration required**:

- `SITE_URL`: existing; continues to drive social metadata origin. No new secrets for this pass.

**Critical test scenarios**:

- Happy path: scroll `/` end to end; hierarchy tiers, section order, spy, progress, cards, quieter trust, footer, and start CTA all present; verifies **AC-1** through **AC-11**, **AC-16**
- Failure case: disable JS; page remains readable with in page links; no broken layout dependence on spy or progress; verifies **AC-6**
- Content case: world features match split tags; principle examples present; legal draft banners visible; verifies **AC-7**, **AC-8**, **AC-12**, **AC-14**
- Sitewide case: `/privacy` and `/terms` use shared footer and tokens; verifies **AC-15**
- Accessibility: keyboard operates chapters and encounter toggles; eyebrow computed size ≥ 10px; verifies **AC-5**, **AC-10**, **AC-16**

## Build plan

Tracer Bullet order: one thin end to end thread on `/`, then thicken, then apply sitewide.

1. [x] Add visual tokens and shared classes (`h-hero`, `h-section`, `h-subsection`, copper emphasis, `py-dense`, `py-statement`, inset, eyebrow floor) in `globals.css` and `styles.ts`; refactor 2 to 3 existing sections to prove the thread. Satisfies **AC-1**, **AC-3**, **AC-4**, **AC-5**
2. [x] Create `apps/docs/content/` and move worlds, principles, nav, and footer copy into typed modules. Satisfies **AC-12**
3. [x] Add `SiteButton` and `SiteCard` wrappers; remove `!` override fights on chapter triggers and encounter toggles by using variants. Satisfies **AC-10**, **AC-11**
4. [x] Merge encounter into one `#connections` section with shared scroll trigger; place quiet quote beat after it; reorder trust before start; quiet the trust type and spacing. Satisfies **AC-2**, **AC-8**
5. [x] Wire world and principle UIs through `SiteCard` using content modules and feature lists from tags; add static privacy control illustration. Satisfies **AC-7**, **AC-8**, **AC-11**
6. [x] Add `useSectionSpy` and `ScrollProgress` (GSAP when motion allowed). Satisfies **AC-6**
7. [x] Ship multi column `SiteFooter`; add `design-assets.todo.md` and `TODO(asset)` markers. Satisfies **AC-9**, **AC-13**
8. [x] Draft `/privacy` expansion and new `/terms` from marketing site facts with draft banners; apply shared tokens and footer. Satisfies **AC-14**, **AC-15**
9. [x] Accessibility and Playwright pass for hierarchy, spy, chapters, toggles, legal banners. Satisfies **AC-16** and regression on **AC-6**, **AC-10**

## Migration plan

**Strategy**: strangler in place on `apps/docs` (new tokens and components land beside old utilities; sections switch over one by one).

**Phases**:

1. Tokens and 2 to 3 pilot sections
2. Content module extraction without visual change
3. Component wrappers and homepage reorder
4. Orientation chrome and footer
5. Legal routes and sitewide footer or token apply

**Rollback**: revert the docs app commit(s); no data migration. Feature flags are unnecessary for a static marketing site at this size.

**Risks**: copy drift while moving to `content/`; scroll trigger double binding when merging encounter; legal draft mistaken for final policy. Mitigate with draft banners, one scroll owner in the merged section, and a single content import path.

## Consequences

**Enables**: a coherent long scroll story, reusable marketing primitives, honest legal placeholders, and clearer Go or Uni or Pro differentiation without inventing product backend detail.

**Constrains**: product apps do not receive these editorial wrappers in this pass; cobalt forward guidance in `design.md` yields to the live copper and olive editorial for marketing; store and social links stay out until URLs exist.

**Follow-up required**: confirm the contact email; legal review of Privacy and Terms; replace temporary photos using `design-assets.todo.md`; reconcile `design.md` with the live marketing direction (see Follow-up).

## Follow-up

- [ ] Confirm production contact email and remove the TODO on `hello@circlecross.app`
- [ ] Human legal review of `/privacy` and `/terms`; remove draft banners when approved
- [ ] Commission or shoot assets listed in `design-assets.todo.md`
- [ ] Reconcile `apps/docs/design.md` (cobalt story) with `apps/docs/AGENTS.md` and this copper emphasis decision
- [ ] Later enroll blog and multi route work from portal `0001` under the same tokens once those routes exist

## Rationale

Reasoning and options: see [rationale.md](./rationale.md).
