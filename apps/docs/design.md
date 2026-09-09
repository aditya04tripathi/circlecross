---
name: circlecross-public-design-system
source: derived
character: "CircleCross is warm and certain. It feels like a trusted connection that gains depth as a person moves from school to university to work. Cobalt crossing lines and generous editorial space make the platform feel connected without looking like a generic social network."
tokens: "Real values live in packages/ui/src/styles/globals.css. Read that file rather than duplicating values here."
contrast: "Light body 11.92:1, light muted 5.83:1, light action 6.70:1. Dark body 13.83:1, dark muted 8.89:1, dark action 7.32:1."
---

## Build mandate

Every public route is a complete product surface with a clear story, decisive hierarchy, credible supporting copy, accessible navigation, and a considered footer. Avoid generic social network imagery and unsupported commercial claims. Use the selected CircleCross story and technical boundary from spec 0001.

## Character and direction

Use a light professional foundation with an equally complete dark theme. Cobalt is reserved for focus, direct action, and the idea of circles crossing. Decorative geometry may use the accent at low opacity, never as the only way information is conveyed. Headlines are editorial and assured. Body content stays calm and readable.

## Composition patterns

Marketing routes use a narrow top navigation, a generous hero, a sequence of clearly titled sections, restrained card groups, and a complete footer. The blog list uses an editorial index. A post uses a readable single column with metadata before the article body. Long form content never exceeds a comfortable reading width.

## Component and usage rules

Use shadcn components from `@circlecross/ui/components` when an accessible primitive exists. Use the primary action style only for the main next step. Secondary actions use outlined or quiet styles. Panels use surface and border tokens instead of heavy shadows. Keep repeated cards structurally consistent and use Lucide icons only when they clarify the content.

## Responsive and accessibility direction

Build from the smallest screen upward. Keep tap targets at least 44 by 44 pixels. Include a skip link, visible focus ring, semantic landmarks, ordered headings, reduced motion support, and text equivalents for decorative and meaningful visual elements.
