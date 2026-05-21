# Design Direction

This file preserves the Stitch visual direction for Version 1. Future changes should refine the implementation, not redesign it.

## Source Of Truth

Use the exported Stitch screenshots in `public/reference/` as the visual reference until the Figma MCP limit resets:

- `portfolio-landing-page.png`
- `case-study-editorial-layout.png`
- `admin-edit-project-detail.png`
- `admin-project-manager-overview.png`

Large PDF exports should stay outside Git and GitHub because they exceed hosting limits.

## Visual Personality

The site should feel playful, editorial and portfolio-led: bold type, confident spacing, collage cards, slightly tactile shadows, soft paper backgrounds and sharp neon accents.

Do not turn it into a generic SaaS, agency landing page or minimal white portfolio.

## Colour Palette

- Paper background: warm off-white, close to `#f6f6f2`.
- Ink: dark charcoal green/black, close to `#222725`.
- Neon accent: acid lime, close to `#dfff00`.
- Lavender: soft UI/editorial accent, close to `#e7e4ff`.
- Olive: small labels and metadata, close to `#6f821c`.
- Danger: restrained red for delete actions.

Avoid drifting into purple-gradient, beige-only, dark-blue or corporate grey palettes.

## Typography

- Display headings use a heavy condensed uppercase feel.
- Body copy keeps a softer editorial serif feel.
- Navigation, labels, pills and admin metadata use compact uppercase sans-serif.
- Headings should be large and punchy, but compact cards and admin controls must use smaller sizes so text does not overflow.

Do not use negative letter spacing. Do not scale type directly with viewport width outside controlled `clamp()` ranges.

## Layout Style

- Public pages use generous full-width sections.
- The landing hero places the big introduction on the left with a layered collage on the right.
- Selected work uses an asymmetrical editorial grid with large image-first project cards.
- About is a dark full-width band with image and copy side by side.
- Process cards are simple, chunky, tactile and evenly spaced.
- Contact uses a lavender editorial panel with an acid-lime corner detail.

Avoid nested cards and floating page sections. Cards should be used for actual repeated items, forms, panels and modals.

## Buttons

- Primary buttons are acid lime with dark offset shadow.
- Secondary buttons are lavender or dark depending on context.
- Buttons are pill-shaped, compact, bold and uppercase.
- Admin destructive actions use red and always require confirmation.

## Project Cards

Cards should include:

- strong cover image area
- small category/year pills
- title in heavy display type
- short description
- tags
- compact “View Case Study” button

Draft and hidden projects must never appear on the public portfolio.

## Case Study Pages

Case studies should keep the exported editorial layout:

- compact header
- huge project title
- right-side metadata
- large rounded cover image with tactile shadow
- dark neon marquee strip
- brief/challenge split
- image collage
- content blocks for role, process, decisions and outcome
- quote-style break
- dark next-project section

## Admin Style

The admin area should feel like the Stitch “Creative Studio” references:

- dark sidebar
- acid-lime active states
- oversized editorial admin headings
- rounded form panels with heavy offset shadows
- image preview cards
- sticky bottom action bar on edit screens
- delete confirmation modal with strong warning treatment

Do not add AI generation UI or Supabase UI in Version 1.

## Responsive Rules

- Mobile should stack hero, work grid, about, case study and admin form columns.
- Text must never overlap or escape cards/buttons.
- Fixed-format areas like cards, covers and thumbnails should use stable aspect ratios.
- Admin actions must remain reachable on small screens.

## What To Avoid

- Public admin links.
- Public marketing navigation that exposes private routes.
- Supabase, uploads or AI generation before Version 2.
- Replacing the editorial collage style with a standard template.
- Showing draft or hidden projects publicly.
