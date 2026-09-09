# 0002. Page composition

## Summary

Reorder the homepage so explain beats, rest beats, product proof, trust, and ask land in a healthier sequence. Merge the encounter experience into one section and keep trust quiet immediately before the final CTA.

## Requirements

Covered by umbrella **AC-2**, **AC-8** (placement and quieting).

## Decision

**Target order**:

1. Hero
2. Idea (manifesto)
3. Merged encounter (`#connections`): scenario toggles and path illustration under one scroll trigger owner
4. Quiet quote beat (reuse “Less collecting contacts.” / “More finding your people.”)
5. Worlds (Go, Uni, Pro)
6. Identity (constellation)
7. Trust (quieter type, more whitespace, soft concrete examples)
8. Start CTA (centred arrival)
9. Footer

**Encounter merge**: one `<section id="connections">` owns toggles, illustration, and GSAP ScrollTrigger registration. Do not leave two sibling sections each binding the same scrub.

**Trust quieting**: use `h-subsection` or reduced section title scale, `py-dense` around the three card grid, and keep surrounding statement air smaller than the start CTA’s `py-statement`.

## Build notes

1. Lift philosophy block into the post encounter quote beat (may already sit between encounter and worlds; keep it there after merge).
2. Move `#trust` to sit immediately before `#start`.
3. Confirm nav `sectionId` list matches the new order.

## Rationale (short)

Two dense explain beats in a row fatigue the reader. Trust after the full product pitch and before the ask matches reassurance before commitment. Merging encounter avoids double scroll owners, a common GSAP footgun.
