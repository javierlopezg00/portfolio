# Portfolio

Commercial website for Javier López Digital — websites and software for
business owners (clinics, restaurants, professional services, growing
businesses). Next.js (App Router) + TypeScript + Tailwind CSS v4.

The homepage is written for non-technical customers: short sections, plain
language, a light/warm visual system. Technical depth lives one click away
in the case studies (`/work/…`) and the Interactive Lab (`/lab`).

## Stack

- Next.js 16 (App Router, Turbopack)
- TypeScript (strict)
- Tailwind CSS v4 (`app/globals.css` holds the design tokens)
- `motion` for small UI animation; GSAP (core only) for the Lab's
  automation demo, code-split behind its tab
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
- `NEXT_PUBLIC_WHATSAPP_NUMBER` — digits only, with country code. Every
  WhatsApp button renders only when this is set.
- `NEXT_PUBLIC_CONTACT_EMAIL` — the address shown in the footer and behind
  every "Email me" link. Defaults to the personal inbox; switch it to the
  branded domain address (`hello@javierdigital.com`) once that mailbox
  exists. Both values are read in one place, `lib/content/site.ts`.
- `RESEND_API_KEY`, `LEAD_NOTIFICATION_EMAIL`, `LEAD_FROM_EMAIL` — quote
  request (configurator) lead emails.

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

- `app/` — routes (`[locale]`, `[locale]/work/…`, `[locale]/lab`), layout,
  global styles and design tokens, SEO file conventions (`sitemap.ts`,
  `robots.ts`, `opengraph-image.tsx`, `icon.tsx`)
- `components/ui` — design-system primitives (light by default; a Section
  can opt into `soft` or `dark`)
- `components/illustrations` — shared browser/phone frames and icons used
  by every illustration on the site
- `components/layout` — Navigation, Footer, SkipLink
- `components/sections` — homepage sections (the four-stage growth story
  under `sections/growth`, the Lab demos under `sections/lab`, work
  previews and case-study pieces under `sections/work`)
- `components/work` — case-study-only demos (clinic booking, reservations,
  lead qualification) and the Meridian clinic showcase
- `lib/animation` — GSAP setup (Lab only)
- `lib/content` — `site.ts` (contact email + WhatsApp, the only place
  either is defined), CTA targets, image imports, project ids
- `lib/i18n` — locale routing helpers and the English/Spanish dictionaries
  (all customer-facing copy lives here)
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
