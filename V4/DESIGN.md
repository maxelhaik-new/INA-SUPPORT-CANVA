---
name: Scientific Swiss Minimal V4
description: High-precision editorial presentation deck for 2P2L AI conference, inspired by Swiss international typography, architectural lab aesthetics, and scientific minimalism.
colors:
  primary: "#111111"
  neutral-bg: "#E8E8E4"
  surface: "#F7F7F5"
  surface-card: "#FFFFFF"
  surface-sage: "#DCE5DE"
  surface-stone: "#B4B8B1"
  surface-dark: "#161414"
  text-primary: "#111111"
  text-muted: "#6C6C66"
  text-inverse: "#F3F2EE"
  border-hairline: "rgba(17, 17, 17, 0.14)"
  border-hairline-dark: "rgba(243, 242, 238, 0.2)"
typography:
  display:
    fontFamily: "'Inter Tight', 'DM Sans', system-ui, sans-serif"
    fontSize: "4rem"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "'Inter Tight', 'DM Sans', system-ui, sans-serif"
    fontSize: "2.875rem"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  title:
    fontFamily: "'Inter Tight', 'DM Sans', system-ui, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  body:
    fontFamily: "'Inter Tight', 'DM Sans', system-ui, sans-serif"
    fontSize: "1.3125rem"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "-0.01em"
  label:
    fontFamily: "'DM Mono', ui-monospace, monospace"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.1em"
  prompt:
    fontFamily: "'DM Mono', ui-monospace, monospace"
    fontSize: "1.1875rem"
    fontStyle: "italic"
    fontWeight: 400
    lineHeight: 1.55
rounded:
  sm: "0px"
  card: "18px"
  pill: "9999px"
spacing:
  xs: "12px"
  sm: "16px"
  md: "24px"
  lg: "36px"
  xl: "56px"
  pad-x: "72px"
  pad-y: "56px"
components:
  card-primary:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.card}"
    padding: "28px"
  card-sage:
    backgroundColor: "{colors.surface-sage}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.card}"
    padding: "28px"
  card-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.text-inverse}"
    rounded: "{rounded.card}"
    padding: "28px"
  pill-badge:
    backgroundColor: "transparent"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.pill}"
    padding: "7px 16px"
  prompt-box:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.card}"
    padding: "22px 56px 22px 26px"
---

# Design System: Scientific Swiss Minimal V4

## Overview

**Creative North Star: "The Architectural Lab Deck"**

The visual language of V4 is engineered for projected conference presentations (1280×720 viewport, scaled dynamically). It balances pristine Swiss typography, scientific clarity, duotone title contrast, hairline grid structures, and tactical soft-sage / dark velvet accents inspired directly by high-end research decks.

**Key Characteristics:**
- **Mathematical Layout Rhythm**: Fixed 1280×720 canvas (`#stage`) dynamically scaled with pure CSS transforms and zero letterbox distortion.
- **Duotone Typographic Tension**: Headings split between deep obsidian ink (`#111111`, font-weight 500) and muted slate italic/regular (`#9A9A94`, font-weight 400).
- **Data Circles & Stat Strips**: Statistical values presented in circular graphic counters (`.circle`) or hairline-separated horizontal strips (`.stats`).
- **Prompt Isolation**: System prompts formatted in pure italic monospace without quotes, offering one-click clipboard copying.

## Colors

The palette relies on high-contrast obsidian against soft limestone paper and sage accents, avoiding synthetic saturation.

### Primary
- **Obsidian Carbon** (`#111111`): Primary copy, prominent headers, and high-impact structural emphasis.

### Secondary
- **Soothe Sage** (`#DCE5DE`): Positive focal points, accent cards, filled pill badges, and active state highlights.
- **Pebble Stone** (`#B4B8B1`): Auxiliary statistical circles and muted contrast surfaces.

### Neutral
- **Deep Charcoal Velvet** (`#161414`): Full-bleed background for section covers and key contrast cards.
- **Limestone Surface** (`#F7F7F5`): Default background of light slides.
- **Warm Desk Paper** (`#E8E8E4`): Surrounding viewport backdrop outside the slide stage.
- **Pure White** (`#FFFFFF`): Elevated card surface background.
- **Muted Dust** (`#9A9A94`): Secondary captions, numbering, inactive states, and duotone title accents.
- **Inverse Chalk** (`#F3F2EE`): Text and pill stroke color on dark slides.
- **Hairline Line** (`rgba(17, 17, 17, 0.14)`): 1px structural dividing lines and borders.

### Named Rules
**The Duotone Heading Rule.** Main titles (`.h1`, `.h2`, `.big`) must emphasize the core subject in obsidian ink (`#111111`) and finish in muted slate (`#9A9A94`) wrapped in `<em>`.

**The Pure Monospace Rule.** Prompts and LLM input templates are strictly rendered in `DM Mono` italic (`font-style: italic`), strictly without quotes (« » or " ").

## Typography

**Display & Body Font:** `Inter Tight` (with fallback `DM Sans`, `system-ui`, sans-serif)  
**Label & Prompt Font:** `DM Mono` (with fallback `ui-monospace`, monospace)

**Character:** Architectural, disciplined, authoritative yet legible from the back of an amphitheater or meeting room.

### Hierarchy
- **Display / Big** (weight 500, size 64px–96px, line-height 0.95–1.02): Section markers, cover statements, and primary slide titles.
- **Headline** (weight 500, size 46px, line-height 1.08): Slide subject titles.
- **Title / Card Header** (weight 500, size 28px, line-height 1.15): Card headers and group titles.
- **Lead** (weight 400, size 26px, line-height 1.4): Explanatory intro sentences and high-level summaries.
- **Body / List Item** (weight 400, size 19px–21px, line-height 1.45): Content sentences and enumerated items.
- **Label / Pill** (weight 500, size 13px–14px, letter-spacing 0.08em–0.1em, uppercase): Categorical badges, index markers, and section navigation pills.
- **Prompt** (weight 400, size 17px–19px, italic, monospace, line-height 1.55): Interactive prompt containers.

## Layout

- **Stage Dimensions**: Strict 16:9 fixed ratio at 1280px width × 720px height, centered via absolute coordinates and auto-scaled via JS `transform: scale(...)`.
- **Slide Padding**: 56px vertical (`--pad-y`), 72px horizontal (`--pad-x`).
- **Header Bar (`.top`)**: Fixed top row containing navigation arrow circle, categorical pill badge, and slide index fraction (`01 / 25`) aligned to the right.
- **Grid Systems**: 
  - `.g2`: 2 columns (1fr 1fr), gap 20px.
  - `.g3`: 3 columns (repeat(3, 1fr)), gap 20px.
  - `.g4`: 4 columns (repeat(4, 1fr)), gap 20px.

## Elevation & Depth

V4 enforces an authentic Swiss flat-and-layered philosophy. Depth is conveyed strictly through tonal stacking, 1px hairlines, and background color shifts rather than heavy dropshadows.

### Shadow Vocabulary
- **Slide Stage Shadow** (`box-shadow: 0 30px 80px rgba(0,0,0,.08)`): Subtly detaches the 1280×720 slide from the ambient browser background. Surfaces inside slides are flat by default.

### Named Rules
**The Flat-By-Default Rule.** All interior cards, badges, and prompt blocks have `box-shadow: none` at rest. Contrast is achieved exclusively via surface fills (`#FFFFFF`, `#DCE5DE`, `#161414`) and 1px borders (`--hair`).

## Shapes

- **Cards (`.card`)**: 18px border-radius (`--r-card`).
- **Pills (`.pill`)**: 9999px pill radius (`--r-pill`).
- **Data Circles (`.circle`)**: 50% border-radius circular badge containing bold metrics.
- **Hairlines (`var(--hair)`)**: 1px solid `rgba(17, 17, 17, 0.14)` (or `rgba(243, 242, 238, 0.2)` on dark surfaces).

## Components

### Card
- **Corner Style**: 18px border-radius.
- **Padding**: 28px internal padding.
- **Fills**: Pure White default (`.card`), Sage accent (`.card.sage`), Velvet Charcoal (`.card.ink`), or transparent with hairline border (`.card.line`).

### Pill Badge
- **Style**: 9999px radius, padding 7px 16px, 13px DM Mono uppercase.
- **Variants**: Hairline border default, or filled Sage (`.pill.fill`).

### Prompt Card
- **Style**: 18px border-radius, background `#FFFFFF` or `rgba(255,255,255,0.06)`, padding 22px 56px 22px 26px.
- **Interactivity**: Clicking any `.prompt` automatically writes text to clipboard and flips the `⧉` indicator to `✓` for 1500ms.

### Stat Circle
- **Geometry**: Perfect circle with centered bold metric and descriptive label.
- **Variants**: `.c-stone` (pebble grey), `.c-sage` (sage green), `.c-ink` (dark charcoal), `.c-white` (white).

### Graphic Placeholder (`.ph`)
- **Visual**: 18px radius, dashed hairline border, subtle 45-degree diagonal pattern hatch, labeled with bottom-left uppercase mono caption.

## Do's and Don'ts

### Do:
- **Do** split slide titles into duotone weights using obsidian for the subject and `<em>` with muted grey for the qualifier.
- **Do** ensure prompt texts remain strictly in monospace italic with zero surrounding quotation marks.
- **Do** isolate every slide into its dedicated module under `components/slides/`.
- **Do** verify that slide content never exceeds the 720px vertical height ceiling.

### Don't:
- **Don't** add fake marketing boilerplate, arbitrary corporate taglines, or fictional dates.
- **Don't** introduce heavy blurred drop-shadows or gradients on interior cards.
- **Don't** mix unapproved accent hues (e.g. saturated purples, blues, or oranges) outside the neutral / sage palette.
- **Don't** wrap prompts inside French (« ») or English (" ") quotes.
