# Design Direction

This file preserves the current Stitch visual direction for Version 1. Future changes should refine the implementation, not redesign it.

## Source Of Truth

Use the exported Stitch screenshots in `public/reference/` plus the July 2026 Stitch export in the local design archive as the visual reference until a Figma comparison pass is available.

- `portfolio-landing-page.png`
- `case-study-editorial-layout.png`
- `admin-edit-project-detail.png`
- `admin-project-manager-overview.png`

Large PDF exports should stay outside Git and GitHub because they exceed hosting limits.

## Visual Personality

The public portfolio should now feel soulful, airy and editorial: high-contrast serif headlines, generous paper space, periwinkle colour blocking, soft mauve/gold accents, rounded portrait moments and a refined client-logo strip.

Do not turn it into a generic SaaS, agency landing page, dark neon portfolio or minimal white template.

## Colour Palette

- Paper background: warm editorial off-white, close to `#fcf9f4`.
- Ink: soft near-black, close to `#1c1c19`.
- Primary periwinkle: `#475a92`.
- Soft periwinkle: `#dfe5ff`.
- Soft mauve/pink: `#77536f` and `#f7d1ed`.
- Warm gold accent: `#efbf67`.
- Danger: restrained red for delete actions.

Avoid drifting into acid-lime/black, purple-gradient, beige-only, dark-blue or corporate grey palettes.

## Typography

- Display headings use Playfair Display or a similar high-contrast editorial serif.
- Body copy uses a clean, readable sans-serif such as DM Sans.
- Navigation, labels, pills and admin metadata use compact uppercase UI sans-serif.
- Headings should feel confident and editorial, but compact cards and admin controls must use smaller sizes so text does not overflow.

Do not use negative letter spacing. Do not scale type directly with viewport width outside controlled `clamp()` ranges.

## Layout Style

- Public pages use generous full-width sections and strong side padding.
- The landing hero places the big introduction on the left with Gené's portrait on the right.
- The old text carousel is replaced by a periwinkle client-logo strip with white logos.
- Selected work uses text-first editorial project cards, not pixelated preview thumbnails.
- About is a full-width periwinkle band with image and copy side by side.
- Process cards are simple, soft and evenly spaced.
- Contact uses a periwinkle editorial panel with light mauve buttons.

Avoid nested cards and floating page sections. Cards should be used for actual repeated items, forms, panels and modals.

## Buttons

- Primary public buttons use mauve or periwinkle with soft shadow.
- Secondary public buttons use pale mauve or light paper tones.
- Buttons are pill-shaped, compact, bold and uppercase.
- Admin destructive actions use red and always require confirmation.

## Project Cards

Cards should include:

- small category/year pills
- title in editorial display type
- short description
- tags
- compact “View Case Study” button

Public portfolio cards should remain text-first unless new high-resolution project preview assets are provided.

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
