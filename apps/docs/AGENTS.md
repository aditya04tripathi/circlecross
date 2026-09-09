# CircleCross public marketing website

This workspace is the public marketing website, despite the historical `docs` name. It is rebuilt independently of the product applications.

Use `pnpm --filter docs dev`, `build`, `lint`, `check-types`, and `format:check` from the monorepo root.

The homepage is composed in `app/page.tsx`; reusable interactive sections are in `components/`; procedural WebGL and its SVG fallback live in `components/scene/`; GSAP timelines live in `components/motion/`. The responsive design system is in `app/globals.css`.

Preserve the warm-paper, copper and olive editorial direction, spacious typography and restrained orbital motif. Respect reduced motion, native scrolling, touch layouts, semantic controls and keyboard focus. Never make content dependent on WebGL. Keep Three.js lazy and pause offscreen rendering.

No images should be generated. Custom photography prompts are TODOs in `design-assets.todo.md`. Current photographs are temporary assets served locally.

The final action saves a local product preference only. Do not imply a working account or waitlist service until a real integration exists. `SITE_URL` controls the social metadata origin and must be a valid HTTP(S) URL.

Use named exports for reusable code; Next.js route/config default exports are framework exceptions. Inherit root strict TypeScript and tooling rules.
