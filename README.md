# Juan — Creative Developer

A single-page, motion-led portfolio site. The whole experience lives on one
route and is driven by scroll, subtle animation and a restrained monochrome
palette with one accent colour.

## Stack

- **React 19** + **TypeScript**
- **Vite 7** (`@vitejs/plugin-react`)
- **Tailwind CSS v4** via `@tailwindcss/vite` (design tokens live in CSS)
- **Framer Motion** for animation
- **lucide-react** for icons

## Scripts

| Command | What it does |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the dev server at http://localhost:5173 |
| `npm run build` | Type-check (`tsc --noEmit`) then build to `dist/` |
| `npm run preview` | Serve the built `dist/` at http://localhost:4173 |
| `npm run typecheck` | Type-check only |

## Project structure

```
src/
  components/
    layout/    Navbar, Footer, Section wrapper
    sections/  Hero, Projects, About, Skills, Experience, Services, Contact
    ui/        Button, ThemeToggle, Background, Grain, Sheen, …
  data/        site.ts, projects.ts, experience.ts, skills.ts  ← all copy
  lib/         hooks.ts, utils.ts, theme.ts, motion.ts, assets
  index.css    Tailwind theme tokens + base/components layers
public/
  images/      portrait + project artwork (SVG placeholders)
index.html     Shell + no-flash theme script
```

## Editing content

All copy is data-driven — no need to touch components:

- `src/data/site.ts` — name, title, hero, about, contact, socials
- `src/data/projects.ts` — project cards
- `src/data/experience.ts` — work history
- `src/data/skills.ts` — skill groups

Images live in `public/images/`. To replace the placeholders, drop a new file in
with the **same filename** (e.g. `public/images/projects/nova.svg`), or update the
path in the matching data entry.

## Theming

The site ships light and dark themes, with **light as the default** for
first-time visitors:

- The active theme is stored on `<html data-theme="light|dark">`.
- `src/components/ui/ThemeToggle.tsx` (in the Navbar) switches it, and the choice
  is saved to `localStorage`.
- An inline script in `index.html` applies the saved theme **before first paint**
  to avoid a flash.
- Palette tokens are defined in `src/index.css` — dark on `:root`, light under
  `:root[data-theme="light"]`. Components only reference tokens, never raw colours.

## Deploy to Vercel from GitHub

Vercel builds the project on its own servers straight from GitHub — no local
build, no file upload and no shared hosting required. The GitHub repo is pulled
**at build time**; the finished site is served from Vercel's CDN.

**One-time setup**

1. Sign in at [vercel.com](https://vercel.com) **with GitHub**.
2. **Add New… → Project → Import Git Repository** → select this repo.
3. Confirm the build settings (Vercel auto-detects Vite):

   | Setting | Value |
   | --- | --- |
   | Framework Preset | **Vite** |
   | Root Directory | `./` |
   | Install Command | `npm install` (or `npm ci`) |
   | Build Command | `npm run build` |
   | Output Directory | `dist` |
   | Node.js Version | 20.x or 22.x |

4. **Deploy.** Vercel clones the repo, installs dependencies, builds and publishes.

The live URL is shown after the first deploy (e.g. `https://juan.vercel.app` or
`https://juan-<account>.vercel.app`).

**Ongoing deploys**

- Push to `main` → **Production** deployment.
- Push another branch or open a PR → **Preview** deployment with its own URL.
- Edit files directly on github.com and commit → Vercel redeploys the same way.

### Important notes

- **Do not set `base` in `vite.config.ts`.** Vercel serves from the domain root;
  a `base` of `/juan/` or `/<repo>/` would break every asset URL.
- The build runs `tsc --noEmit` first, so a TypeScript error fails the deploy.
- No `.htaccess` or `vercel.json` is needed — the site uses hash anchors
  (`#contact`), not client-side routes.
- `dist/` and `node_modules/` are git-ignored; Vercel always builds from source.

### Custom domain (optional)

In the Vercel project: **Settings → Domains** → add a domain, then set the DNS
records Vercel shows. Domains must be a root or subdomain (e.g.
`juan.matcpos.com`). A subpath such as `matcpos.com/juan` cannot be mapped to
Vercel.

## Local development (optional)

Only needed if you want to edit offline — not required for deployment:

```bash
npm install
npm run dev
```

---

© Juan — all rights reserved.
