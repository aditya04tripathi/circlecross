# 0002. Content and legal

## Summary

Centralise homepage copy in `apps/docs/content/`, draft soft concrete trust examples, record photography prompts, and ship Privacy plus Terms drafts that match what this marketing site actually does today.

## Requirements

Covered by umbrella **AC-7**, **AC-8**, **AC-9**, **AC-12**, **AC-13**, **AC-14**.

## Decision

**Content modules** (`apps/docs/content/`):

- `worlds.ts` — move from `components/worlds.tsx`; split each `tags` string on `·` into `features[]`
- `principles.ts` — titles and copy from `app/page.tsx` plus draft examples below
- `nav.ts` — label, href, sectionId
- `footer.ts` — column groups
- `legal/privacy.ts` and `legal/terms.ts` — sectioned draft documents

**Draft principle examples** (editable in review):

| Principle | Example |
| --- | --- |
| An invitation. Never an obligation. | You choose whether a crossed path becomes a message. |
| Your presence. Your choice. | You can show a general area, not a pin, and visibility stays off until you turn it on. |
| People first. By design. | The product is built to help you meet in real life, not to keep you scrolling a feed. |

Presence card also gets a static SVG toggle or switch illustration (not an interactive control that claims a live account setting).

**Assets**: create `apps/docs/design-assets.todo.md` with one prompt per photograph slot (hero supporting image, world images, trust image, any new card media). At each image call site add `TODO(asset): <slot id>`. Do not generate images in the agent workflow.

**Footer contact**: `mailto:hello@circlecross.app` with an adjacent code TODO to confirm the address. No store or social URLs until real ones exist.

**Legal drafts** (marketing site only, draft banner required):

Privacy expands the current page:

1. Scope: this website, not Go or Uni or Pro accounts
2. What we do not collect on the site (no email form, no precise location ask)
3. Local world preference in `localStorage` and how to clear it
4. Hosting technical logs (IP, request metadata) for delivery and security
5. Product privacy: products are introduced as upcoming; product notices ship before registration
6. Contact: placeholder email
7. Changes: we may update this draft; banner remains until counsel approves

Terms of use draft:

1. Agreement to use the public marketing site
2. Informational content only; no offer of a live account or waitlist service on this site
3. Intellectual property in brand, text, and imagery
4. Acceptable use (no scraping that harms delivery, no impersonation of CircleCross)
5. Disclaimer of warranties for pre launch marketing content
6. Limitation of liability appropriate to a static brochure site
7. Governing law placeholder marked TODO for counsel
8. Contact placeholder email

Both pages say clearly they are drafts for legal review and do not describe future product data practices beyond the sentences already on today’s Privacy page.

## Build notes

1. Extract content modules without visual change first.
2. Write legal pages consuming `LegalDoc` and shared footer.
3. Author `design-assets.todo.md` and seed TODOs at existing image paths.

## Rationale (short)

A shared content module prevents card UI and copy from drifting apart. Drafting legal pages from the live Privacy facts avoids inventing product backend behaviour. Asset prompts in repo keep photography work visible without generating images against `AGENTS.md`.
