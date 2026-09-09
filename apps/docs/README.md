# CircleCross public website

An editorial marketing experience built from scratch with Next.js, strict TypeScript, React Three Fiber and GSAP.

## Run

- `pnpm --filter docs dev` — development on port 3001.
- `pnpm --filter docs build` — static page generation and production bundle.
- `pnpm --filter docs lint`
- `pnpm --filter docs check-types`
- `pnpm --filter docs format:check`

Set `SITE_URL` to the deployed public origin for social metadata. It is required at build time (Docker `ARG`/`ENV`) so Open Graph URLs are not baked as localhost. The local fallback is `http://localhost:8004`.

## Structure

- `app/`: homepage, privacy information, document metadata and responsive design system.
- `components/`: navigation, encounter explorer, product chapters and final selection interaction.
- `components/scene/`: lazy WebGL orbit sculpture and independent SVG fallback.
- `components/motion/`: responsive GSAP timelines and lifecycle cleanup.
- `design-assets.todo.md`: custom photography prompts. No images were generated.

## Behavior and accessibility

Content renders on the server and remains readable without animation. Mobile and reduced-motion visitors receive the lightweight orbital SVG instead of the WebGL bundle. The 3D canvas uses capped pixel density and pauses outside the viewport or in hidden tabs. Native scrolling is preserved. Navigation uses a native modal dialog with Escape dismissal and focus restoration. Product chapters are keyboard-accessible disclosures; encounter choices expose their selected state.

The final CTA stores only a product preference on the current device. It does not submit contact details, create an account or claim to join a waitlist. Connect the final action to a real onboarding service when the products launch. The privacy copy intentionally covers this marketing site only.

## Photographs

Temporary Unsplash photographs are served locally through Next Image: photo-1529156069898-49953e39b3ac (friends), photo-1523240795612-9a054b0db644 (students), photo-1522071820081-009f0129c71c (collaboration). Replace with brand-owned photography following the TODO prompts before a brand campaign.

Default exports are used only where Next.js route/config conventions require them. Reusable components use named exports.
