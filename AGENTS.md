# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> `CLAUDE.md` is a symlink to this file (`AGENTS.md`); edit `AGENTS.md`.

## What this is

Personal "about me" website for Marcin Michalik, served at **https://michalik.no**
via **GitHub Pages** (from the `me` repo — a project repo using a custom domain, so
it serves at the domain root; Astro `base` stays `/`).

## Commands

- `npm run dev` — local dev server at http://localhost:4321
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the built `dist/` locally
- `npx astro check` — type-check `.astro` files

There is no test suite. `npm run build` is the correctness gate — it type-checks
content collections and fails on broken references, so run it before committing.

## Architecture

Static site: **Astro 7** + **React 19** (islands) + **Tailwind CSS 4** (via the
`@tailwindcss/vite` plugin — no `tailwind.config.js`; design tokens live in CSS).

- `src/config.ts` — single source of truth for name, role, email, `socialLinks`,
  and `navLinks`. Prefer editing this over hardcoding these values in pages.
- `src/layouts/BaseLayout.astro` — the only page shell: `<head>`/SEO/OG meta,
  Google Fonts, `<ClientRouter />` (Astro View Transitions for smooth page
  changes), plus `Nav` and `Footer`. Every page wraps its content in this.
- `src/content.config.ts` — two content collections loaded from Markdown via the
  glob loader, with Zod schemas:
  - `work` → `src/content/work/*.md` (portfolio/CV entries; sorted by `order` desc)
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

- Push to `master` → `.github/workflows/deploy.yml` builds with `withastro/action`
  and deploys to GitHub Pages. (Repo default branch is `master`, not `main`.)
- `public/CNAME` contains `michalik.no` and must stay — it re-pins the custom
  domain on every Actions deploy (Settings-set domains get wiped otherwise).
- Repo → Settings → Pages → Source must be **GitHub Actions**.

## Domain / DNS notes

- Registrar/billing must be healthy first: NORID whois must show a real registrar,
  not `REG0-NORID` (the "no active registrar" placeholder).
- DNS cutover: apex `michalik.no` A records → GitHub Pages IPs
  (`185.199.108–111.153`); `www` CNAME → `terragady.github.io`.
- **Do not remove** the `MX` (`mail.michalik.no`) or `ip4:185.126.36.18` in the
  SPF TXT record — email runs on the old host and must keep working after cutover.

## Conventions

- Code identifiers (files, vars, types, keys) in plain English. This site's UI
  copy is English; if localized text is added later, it goes in content/values only.
- No Claude Code attribution in commits or PRs.

---

## Astro reference

Full documentation: https://docs.astro.build

- [Routing / dynamic routes / middleware](https://docs.astro.build/en/guides/routing/)
- [Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Framework (React/Vue/Svelte) components](https://docs.astro.build/en/guides/framework-components/)
- [Content collections](https://docs.astro.build/en/guides/content-collections/)
- [Styling / Tailwind](https://docs.astro.build/en/guides/styling/)
