# Personal Portfolio

Vishal Varwani's personal site. React, TypeScript, Tailwind CSS, and Framer Motion, built as a static SPA with Vite and deployed on Vercel.

## Stack

- [Vite](https://vite.dev) + React 19 + TypeScript
- Tailwind CSS v4
- Framer Motion for scroll reveals and page transitions
- React Router for client-side routing

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Outputs a static build to `dist/`. `vercel.json` rewrites all routes to `index.html` for client-side routing.

## Structure

```
src/
  components/   shared UI (nav, cards, animations, icons)
  data/         content — projects, experience, skills, profile
  pages/        route-level page components
  lib/          theme handling, small utilities
```

Content lives in `src/data/` as plain TypeScript objects, not a CMS — editing a project or bullet point is a one-file change.
