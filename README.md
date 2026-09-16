# OBX Alethia — obxalethia.art

Marketing site for OBX Alethia's smart contract chamber, built with Next.js (App Router).

## Stack

- Next.js 15 (App Router, server routes — **not** a static export)
- Tailwind CSS v4, design tokens in `app/globals.css` (`@theme`, oklch)
- `motion` for the three-way matching walkthrough animation
- Postgres (`pg`) + Zod for the briefing/contact form

## Local development

```bash
npm install
cp .env.example .env.local   # then set DATABASE_URL
npm run dev
```

## Environment variables

| Variable       | Required | Notes                                                                 |
| -------------- | -------- | ---------------------------------------------------------------------- |
| `DATABASE_URL` | Yes      | Postgres connection string for the briefing form. Any managed Postgres works (Neon, Supabase, Railway, RDS...). |

Run `db/migrations/003_contact_submissions.sql` against that database before going live — it creates the
`contact_submissions` table and a low-privilege `app_contact_writer` role with INSERT-only access. Point
`DATABASE_URL` at that role, not a superuser, and change its default password.

## Deployment

This app now has a server route (`app/api/contact`), so it can **no longer be deployed as a static export to
GitHub Pages** — that was the previous setup and it is not compatible with API routes. Deploy it anywhere that
runs a Next.js server, e.g. Vercel (zero-config), Netlify, or Render. Set `DATABASE_URL` in that platform's
environment variables.

`.github/workflows/ci.yml` only runs typecheck + build on push/PR; it does not deploy.

### Deploying on Render

`render.yaml` defines a single Node web service (region `frankfurt`, close to a Supabase `eu-west-1` project —
change it if your database is elsewhere).

1. Render dashboard → **New → Blueprint** → connect this repo. Render reads `render.yaml` automatically.
2. It'll ask for the `DATABASE_URL` value at creation (kept out of the repo via `sync: false`) — paste in the
   Supabase transaction-pooler URI for the `app_contact_writer` role (see the migration notes above).
3. Deploy. Build is `npm ci && npm run build`, start is `npm run start` — `next start` reads Render's `PORT`
   env var automatically, no extra config needed.
4. Free tier spins down after 15 minutes idle (first request after that takes ~30s); bump `plan` in
   `render.yaml` if this needs to stay warm.

No blueprint? Same steps manually: **New → Web Service**, same build/start commands, Node runtime, set
`DATABASE_URL` under the service's Environment tab.

## Redirects

`/solutions` and `/erp` (previous route names) redirect to `/services`. `/register` redirects to `/about#briefing`.
See `next.config.mjs`.

## Content

Page copy and structured content live under `lib/content/*.ts` (services, agents, web3, roadmap, glossary, blog).
Blog posts are typed static data in `lib/content/blog.ts` — no CMS.
