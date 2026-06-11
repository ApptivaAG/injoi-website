---
name: update-webpage
description: Use when editing pages, components, content, or configuration for the injoi website (injoiapp.com). Covers Astro pages, React components, multi-language content (de/fr/en/it), navigation, footer, blog posts (MDX), styles (SCSS/Tailwind), and build/deploy with Netlify.
---

# injoi Website — Update Guide

**Stack:** Astro 5 + React 19 + Tailwind CSS 3 + SCSS + TypeScript.  
**Package manager:** pnpm. **Hosting:** Netlify (static export + serverless functions).  
**Languages:** `de`, `fr`, `en`, `it` (IT has minimal content).

---

## Project layout

```
src/
  pages/{lang}/  — Route pages (.astro, .mdx, .md) organized by language
  components/    — Reusable Astro components (.astro)
  components/react/ — React interactive components (Dialog, Newsletter, Plan)
  layouts/       — Main.astro (header/footer), LandingPage.astro, Documentation.astro
  data/{lang}/blog/{slug}/index.mdx — Blog posts per language
  config.ts      — Product info, navigation, footer, CTA links, sitemap
  data.ts        — Team member data
  types.ts       — Shared TypeScript types (Language, Product, etc.)
  styles/        — global.scss, _normalize.scss
  images/        — Imported images for Astro <Picture> optimization
public/assets/   — Static SVGs, PNGs (fonts, illustrations, icons, logos, team photos)
netlify/
  functions/     — Serverless functions (newsletter Mailchimp)
  api.http       — HTTP test file
netlify.toml     — Build config + language-based redirects
public/_redirects — Additional redirect rules
astro.config.mjs — Astro configuration
tailwind.config.mjs — Tailwind config (Gentona font, preflight disabled)
```

---

## Common update tasks

### 1. Edit page content

- **Landing/marketing pages (`.astro` files):** Edit HTML/JSX directly in `src/pages/{lang}/{page}.astro`. Each page imports sections as components from `src/components/`. Changes to content visible on multiple pages should be made in the shared component.
- **Content pages (`.mdx` / `.md`):** Edit markdown in `src/pages/{lang}/{page}.mdx`. These use `LandingPage.astro` layout.
- **Product info / meta tags:** Edit `metaData` in `src/config.ts`.
- **Team members:** Edit `src/data.ts`.

### 2. Edit navigation & footer

- **Navigation menus** (header with flyouts): Edit `globalNavigation` in `src/config.ts`.
- **Footer links**: Edit `siteMap` in `src/config.ts`.
- **Footer text** (legal, newsletter label, etc.): Edit `footer` in `src/config.ts`.
- **CTA buttons**: Edit `callToActionLinks` in `src/config.ts`.
- When adding new nav items, match the `NavigationTree` type: either `NavigationItem` (`{ href, title, description? }`) for leaf links, or `NavigationGroup` (`{ title, items: NavigationItem[] }`) for dropdown groups.

### 3. Edit blog posts

- Each post: `src/data/{lang}/blog/{slug}/index.mdx`.
- Frontmatter schema: `lang`, `title`, `description`, `date`, `author`, `cover` (image), `coverAlt`.
- Post images go in the same folder as `index.mdx`.
- To add a new post: create `src/data/{lang}/blog/{new-slug}/index.mdx` with proper frontmatter. The dynamic route in `src/pages/[...id].astro` picks it up automatically.
- Blog listings: `src/pages/{lang}/blog.astro`.

### 4. Add a new page

1. Create file in `src/pages/{lang}/` (`.astro`, `.md`, or `.mdx`).
2. For `.astro` pages, import and use `MainLayout` from `@layouts/Main.astro`.
3. Add page to navigation in `src/config.ts` (`globalNavigation` and optionally `siteMap`).
4. Add redirects to `netlify.toml` or `public/_redirects` if migrating old URLs.

### 5. Edit styles

- **Global CSS variables & resets:** `src/styles/global.scss` (CSS custom properties like `--primary-color: #00ABBE`).
- **Component styles:** Scoped `<style lang="scss">` blocks in `.astro` files.
- **Tailwind utility classes:** Available in all components; configured in `tailwind.config.mjs`.

### 6. Add/modify React components

- React components live in `src/components/react/`.
- Currently used for: `Dialog` (modal), `Newsletter` (subscription form), `Plan` (pricing slider).
- Use TypeScript, follow existing patterns (function components).

### 7. Images & static assets

- **Static assets:** Place in `public/assets/` (served at `/assets/...`).
- **Optimized images:** Place in `src/images/` and use Astro's `<Picture>` component for responsive images.

---

## Localization pattern

- Pages are duplicated per language under `src/pages/{lang}/`.
- Language-specific config in `src/config.ts` uses `Record<Language, ...>` pattern.
- Always update all supported languages (`de`, `fr`, `en`) when making content changes, unless the content is language-specific.
- Blog posts have separate folders per language in `src/data/{lang}/blog/`.

---

## Dev & build commands

| Command | Purpose |
|---|---|
| `pnpm dev` | Local dev server at `localhost:4321` |
| `pnpm build` | Static site generation to `dist/` |
| `pnpm preview` | Preview built site |
| `pnpm netlify` | Dev with Netlify functions/redirects at `localhost:8888` |
| `pnpm test` | Run vitest unit tests |

---

## Important conventions

- **No semicolons** in JS/TS — Prettier is configured without them.
- **Single quotes** for strings.
- **2-space indentation** (`.editorconfig`).
- **No `cd` in bash commands** — use `workdir` parameter instead.
- Astro path aliases: `@components/`, `@layouts/`, `@icons/`.
- Image optimization: use Astro's `<Picture>` component for imports from `src/images/`.
- After editing any config file (`src/config.ts`), verify navigation/footer in dev server.

---

## Deployment

- Hosted on Netlify. Auto-deploys from the connected git repo.
- Build output: `dist/`.
- Serverless function for newsletter: `netlify/functions/newsletter.ts` (Mailchimp, requires `MAILCHIMP_API_KEY` env var).
- Language-based redirects (browser language → `/de/`, `/fr/`, `/en/`) are configured in `netlify.toml`.
- Blog post images are stored alongside the MDX files in their respective folders.
