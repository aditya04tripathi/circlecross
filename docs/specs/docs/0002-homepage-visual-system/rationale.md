# Rationale: Homepage visual system

## Context

> Premise note: This brief spans hierarchy, pacing, spacing, alignment, type, orientation chrome, product cards, trust copy, footer, buttons, and cards. Treating it as one umbrella with four child specs keeps one build spine without pretending it is a single micro decision. Portal `0001` stays the broader public site foundation (routes, MDX blog). This umbrella only upgrades the live marketing visual and content system. Soft concrete trust examples stay inside the portal rule that public copy must not describe product backend mechanics.

The live CircleCross marketing homepage in `apps/docs` already tells a strong editorial story, but the craft is uneven. Five section headings sit in the same large size band. Emphasis colour flips between copper, olive, and pale identity tones. Padding is a flat large vertical rhythm whether a section holds a dense three card grid or a single statement. Alignment drifts: most of the page is left anchored while manifesto and philosophy moments centre on their own. Eyebrows shrink below a comfortable floor on small screens. Manual line breaks fight responsive wrap. Orientation chrome is missing on a very long scroll. Go, Uni, and Pro still read as poetic chapters more than comparable offers. Trust principles stay abstract for a privacy sensitive audience. The footer is thin for the length of the page. Buttons and “cards” are restyled ad hoc with heavy `!` overrides rather than a small variant system.

Leaving this undecided means `/develop` keeps patching one section at a time and the page never teaches a single reading grammar. Deciding it now gives Tracer Bullet work a system to thicken against: tokens first, then composition, then components, then content and legal.

Related: [0001 public website portal](../0001-public-website-portal/index.md) owns routes and publishing boundaries. This umbrella must not reopen the blog or multi route IA; it applies marketing system rules to `/`, `/privacy`, and `/terms`.

## Options considered

### Option 1: Fix in place only

Keep section order and copy structure. Patch heading clamps, padding, and a few accents section by section.

**Pros**: Smallest diff. Low risk to GSAP timelines.

**Cons**: Does not fix pacing, trust placement, card consistency, footer, legal drafts, or orientation. The `!` override pattern remains.

### Option 2: Homepage Tracer Bullet then sitewide marketing system

Introduce shared tokens and docs local wrappers. Reorder and enrich `/` as one vertical thread. Then apply footer and tokens to legal routes.

**Pros**: Matches Tracer Bullet. Teaches one visual grammar. Respects `apps/docs` ownership and portal copy boundaries. Honest about pre launch footer links.

**Cons**: Larger than a visual polish PR. Needs care around scroll trigger ownership when merging encounter.

### Option 3: Push a full design system into `packages/ui` and redesign every portal route now

Build shared editorial primitives for all apps and finish `/products`, `/blog`, and friends in the same pass.

**Pros**: Maximum consistency across the monorepo.

**Cons**: Overbuilds for product apps that do not share this editorial voice. Collides with unfinished portal routes in `0001`. High big bang risk.

## Rationale

Option 2 wins because the pain is real on the live homepage and the stack already has the right seams (`styles.ts`, `globals.css`, section components, `@circlecross/ui` primitives). A strangler migration lets tokens prove themselves on a few sections before the reorder. Docs local wrappers avoid forcing warm paper marketing chrome into Go, Uni, and Pro product shells. Soft concrete trust copy and drafted legal pages increase honesty without claiming product backend behaviour. Keeping store and social links out until URLs exist matches `apps/docs/AGENTS.md`.

Option 1 was the runner up for a tiny polish window; it would leave the storytelling and component debt intact. Option 3 fails the Tuesday at 5pm test for this team and this milestone.

**Recommend calls locked in writing**:

1. Quiet quote beat reuses the existing philosophy lines (“Less collecting contacts.” / “More finding your people.”) so we do not invent a fake metric.
2. Principle examples (drafts for edit): invitation card “You choose whether a crossed path becomes a message.”; presence card “You can show a general area, not a pin, and visibility stays off until you turn it on.”; people first card “The product is built to help you meet in real life, not to keep you scrolling a feed.”
3. Primary button fill stays ink (not copper) so copper remains the emphasis and progress signal; copper marks key phrases and active chrome.
4. Progress uses GSAP ScrollTrigger when motion is allowed; reduced motion still updates width without fancy tweening.

## Current system notes

Scout of `apps/docs`: section order is hero, idea, Encounter, philosophy, Worlds, identity, trust, Start, footer. Shared utilities live in `components/styles.ts`. Theme tokens live in `app/globals.css`. Heavy `!` resets appear on world chapter triggers, encounter toggles, and ghost links. No scroll spy. Footer has three links. Worlds already carry headline, description, and middot joined tags suitable for feature lists. Privacy page already states no account, local world preference, and host technical logs.

## References

None (engineer chose no references section).
