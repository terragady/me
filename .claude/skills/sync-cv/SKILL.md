---
name: sync-cv
description: Sync this site's content from the CV repo (terragady/cv), which is upstream for every shared fact — roles, dates, bullets, skills, education, publications, languages, interests. Use when asked to "sync from the CV", "update from my CV", "the CV changed", "pull in CV changes", or to check whether the site has drifted from the CV.
---

# Sync from the CV

The CV is a separate repo — **`terragady/cv`** (Typst; all content in `cv.typ` on
`master`). It is **upstream**: for any fact appearing in both places, the CV wins.

The repo is **private**, so fetch it through `gh` (uses existing auth). Do not use
`raw.githubusercontent.com` or WebFetch — both fail on a private repo.

## Steps

### 1. Fetch the current CV

```bash
gh api repos/terragady/cv/contents/cv.typ -H "Accept: application/vnd.github.raw"
```

If this fails, run `gh auth status` and report the problem — do not fall back to a
local clone, which may be stale or absent on this machine.

### 2. Diff against the site

Read each target below and compare it to the CV. Report what differs *before*
editing anything, so the user can veto individual changes.

| `cv.typ` | This repo |
| --- | --- |
| `#entry(role, org, location, dates)` + bullets | `src/content/work/<slug>.md` → `role`, `title`, `period`, body bullets |
| `#section("Skills")` — `*Group:* items` lines | `skills` in `src/config.ts` |
| `#section("Education")` | `education` in `src/config.ts` |
| `#section("Selected Publications")` | `publications` in `src/config.ts` |
| `#section("Languages")` | `languages` in `src/config.ts` |
| `#section("Interests")` | `interests` in `src/config.ts` |
| `#header(tagline:)` | `site.role` in `src/config.ts` |
| `#header(contacts:)` links | `socialLinks` in `src/config.ts` |

A new `#entry` in the CV means a new `src/content/work/<slug>.md`. Give it the next
`order` value up (highest = most recent) and write `summary`/`tags` yourself — the
CV has no equivalent.

### 3. Leave site-only content alone

Never overwrite from the CV:

- `summary`, `tags` and `order` frontmatter on work entries
- the hero paragraph and `TypingTagline` phrases in `src/pages/index.astro`
- everything in the contact section

### 4. Respect the deliberate divergences

These are intentional. Do not "fix" them:

- The CV lists a phone number and personal email. The site publishes **neither** —
  it uses the contact form. Never copy contact details across.
- Publications are abbreviated here (`et al.`); the CV carries full author lists.
- Site prose is condensed relative to the CV's fuller phrasing. Keep the *meaning*
  in step, not the wording character-for-character. Rewriting site copy to match
  CV phrasing verbatim is a regression, not a sync.

### 5. Verify

```bash
npm run build && npx astro check
```

Both must pass — the build type-checks content collections and fails on broken
references. There is no test suite, so this is the correctness gate.

### 6. Report

Summarise as: facts changed, entries added, and anything skipped because it fell
under steps 3 or 4. If the CV and site already agree, say so plainly rather than
inventing changes.
