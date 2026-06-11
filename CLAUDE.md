# CLAUDE.md — Operating Manual

Single-page CV/portfolio site for Edip Kerim Öztürk. Astro + Tailwind, static output, GitHub
Pages.

## Hard rules (do not violate)

1. **`src/data/cv.json` is the single source of truth.** Every CV fact (names, dates, roles,
   bullets, skills) renders from it. Never hardcode CV text inside components or layouts.
2. **Never invent CV content.** No fabricated jobs, dates, certifications, projects, metrics, or
   reworded claims. Content changes happen only when the owner edits `cv.json` or supplies an
   updated CV.
3. **References stay private.** `referencesPublic` is `false`. Referee names, emails, and phone
   numbers must never appear in this repository (including `cv.json`, commit messages, and
   docs). The site renders only "References available on request."
4. **No new dependencies** beyond the existing ones (astro, @astrojs/tailwind, @astrojs/sitemap,
   tailwindcss, plus the lint/format toolchain) without explaining why and getting approval.
5. **Zero unnecessary JavaScript.** The site ships no client-side JS. Keep it that way unless
   explicitly requested.

## Design tokens

- Background `#0B0F14` (`ink`), text `#E5E7EB` (`body`), muted `#9CA3AF` (`muted`),
  accent `#0EA5A4` (`accent`), borders `#27303B` (`line`) — defined in `tailwind.config.mjs`.
- Headings: Inter. Accent labels / skill tags: JetBrains Mono, uppercase, tracked.
- Max content width: `max-w-content` (960px). Generous whitespace, 1px borders, no heavy
  animations (and honor `prefers-reduced-motion`).

## Structure

- `src/pages/index.astro` — single page, section order: Hero → Summary → Competencies → Skills →
  Experience (timeline) → Education & Languages → References (private notice) → Footer.
- `src/layouts/BaseLayout.astro` — head, SEO meta, OpenGraph/Twitter, JSON-LD Person, skip link.
- `src/components/*.astro` — one component per section; each reads from `cv.json`.

## Accessibility & SEO invariants

- Exactly one `<h1>` (Hero). Sections use `aria-labelledby` with `h2`; logical heading order.
- Skip-to-content link, visible focus rings, AA contrast minimum, `lang="en"`,
  descriptive link text.
- Canonical URL, meta description ≤155 chars, OpenGraph + Twitter card, JSON-LD Person,
  sitemap, robots.txt.

## Quality gate (run before committing)

```bash
npm run format:check && npm run lint && npm run check && npm run build
```

## Known TODOs

- `public/EKO_CV.pdf` and `public/og-image.png` are supplied by the owner; the Hero download
  link stays commented out until the PDF exists. If a PDF is added, it must not contain the
  owner's phone number (deliberately excluded from the site).
