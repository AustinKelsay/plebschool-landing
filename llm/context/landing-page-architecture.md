# pleb.school Landing Page — Architecture

## Overview

Marketing landing page for pleb.school — a forkable, Nostr-native education stack. Lives at **pleb.school** and funnels visitors to the GitHub repo (primary CTA) and the live demo instance at **demo.pleb.school** (secondary CTA).

The target audience is **creators, educators, and communities** who want to fork and deploy their own branded learning platform — not individual learners.

## Domain Architecture

| Domain | Purpose |
|--------|---------|
| `pleb.school` | This landing page (marketing site) |
| `demo.pleb.school` | Live demo instance of the full platform |
| `github.com/AustinKelsay/pleb.school` | Source repository |

## Tech Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Framework | Next.js 15, App Router | Matches main pleb.school stack |
| Language | TypeScript 5 | Type safety |
| Styling | Tailwind CSS 4, OKLCh color system | Identical design tokens as main app |
| Icons | lucide-react | Same icon library |
| Utilities | clsx + tailwind-merge | Same `cn()` pattern |

## Design System

### Theme — matches pleb.school "default" theme exactly

The landing page uses the **exact same OKLCh color values** as the default theme in the main app's `src/lib/theme-config.ts`. Key characteristics:

- **Fully achromatic** — no color hue (all `oklch(L 0 0)` except destructive)
- **Monochrome palette** — visual hierarchy through lightness only
- **System fonts** — `ui-sans-serif, system-ui, ...` (no custom web font loading)
- **Dark mode by default** — matching the main app's `config/theme.json` `darkMode: true`
- **0.625rem border radius** — matching default theme

### Dark Mode Values (exact match)

Key dark mode tokens:
- `--background: oklch(0.145 0 0)` — near-black
- `--card: oklch(0.205 0 0)` — elevated surface
- `--border: oklch(0.275 0 0)` — solid (not alpha-based)
- `--input: oklch(0.325 0 0)` — solid (not alpha-based)
- `--muted: oklch(0.269 0 0)` — subdued backgrounds
- `--accent: oklch(0.371 0 0)` — hover states

### Custom Accents (landing page only)

Three semantic colors defined in `@theme` for visual variety:
- `--color-amber` — used sparingly for Lightning/payment references
- `--color-violet` — Nostr/protocol references
- `--color-emerald` — success/checkmarks

These appear only in the `@theme` block and do not override the monochrome aesthetic.

## Page Sections

1. **Header** — Fixed nav, section anchors, GitHub link, "View Demo" CTA (links to demo.pleb.school)
2. **Hero** — "Early Access" pulsing badge, "Run your own Nostr-native course platform" headline, Fork/Demo CTAs, mock app preview showing white-labeled content cards
3. **TechBar** — Stack display (Next.js 15, React 19, Nostr, Lightning, Prisma, Tailwind, 67+ Themes, TypeScript)
4. **WhatYouGet** — 6 feature cards: Content types, Lightning payments, Nostr auth, Themes, Config-over-code, Decentralized content
5. **ForWho** — 3 audience cards: Creators & communities, Their audience, Platform builders
6. **HowItWorks** — 3 steps: Fork → Configure JSON → Deploy
7. **PlatformStats** — 4 stat cards + hybrid data architecture explainer (database = metadata; Nostr = content, zaps, identities)
8. **ForkAndDeploy** — Checklist + CTAs on left, syntax-highlighted JSON config preview on right
9. **FinalCTA** — "Ready to run your own instance?" with Fork + Demo buttons
10. **Footer** — Platform links (demo.pleb.school), Developer links (GitHub), Stack list

## CTA Strategy

Two conversion paths repeated throughout:

| Path | CTA Text | Target | Audience |
|------|----------|--------|----------|
| Primary | "Fork on GitHub" / "Fork & Deploy" | GitHub repo | Builders ready to act |
| Secondary | "View Live Demo" / "Explore the Demo" | demo.pleb.school | Evaluators exploring |

## JSON Syntax Highlighting

The config preview in the "Fork & Deploy" section uses custom React components (`JsonKey`, `JsonString`, `JsonArray`, `JsonLine`) that render colored syntax:
- **Blue** (`oklch(0.7 0.15 220)`) for JSON keys
- **Green** (`oklch(0.72 0.17 145)`) for string values
- **Muted foreground** for brackets and punctuation

## File Structure

```
src/
├── app/
│   ├── globals.css    # OKLCh design tokens matching default theme exactly
│   ├── layout.tsx     # Root layout, SEO metadata, system fonts, dark mode
│   └── page.tsx       # Full landing page — all sections + JSON syntax helpers
├── lib/
│   └── utils.ts       # cn() class merge utility
```

## Build Output

- **102KB first load JS** — fully static, CDN-friendly
- No API routes, no database, no auth
- `llm/` directory excluded from TypeScript compilation via `tsconfig.json`
