# michalik.no

[![Live site](https://img.shields.io/badge/▶_Live_site-michalik.no-2ea44f?style=for-the-badge)](https://michalik.no)

[![CI](https://img.shields.io/github/actions/workflow/status/terragady/me/ci.yml?branch=master&label=CI&logo=github)](https://github.com/terragady/me/actions/workflows/ci.yml)
[![Deploy](https://img.shields.io/github/actions/workflow/status/terragady/me/deploy.yml?branch=master&label=Deploy&logo=github)](https://github.com/terragady/me/actions/workflows/deploy.yml)
![GitHub top language](https://img.shields.io/github/languages/top/terragady/me)
![GitHub repo size](https://img.shields.io/github/repo-size/terragady/me)
![GitHub last commit](https://img.shields.io/github/last-commit/terragady/me)

![Astro](https://img.shields.io/github/package-json/dependency-version/terragady/me/astro?logo=astro&logoColor=white&label=Astro)
![Tailwind CSS](https://img.shields.io/github/package-json/dependency-version/terragady/me/tailwindcss?logo=tailwindcss&logoColor=white&label=Tailwind%20CSS)
![TypeScript](https://img.shields.io/github/package-json/dependency-version/terragady/me/dev/typescript?logo=typescript&logoColor=white&label=TypeScript)
![Oxlint](https://img.shields.io/github/package-json/dependency-version/terragady/me/dev/oxlint?logo=oxc&logoColor=white&label=Oxlint)
![Node](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fterragady/me%2Fmaster%2Fpackage.json&query=%24.engines.node&logo=nodedotjs&logoColor=white&label=Node&color=5FA04E)

Personal website of Marcin Michalik. A static one-pager built with
[Astro](https://astro.build) and Tailwind CSS, with no UI framework and almost
no JavaScript, deployed to GitHub Pages.

## Development

```sh
npm install       # install dependencies (also sets up the pre-commit hook)
npm run dev       # local dev server at http://localhost:4321
npm run build     # production build to ./dist/
npm run preview   # serve the built site locally
npm run check     # type-check, including .astro files
npm run lint      # oxlint + oxfmt check
npm run lint:fix  # auto-fix lint issues and format
```

## Deployment

Pushing to `master` builds and deploys to GitHub Pages automatically. Pull
requests run type-check, lint and build in CI.
