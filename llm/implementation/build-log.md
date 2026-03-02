# pleb.school Landing Page — Build Log

## Session 1: Initial Build

Built a complete landing page from scratch with Next.js 15 + Tailwind CSS 4 + TypeScript. Initial version incorrectly targeted learners and used custom warm color accents that didn't match the default theme.

## Session 2: Copy & Theme Correction

### Problem
1. Copy targeted learners instead of **creators/educators/operators**
2. Theme used custom warm accents and alpha-based borders instead of the **achromatic monochrome** default

### Changes
- Rewrote all copy to target operators who want to fork and run their own platform
- Updated all dark mode CSS variables to match exact default theme values from `src/lib/theme-config.ts`
- Switched from Inter (Google Fonts) to system font stack
- Changed gradient-text and glow effects from warm tones to neutral monochrome
- Restructured sections: removed learner-focused "Content Showcase", added operator-focused "For Who" with 3 audience cards
- Changed How It Works from 4 learner steps to 3 operator steps: Fork → Configure → Deploy

## Session 3: Hybrid Architecture Copy + JSON Highlighting + Early Access

### Changes
1. **Hybrid architecture description** — Rewritten to accurately reflect the data split: "Your database stores the metadata that ties everything together — pricing, progress, and access control. But all the content, zaps, interactions, and user identities live on Nostr relays."

2. **JSON syntax highlighting** — Replaced plain gray `<code>` block with custom React components (`JsonKey`, `JsonString`, `JsonArray`, `JsonLine`) using colored syntax: blue for keys, green for string values, muted for punctuation. Makes the config preview approachable and editor-like.

3. **Coming Soon → Early Access badge** — Replaced a jarring full-width white banner with a subtle "Early Access" indicator inside the hero badge. Uses a pulsing dot animation and is separated from the tagline by a border divider. Communicates pre-release status without fighting the nav.

## Session 4: Domain Finalization + Doc Polish

### Changes
1. **URL updates** — All demo instance links changed from `pleb.school` to `demo.pleb.school`. This landing page lives at `pleb.school` itself. GitHub URLs unchanged.
2. **Documentation polish** — Updated architecture doc and build log to reflect final domain structure, all sessions, and v1 file manifest.

### Domain Map
| Domain | Purpose |
|--------|---------|
| `pleb.school` | This landing page |
| `demo.pleb.school` | Live demo of the full platform |
| `github.com/AustinKelsay/pleb.school` | Source repository |

## Final v1 File Manifest

| File | Purpose |
|------|---------|
| `package.json` | Dependencies: next, react, lucide-react, clsx, tailwind-merge |
| `tsconfig.json` | TypeScript config with `@/*` path alias, excludes `llm/` |
| `next.config.ts` | Empty Next.js config |
| `postcss.config.mjs` | Tailwind CSS 4 PostCSS plugin |
| `.gitignore` | Standard Next.js gitignore |
| `src/app/globals.css` | OKLCh design tokens matching default theme exactly |
| `src/app/layout.tsx` | Root layout with SEO metadata, system fonts, dark mode |
| `src/app/page.tsx` | Full landing page — 10 sections + JSON syntax highlight helpers |
| `src/lib/utils.ts` | `cn()` class merge utility |
| `llm/context/landing-page-architecture.md` | Architecture documentation |
| `llm/implementation/build-log.md` | This file |
