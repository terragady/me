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

The CV is a **separate repo** — `github.com/terragady/cv`, cloned locally at
`~/Documents/cv`. It is a Typst document; all content lives in `cv.typ`.

**The CV is upstream.** For any fact that appears in both places (roles, dates,
bullets, skills, education, publications, languages, interests), `cv.typ` wins.
There is no automated sync — on request ("sync from the CV"), read `cv.typ`, diff
it against the table below, and apply the changes here.

| `cv.typ` | This repo |
| --- | --- |
| `#entry(role, org, location, dates)` + bullets | `src/content/work/<slug>.md` → `role`, `title`, `period`, body |
| `#section("Skills")` `*Group:* items` lines | `skills` in `src/config.ts` |
| `#section("Education")` | `education` in `src/config.ts` |
| `#section("Selected Publications")` | `publications` in `src/config.ts` |
| `#section("Languages")` | `languages` in `src/config.ts` |
| `#section("Interests")` | `interests` in `src/config.ts` |
| `#header(tagline:)` | `site.role` in `src/config.ts` |
| `#header(contacts:)` links | `socialLinks` in `src/config.ts` |

**Site-only — never overwrite from the CV:** the `summary`, `tags` and `order`
frontmatter on work entries, the hero paragraph and `TypingTagline` phrases in
`index.astro`, and everything in the contact section.

**Deliberate divergences — do not "fix" these:**

- The CV lists a phone number and personal email; the site uses the contact form
  instead, and deliberately publishes neither.
- Publication entries are abbreviated here (`et al.`); the CV carries the full
  author lists.
- Site prose is condensed relative to the CV's fuller phrasing. Keep meaning in
  step, not wording character-for-character.

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
