# Portfolio

Premium commercial + technical showcase website. Next.js (App Router) + TypeScript + Tailwind CSS v4, built incrementally by phase.

## Stack

- Next.js 16 (App Router, Turbopack)
- TypeScript (strict)
- Tailwind CSS v4 (`app/globals.css` holds the design tokens)
- ESLint (flat config) + Prettier

## Scripts

```bash
pnpm dev            # start dev server
pnpm build           # production build
pnpm start           # run production build
pnpm lint            # eslint
pnpm format           # prettier --write
pnpm format:check     # prettier --check
```

## Structure

- `app/` — routes, layout, global styles
- `components/ui` — design-system primitives
- `components/layout` — Navigation, Footer
- `components/sections` — homepage sections
- `components/demos` — Interactive Lab demos
- `components/motion` — reusable animation wrapper components
- `components/cursor` — custom cursor (desktop-only)
- `lib/animation` — GSAP setup, shared motion tokens
- `lib/content` — typed copy/config data
- `lib/hooks`, `lib/validation`, `lib/analytics`, `lib/email`
- `tests/unit`, `tests/e2e`
