# valen-website

personal website for valen. lowercase aesthetic, bold personality. not a portfolio template — a place that feels like her.

## stack

- next.js 16 (app router)
- react 19
- typescript (strict)
- tailwind css v4
- framer motion (animations)
- vercel (deployment)

## commands

- `npm install` — install dependencies
- `npm run dev` — start dev server (localhost:3000)
- `npm run build` — production build
- `npm run lint` — eslint

## design system

### palette
- **pink (hello kitty)** — `#FFB5C8` (primary accent)
- **pink deep** — `#FF8FAE` (hover/interactive pink)
- **pink blush** — `#FFF0F3` (light backgrounds)
- **pink soft** — `#FFD6E0` (soft fills)
- **dark plum** — `#1C1525` (base/background — warm, not pure black)
- **dark elevated** — `#241C30` (raised surfaces)
- **dark card** — `#2D2439` (card backgrounds)
- **lime green** — `#b8ff57` (secondary accent)
- **pastel lavender** — `#c4b5fd`
- **pastel mint** — `#a7f3d0`
- **pastel peach** — `#fcd5ce`
- **off-white** — `#f5f0eb` (text on dark)
- **light bg** — `#FFF5F7` (light section background)

### typography
- all text is lowercase. headings, nav, body — everything.
- clean sans-serif primary font
- monospace for small labels/tags

### vibe
- sanrio-soft meets warm plum. hello kitty pink, not hot pink.
- warm plum-charcoal backgrounds, never pure black.
- work section uses a light blush background for contrast.
- sparkle decorations (✦), noise texture overlay, soft gradient orbs.
- smooth vertical scrolling with section transitions.
- subtle animations — nothing aggressive, everything intentional.
- should feel like opening someone's favorite notebook.

## sections

1. **home** — hero section. name, a short line about her, sets the mood (dark plum bg)
2. **work** — what she does professionally (light blush bg)
3. **designs** — visual work, creative projects, gallery-style (dark plum bg)

## architecture

```
app/
  layout.tsx          — root layout, fonts, metadata
  page.tsx            — home/landing (all sections live here, vertical scroll)
  globals.css         — tailwind imports, custom properties, base styles
components/
  navigation.tsx      — sticky nav, section links
  hero.tsx            — home/hero section
  work.tsx            — work section (light bg)
  designs.tsx         — designs gallery section
  section-wrapper.tsx — shared section container with scroll snap
lib/
  fonts.ts            — font configuration
public/
  images/             — photos, design work assets
```

## code style

- functional components only
- prefer server components, `'use client'` only when needed (interactions, hooks)
- destructure props
- tailwind for all styling — no css modules
- framer motion for animations via `motion` components
- use `@/` path aliases for imports
- named exports for components

## conventions

- branch naming: `feature/description` or `fix/description`
- commit messages: lowercase, present tense ("add hero section", not "Added hero section")
- keep components focused — one component per file
- colocate types with their components unless shared

## gotchas

- next.js 16: async params/searchParams in page/layout components
- always use `next/image` for images with proper `sizes` attribute
- don't use browser apis in server components
- tailwind v4 uses css-first config — `@theme` in globals.css, not tailwind.config
