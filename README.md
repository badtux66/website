# Edip Kerim Öztürk — CV / Portfolio Site

Single-page CV site built with [Astro](https://astro.build) and Tailwind CSS. Static output,
deployed to GitHub Pages. All CV content lives in **one file**: `src/data/cv.json` — components
never hardcode CV facts.

## Stack

- Astro (static output) + `@astrojs/tailwind` + `@astrojs/sitemap`
- Tailwind CSS (dark theme: bg `#0B0F14`, text `#E5E7EB`, accent `#0EA5A4`)
- ESLint (`eslint-plugin-astro`) + Prettier (`prettier-plugin-astro`)
- GitHub Actions deploy via `withastro/action@v3` + `actions/deploy-pages@v4`

## How to run locally

```bash
npm install
npm run dev        # http://localhost:4321/website/
```

Other scripts:

```bash
npm run build         # production build → dist/
npm run preview       # serve the production build locally
npm run check         # astro typecheck
npm run lint          # eslint
npm run format        # prettier --write
npm run format:check  # prettier --check
```

## How to deploy to GitHub Pages

The site is configured for `https://badtux66.github.io/website/` (see `site` in
`astro.config.mjs` and the `Sitemap:` URL in `public/robots.txt` — update both if the username
or repo name ever changes).

1. Push to the `main` branch of `badtux66/website`.
2. Ensure **Settings → Pages → Build and deployment → Source** is set to **GitHub Actions**.
3. Every push to `main` builds and deploys automatically via `.github/workflows/deploy.yml`.

### Optional assets (drop into `public/`)

- `EKO_CV.pdf` — then uncomment the "Download CV (PDF)" link in `src/components/Hero.astro`.
- `og-image.png` (1200×630) — social preview image already referenced by the meta tags.

## How to update my CV later (edit only cv.json)

All content is rendered from `src/data/cv.json`. To update the site:

1. Edit `src/data/cv.json` only — components, layout, and styling never need to change for
   content updates:
   - `identity` — name, title, location, email, LinkedIn (the phone number is deliberately
     excluded and should stay out of this file)
   - `summary` — the professional summary paragraph
   - `competencies` — flat list of core competencies
   - `skills` — array of `{ group, items[] }`
   - `experience` — array of `{ role, company, location, dates, bullets[] }`, newest first
     (use `"company": null` for freelance/remote roles)
   - `education`, `languages`
   - `referencesPublic` — keep `false`; the site then renders only the
     `referencesNote` ("References available on request."). Never put referee names or
     contact details in this file.
2. Run `npm run build` locally to verify (or just push — CI builds on every push to `main`).
3. Commit and push to `main`; GitHub Actions redeploys automatically.
