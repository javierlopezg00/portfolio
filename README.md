# Portfolio

Premium commercial + technical showcase website. Next.js (App Router) + TypeScript + Tailwind CSS v4, built incrementally by phase.

## Stack

- Next.js 16 (App Router, Turbopack)
- TypeScript (strict)
- Tailwind CSS v4 (`app/globals.css` holds the design tokens)
- GSAP (ScrollTrigger) + `motion` for animation
- Zod for validation, Resend for transactional email
- Vitest + React Testing Library (unit), Playwright + axe-core (e2e/a11y)
- ESLint (flat config) + Prettier

## Getting started

```bash
pnpm install
cp .env.example .env.local   # fill in as needed — see below
pnpm dev
```

## Environment variables

See `.env.example` for the full list and descriptions. Nothing is required
for local development — the lead form logs server-side instead of emailing
when Resend isn't configured, and SEO URLs fall back to localhost.

- `NEXT_PUBLIC_SITE_URL` — the real domain once one is connected.
- `RESEND_API_KEY`, `LEAD_NOTIFICATION_EMAIL`, `LEAD_FROM_EMAIL` — Project
  Configurator lead emails.

## Scripts

```bash
pnpm dev              # start dev server
pnpm build             # production build
pnpm start             # run production build
pnpm lint              # eslint
pnpm format             # prettier --write
pnpm format:check       # prettier --check
pnpm test               # unit tests (vitest)
pnpm test:watch         # unit tests, watch mode
pnpm test:e2e           # e2e + accessibility tests (playwright)
pnpm lighthouse          # Lighthouse CI against a production build
```

## Structure

- `app/` — routes, layout, global styles, SEO file conventions
  (`sitemap.ts`, `robots.ts`, `opengraph-image.tsx`, `icon.tsx`)
- `components/ui` — design-system primitives
- `components/layout` — Navigation, Footer, SkipLink
- `components/sections` — homepage sections (Interactive Lab demos live
  under `components/sections/lab`, the evolution scroll sequence under
  `components/sections/evolution`)
- `lib/animation` — GSAP setup, shared motion tokens
- `lib/content` — typed copy/config data
- `lib/analytics` — thin Vercel Analytics tracking wrapper
- `lib/seo` — site metadata config + structured data
- `lib/hooks`, `lib/validation`, `lib/email`
- `tests/unit`, `tests/e2e`

## CI

`.github/workflows/ci.yml` runs format/lint/unit tests/build on every push
and PR to `main`, plus a separate job enforcing a Lighthouse CI budget
(performance/best-practices/SEO ≥ 0.9, accessibility ≥ 0.95) against a
production build.

## Deployment

Built for Vercel. Connect the repo, set `NEXT_PUBLIC_SITE_URL` to the
production domain and the Resend lead-email vars above, and deploy —
Vercel Analytics and Speed Insights are already wired into the root
layout and activate automatically once the project has them enabled.
