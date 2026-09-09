# 0002. UI components

## Summary

Add a small set of docs local wrappers for buttons, cards, footer, scroll spy, and progress so marketing chrome stops fighting `@circlecross/ui` with `!` overrides.

## Requirements

Covered by umbrella **AC-6**, **AC-7**, **AC-9**, **AC-10**, **AC-11**, **AC-15**.

## Decision

Live under `apps/docs/components/`. Compose `@circlecross/ui` Button, Toggle, Collapsible, and Sheet. Do not add these editorial variants to `packages/ui` in this pass.

**Components**:

| Component | Responsibility |
| --- | --- |
| `SiteButton` | `primary` (ink fill, one per section max), `secondary` (outline or ghost), `link` (text plus arrow) |
| `SiteCard` | eyebrow → title → body → optional `features[]` → optional media or icon → optional CTA |
| `SiteFooter` | Multi column footer from `content/footer.ts` |
| `ScrollProgress` | Fixed 2 to 3px copper line; GSAP ScrollTrigger when motion allowed |
| `useSectionSpy` | IntersectionObserver; drives `aria-current` on nav |

**Toggle and chapter triggers**: replace heavy `!` class stacks with `SiteButton` or Toggle variants that encode rounded pill and ghost chapter styles once.

**Active nav marker**: copper underline or colour shift; must not compete with body copy weight.

## Build notes

1. Implement wrappers and migrate LinkButton, siteCta, ghostReset call sites gradually.
2. Wire Navigation to `useSectionSpy`.
3. Mount `ScrollProgress` once at layout or page root.
4. Reuse `SiteFooter` on `/`, `/privacy`, and `/terms`.

## Rationale (short)

Docs local wrappers keep the warm paper voice out of product apps while still standing on accessible primitives. Ink primary plus copper chrome separates action from emphasis.
