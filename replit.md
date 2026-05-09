# Brilliant Parking Solutions

A professional portfolio/company website for Brilliant Parking Solutions — a Chennai-based parking infrastructure company with 20+ years of experience.

## Run & Operate

- `pnpm --filter @workspace/brilliant-parking run dev` — run the frontend (port 21827)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Tailwind CSS, shadcn/ui, framer-motion
- No backend required (presentation-only site)

## Where things live

- `artifacts/brilliant-parking/` — main frontend app
- `artifacts/brilliant-parking/src/components/` — all page sections (Navbar, Hero, About, Services, Stats, Projects, Clients, Contact, Footer)
- `artifacts/brilliant-parking/src/pages/Home.tsx` — single-page layout
- `artifacts/brilliant-parking/src/index.css` — global theme (dark navy + gold/amber palette)
- `artifacts/brilliant-parking/public/clients/` — drop client logo PNG/AVIF files here

## Client Logos

Place client logo image files in `artifacts/brilliant-parking/public/clients/` named:
- `client-1.png` (or .avif)
- `client-2.png`
- ...up to `client-5.png` (adjust array in `Clients.tsx` as needed)

Images will automatically appear on the site. If a file is missing, a styled placeholder is shown.

## Product

Single-page company website with 8 sections:
1. Hero — full-viewport, cinematic dark background with bold gold headline
2. About — company overview and core capabilities
3. Services — 6 service cards (Planning, Designing, Budgeting, Training, Management, Sales & Service)
4. Stats — 20yr experience, 5 clients, 2 completed, 3 ongoing
5. Projects — 5 project showcase cards with Unsplash images
6. Clients — logo grid with placeholder support
7. Contact — contact form + company details
8. Footer — copyright, quick links, contact info

## User preferences

- Company: Brilliant Parking Solutions
- Location: Chennai, Tamil Nadu
- Email: brilliantparkingsolutions@gmail.com
- Phone: 96001 22258 / 86101 74467
- Client images are placeholders (PNG/AVIF) — user will drop into public/clients/

## Architecture decisions

- Pure presentation site — no backend, no database, no API hooks
- Dark navy (#0f172a) + amber/gold (#EDD31F) brand palette
- framer-motion scroll animations throughout
- Single-page with smooth scroll navigation
- Client images use graceful fallback placeholders
