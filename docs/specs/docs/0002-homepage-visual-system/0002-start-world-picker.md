# 0002. Start world picker

## Summary

Replace the start section carousel, wheel, and select experiments with three quiet stacked world rows. A row tap both chooses and saves the local preference. A status line reports success or failure. No second action button. This keeps the terracotta arrival calm and readable.

## Requirements

**User stories**:

1. As a visitor at the final ask, I want to pick Go, Uni, or Pro in one clear tap so that my preference is saved without a second control.
2. As a returning visitor, I want my last saved world restored so that the start block matches what this device already chose.
3. As a visitor coming from a worlds chapter explore action, I want Start to show and save that world so that the path feels continuous.

**Acceptance criteria**:

1. **AC-1**: The start action shows exactly three stacked rows labelled `CircleCross Go`, `CircleCross Uni`, and `CircleCross Pro`. No horizontal carousel, wheel, dropdown select, or second primary CTA button appears in this block.
2. **AC-2**: Tapping a row highlights it with copper emphasis and immediately writes that world to `localStorage` under `circlecross-world`. Status moves to saved (or unavailable on failure).
3. **AC-3**: There is no separate “Choose your circle” button. Feedback is a status line only (`role="status"`).
4. **AC-4**: On first visit with no valid stored value, Go is highlighted and status stays idle (not claimed as saved). On return, a valid stored value is restored as highlight and status shows already saved.
5. **AC-5**: The `circlecross:choose` custom event from worlds chapters sets the same highlight and performs the same save path as a row tap.
6. **AC-6**: If storage throws, the tapped (or event) world stays highlighted and status explains that the browser could not save the preference.
7. **AC-7**: Desktop keeps story copy on the left and the row stack plus status on the right. Mobile stacks the action under the story. Rows use start cream type; the active row uses copper for the world name (or full row emphasis) so olive and cream stay moods only.
8. **AC-8**: Rows are keyboard operable (radiogroup or equivalent), focus visible, and usable under `prefers-reduced-motion` without depending on scroll snap or motion.

## Decision

**Chosen option**: Option 2: Three quiet rows, one tap saves, status only.

Remove `WorldSlider` (and any leftover select based start control). Implement a docs local `WorldRows` (or inline in `Start`) that lists the three worlds, saves on activate, and restores from storage.

**Implementation skills**: none required beyond the live docs stack (Next.js, React, `@circlecross/ui` primitives if helpful for focus styles).

## Feature design

**Data model sketch**:

| Entity | Storage | Required fields | Rules |
| --- | --- | --- | --- |
| WorldPreference | `localStorage` key `circlecross-world` | value: `Go` \| `Uni` \| `Pro` | Exactly those three. Missing or invalid → treat as absent (highlight Go, status idle). |

**State transitions**:

Highlight: `Go` (default) or restored value ↔ any of Go, Uni, Pro on activate.

Status: `idle` → `saved` on successful write; `idle` or `saved` → `unavailable` on write failure; on restore with valid value → `saved`.

**Interface surface** (components, not HTTP):

| Surface | Inputs | Outputs | Notes |
| --- | --- | --- | --- |
| `WorldRows` (or `Start` inline) | initial preference, worlds list | highlight, status | Radiogroup semantics recommended |
| `circlecross:choose` listener | `detail`: `Go` \| `Uni` \| `Pro` | same as row activate | Shared with worlds CTAs |
| Status line | status enum | accessible live text | No second button |

**Value sourcing**:

| Action | Value displayed | Source |
| --- | --- | --- |
| Row labels | CircleCross Go / Uni / Pro | Fixed labels from worlds names in `content/worlds.ts` (name field only) |
| Active highlight | Which row is copper | React state; seeded from `localStorage` or default `Go` |
| Status saved copy | World name in message | The activated world string just written |
| Status unavailable copy | World name in message | The activated world string that failed to write |
| Restore on mount | Highlight + saved status | `localStorage.getItem("circlecross-world")` when valid |
| Worlds explore | Highlight + save | `CustomEvent` detail from worlds chapter CTA |

**Key invariants**:

1. One tap both selects and saves. No deferred commit button.
2. Copper is the only active emphasis colour on the rows.
3. Preference never leaves the browser; no account or waitlist claim.
4. Invalid stored values never crash the UI; fall back to Go idle.

**Security model**:

Public marketing surface. Preference is device local only. No PII collected.

**Configuration required**:

None new. Existing `SITE_URL` unchanged.

**Critical test scenarios**:

- Happy path: tap Uni → copper on Uni → status saved → reload restores Uni saved; verifies **AC-2**, **AC-3**, **AC-4**
- Failure: mock storage throw → Uni stays highlighted → unavailable status; verifies **AC-6**
- Worlds bridge: fire `circlecross:choose` with Pro → Pro highlighted and saved; verifies **AC-5**
- Accessibility: keyboard moves and activates rows; reduced motion still works; verifies **AC-8**
- Absence: no carousel, wheel, select, or primary choose button in `#start`; verifies **AC-1**

## Build plan

Tracer Bullet through Start only, then delete superseded picker code.

1. [x] Replace `WorldSlider` usage in `Start` with three stacked rows (radiogroup) and a status line; wire save, restore, and default Go. Satisfies **AC-1**, **AC-2**, **AC-3**, **AC-4**, **AC-7**
2. [x] Keep `circlecross:choose` listener on the same activate path as row taps. Satisfies **AC-5**
3. [x] Handle storage failure with unavailable status while keeping highlight. Satisfies **AC-6**
4. [x] Delete `world-slider.tsx` and any unused select based start markup; confirm keyboard and reduced motion. Satisfies **AC-1**, **AC-8**

## Migration plan

**Strategy**: strangler in place on `apps/docs/components/start.tsx`.

**Phases**:

1. Ship rows + status beside or instead of the slider
2. Delete `world-slider.tsx` once Start no longer imports it

**Rollback**: revert the Start commit; restore the previous picker file from git if needed.

**Risks**: visitors mid experiment with the carousel see a layout change. Acceptable for a marketing site with no accounts.

## Consequences

**Enables**: a calm final ask, honest one tap save, continuous path from worlds explore.

**Constrains**: no scroll snap picker, no secondary choose button in Start, no inventing new storage keys.

**Follow-up required**: none beyond shipping this child under umbrella 0002.

## Rationale (short)

Carousel and wheel fights made the terracotta block noisy and hard to snap. Three quiet rows match the editorial voice, keep copper as the only active signal, and make “one tap saves” obvious. Status only avoids a second competing CTA after the save already happened. Restoring storage plus defaulting to Go covers return visits without a blank control.
