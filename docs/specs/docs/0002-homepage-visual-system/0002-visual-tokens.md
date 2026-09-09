# 0002. Visual tokens

## Summary

Define the shared type, colour emphasis, padding, and inset rules the homepage and other marketing routes consume. This child removes one off clamps and teaches one visual grammar.

## Requirements

Covered by umbrella **AC-1**, **AC-3**, **AC-4**, **AC-5**.

## Decision

Extend `apps/docs/app/globals.css` theme tokens and `apps/docs/components/styles.ts` class strings. Do not invent a second styling system.

**Token set**:

| Token or class | Role |
| --- | --- |
| `--h-hero` / `h-hero` | Brand scale hero title only |
| `--h-section` / `h-section` | Primary section title (replaces today’s large `sectionHeading` band for most h2) |
| `--h-subsection` / `h-subsection` | Smaller section or chapter title; at least 2 to 3 current h2s move here |
| `--emphasis` / `text-emphasis` | Copper only inline emphasis (`em`) |
| `py-dense` | ~90 to 100px vertical padding for grid or card sections |
| `py-statement` | ~160 to 180px vertical padding for manifesto or single statement sections |
| `page-inset` | `px-[5.4%]` desktop, `px-[6%]` mobile |
| `eyebrow` | Uppercase label; minimum 10px on all breakpoints |

Olive, cream, and identity greens remain background or mood tokens. They must not colour emphasised words.

## Build notes

1. Add CSS variables and Tailwind mapped classes.
2. Point `sectionHeading` at `h-section` or replace call sites.
3. Refactor idea, identity, and trust headings so at least two use `h-subsection` or a quieter scale.
4. Replace flat `sectionSpace` padding with `page-inset` plus `py-dense` or `py-statement` by content type.
5. Remove decorative `<br>` from headlines unless an orphan remains after max width tuning.

## Rationale (short)

Central tokens beat per section clamps because the bug is systemic equal volume, not one bad block. Copper already leads the hero, so making it the only emphasis signal is the cheapest learn once rule.
