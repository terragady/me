# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> `CLAUDE.md` is a symlink to this file (`AGENTS.md`); edit `AGENTS.md`.

## What this is

Personal "about me" website — a static site deployed to GitHub Pages.

## Commands

- `npm run dev` — local dev server at http://localhost:4321
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the built `dist/` locally
- `npm run og` — regenerate the social share image (`public/og.png`)
- `npx astro check` — type-check `.astro` files

There is no test suite. `npm run build` is the correctness gate — it type-checks
content collections and fails on broken references, so run it before committing.

## Architecture

Static site: **Astro 7** + **React 19** (islands) + **Tailwind CSS 4** (via the
`@tailwindcss/vite` plugin — no `tailwind.config.js`; design tokens live in CSS).

- `src/config.ts` — single source of truth for name, role, `socialLinks`, `navLinks`,
  `skills`, `education`, `publications`, `languages` and `interests`. Prefer editing
  this over hardcoding these values in pages.
- `src/layouts/BaseLayout.astro` — the only page shell: `<head>`/SEO/OG meta,
  Google Fonts, plus `Nav` and `Footer`. Every page wraps its content in this.
- `src/content.config.ts` — one content collection loaded from Markdown via the
  glob loader, with a Zod schema:
  - `work` → `src/content/work/*.md` (experience entries; sorted by `order` desc)
  Add an entry by dropping a `.md` file in the folder — no code changes needed.
- `src/pages/` — file-based routes. The site is a one-pager: `index.astro`
  renders the hero, `work`, `skills` and `contact` sections, navigated via
  in-page anchor links (`#work`, `#skills`, `#contact`).
- `src/components/` — `.astro` components render to zero-JS HTML. React components
  (`.tsx`, e.g. `TypingTagline.tsx`) only ship JS when mounted with a `client:*`
  directive; use React only where interactivity is actually needed.

### Syncing from the CV

The CV lives in a **separate repo** — `terragady/cv`, a Typst document whose
content is all in `cv.typ`. It is **upstream**: for any fact that appears in both
places (roles, dates, bullets, skills, education, publications, languages,
interests), the CV wins.

There is no automated sync. Ask for it — *"sync from the CV"* — and the
`sync-cv` skill (`.claude/skills/sync-cv/SKILL.md`) handles it: it fetches
`cv.typ` from GitHub via `gh` (the repo is private, so unauthenticated raw URLs
won't work), diffs it field-by-field against this repo, and applies the changes.

That skill holds the full mapping table, the site-only fields that must never be
overwritten, and the divergences that are deliberate. Keep it as the single
source for those rules rather than restating them here.

### Styling

Tailwind 4 with tokens defined in `@theme` inside `src/styles/global.css`
(colors `bg/surface/border/fg/muted/accent`, fonts `sans/mono`). These generate
utilities like `bg-bg`, `text-accent`, `font-mono`. The `@tailwindcss/typography`
plugin (`@plugin` in the CSS) powers `prose` on rendered Markdown. Respect
`prefers-reduced-motion` (already handled in `global.css`).

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds with
`withastro/action` and deploys to GitHub Pages. `public/CNAME` pins the custom
domain and must stay (Actions deploys otherwise drop it). Repo default branch is
`master`.

## Conventions

- Code identifiers (files, vars, types, keys) in plain English. UI copy is English;
  any localized text goes in content/values only, never in keys or filenames.
- No Claude Code attribution in commits or PRs.

---

## Astro reference

Full documentation: https://docs.astro.build

- [Routing / dynamic routes / middleware](https://docs.astro.build/en/guides/routing/)
- [Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Framework (React/Vue/Svelte) components](https://docs.astro.build/en/guides/framework-components/)
- [Content collections](https://docs.astro.build/en/guides/content-collections/)
- [Styling / Tailwind](https://docs.astro.build/en/guides/styling/)
