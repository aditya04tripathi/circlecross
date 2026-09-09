# Rationale for 0001. Public website and technology blog

## Context

> ⚠️ Premise note: The original request asked for a full documentation portal and chat archive. The clarified public scope excludes conversation records and general guides, so this decision designs a public marketing site with a technical blog instead. Publishing internal product mechanics would weaken CircleCross before there is a deliberate public communications process.

`apps/docs` is currently an unmodified Next.js starter. CircleCross needs a public safe site that introduces the brand, explains the related Go, Uni, and Pro products, and gives people and investors a credible platform narrative. It also needs a technical writing surface that technical readers can browse without access to private records.

The project already chose Next.js App Router, a shared UI and Tailwind foundation in `packages/ui`, strict TypeScript, named exports, Prettier, and WCAG AA accessibility. The user clarified that `packages/ui` is the single shared UI package for every application, rather than a separate component catalogue package. The site has no exposed API, no content service, no user identity requirement, and no published product behaviour to preserve. The user selected MDX with formatting, local publication in Git, search indexing, and no conversation archive.

## Options considered

### Option 1: Static Next.js site with local MDX

Use the existing Next.js app, local MDX files, typed frontmatter, and shared shadcn components. Content is compiled with the site and has no runtime dependency.

**Pros**:

1. Fits the existing application and produces no new service or exposed API.
2. Keeps publishing safe, reviewable, and inexpensive.
3. Gives the team full control of a marketing first information architecture.

**Cons**:

1. Content changes need Git access and a deployment.
2. The blog needs small local utilities for metadata validation and navigation.

### Option 2: Fumadocs portal

Fumadocs provides a capable headless documentation framework with navigation and search primitives for Next.js.

**Pros**:

1. Strong documentation features and source adapters.
2. Useful if CircleCross later publishes extensive API or product reference material.

**Cons**:

1. It makes a general documentation portal the central experience, which the user excluded.
2. It adds framework conventions that do not improve a small marketing site and blog.

### Option 3: Nextra documentation site

Nextra is a focused Next.js documentation framework with MDX and search support.

**Pros**:

1. Quick authoring for a traditional documentation hierarchy.
2. Mature MDX focused experience.

**Cons**:

1. Its primary information shape is documentation rather than an investor friendly marketing site.
2. It provides more documentation machinery than the confirmed blog model needs.

### Option 4: A bare React site with hardcoded posts

Write all page and blog content directly in React components.

**Pros**:

1. Has no MDX setup cost.
2. Works for a site with no editorial content.

**Cons**:

1. Makes technical writing awkward and mixes long form content with route code.
2. Does not satisfy the confirmed MDX publishing requirement.

## Rationale

The chosen static Next.js and MDX approach is the smallest system that fully serves the confirmed audience. It lets CircleCross tell a clear public story while treating technical posts as reviewed source content, not as an application feature with runtime data, access control, or operational overhead. The existing starter has no production behaviour to preserve, so a direct replacement is safer and simpler than a staged migration.

Fumadocs and Nextra are credible tools, but both solve a broader documentation problem that is out of scope. They remain good future options if CircleCross later needs public guides or API references. Using the existing app and `@next/mdx` keeps the team close to standard Next.js behaviour, leaves room for a richer content system later, and avoids publishing more than the approved public boundary.

## References

**Project sources**:

1. `AGENTS.md`
2. `apps/docs/AGENTS.md`
3. `docs/scope/scope.md`
4. `docs/specs/_root/0001-circlecross-platform-foundation/index.md`
5. The user supplied CircleCross architecture recommendation

**Practices & standards**:

1. Static site generation for public content
2. Source controlled publishing and editorial review
3. WCAG 2.2 AA accessibility
4. Public content minimisation for proprietary systems

**Links**:

1. [Fumadocs headless documentation](https://www.fumadocs.dev/docs/headless)
2. [Nextra documentation](https://nextra.site/docs)
3. [Docusaurus documentation introduction](https://docusaurus.io/docs/docs-introduction)
4. [shadcn monorepo guide](https://ui.shadcn.com/docs/monorepo)
