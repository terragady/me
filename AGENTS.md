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

- `src/config.ts` — single source of truth for name, role, `socialLinks`, `navLinks`
  and `skills`. Prefer editing this over hardcoding these values in pages.
- `src/layouts/BaseLayout.astro` — the only page shell: `<head>`/SEO/OG meta,
  Google Fonts, `<ClientRouter />` (Astro View Transitions for smooth page
  changes), plus `Nav` and `Footer`. Every page wraps its content in this.
- `src/content.config.ts` — two content collections loaded from Markdown via the
  glob loader, with Zod schemas:
  - `work` → `src/content/work/*.md` (experience entries; sorted by `order` desc)
  - `blog` → `src/content/blog/*.md` (posts; `draft: true` hides a post; sorted by `date` desc)
  Add content by dropping a `.md` file in the matching folder — no code changes needed.
- `src/pages/` — file-based routes: `index` (hero/bio/featured), `work`, `contact`,
  `blog/index`, `blog/[...slug]` (renders a post; excludes drafts via `getStaticPaths`).
- `src/components/` — `.astro` components render to zero-JS HTML. React components
  (`.tsx`, e.g. `TypingTagline.tsx`) only ship JS when mounted with a `client:*`
  directive; use React only where interactivity is actually needed.

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
