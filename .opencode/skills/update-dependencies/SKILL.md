---
name: update-dependencies
description: Use when updating dependencies (npm/pnpm), managing the Nix dev shell, Node.js version, environment variables, lockfile, or any tooling infrastructure for the injoi website. Covers pnpm, flake.nix, .envrc, .node-version, .npmrc, Netlify CLI, and CI tooling.
---

# injoi Website — Dependencies & Dev Environment Guide

**Stack:** Astro 5 + React 19 + Tailwind CSS 3 + SCSS + TypeScript.  
**Package manager:** pnpm. **Hosting:** Netlify (static export + serverless functions).  
**Dev environment:** Nix flake (nodejs_22 + pnpm) + direnv + `.env`.

---

## Dev environment

### Quick start

```bash
pnpm install        # install all dependencies
pnpm dev            # local dev server at localhost:4321
pnpm netlify        # dev with Netlify functions/redirects at localhost:8888
pnpm build          # production build to dist/
pnpm preview        # preview built site
pnpm test           # run vitest unit tests
```

### Nix flake (`flake.nix`)

The project uses a Nix flake for a reproducible dev shell:

```nix
devShells.default = mkShell {
  buildInputs = [
    nodejs_22
    pnpm
  ];
};
```

**To update flake inputs:**

```bash
nix flake update
```

**To enter the shell without direnv:**

```bash
nix develop
```

### direnv (`.envrc`)

```bash
layout node    # sets up node_modules/.bin in PATH
use flake      # loads the Nix dev shell
dotenv         # loads .env for local secrets
```

If you change `.envrc`, run:

```bash
direnv allow
```

### Node version (`.node-version`)

Contains `22`. Used by `flake.nix` and tools like `fnm`/`nvm`/`n`. Update it if the Node.js major version changes — then update `flake.nix` to match.

### Environment variables (`.env`)

- Not committed to git (listed in `.gitignore`).
- Loaded via `direnv dotenv` (from `.envrc`).
- Required: `MAILCHIMP_API_KEY` (for the newsletter Netlify function).
- If adding a new env var, create a `.env.example` with placeholder values and document it in the function or component that uses it.

---

## Managing dependencies

### Update all dependencies to latest allowed by semver

```bash
pnpm update            # updates within semver ranges in package.json
pnpm update --latest   # bumps to latest version (carets/tildes respected)
```

### Check for outdated packages

```bash
pnpm outdated          # shows packages that have newer versions
```

### Update a specific package

```bash
pnpm add <package>@latest    # install latest (updates package.json + lockfile)
pnpm update <package>        # update within semver range
```

### Dedupe & prune

```bash
pnpm dedupe                  # deduplicate dependencies in lockfile
pnpm prune                   # remove extraneous packages
```

### Rebuild from scratch (when lockfile or node_modules is corrupted)

```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

---

## Lockfile (`pnpm-lock.yaml`)

- Always committed to git.
- After any dependency change, verify the lockfile is updated by running `pnpm install`.
- If merge conflicts occur in `pnpm-lock.yaml`, run `pnpm install` to regenerate.

---

## Tooling maintenance

| Tool | Config file | Update method |
| --- | --- | --- |
| Astro | `astro.config.mjs` | `pnpm add astro@latest` |
| Tailwind CSS | `tailwind.config.mjs` | `pnpm add tailwindcss@latest` |
| TypeScript | `tsconfig.json` | `pnpm add typescript@latest` (not a direct dep — comes via `astro`) |
| ESLint | `.eslintrc.json` | `pnpm add eslint@latest` (if needed) |
| Prettier | `.prettierrc.js` | `pnpm add prettier@latest` + `prettier-plugin-astro@latest` |
| Vitest | (via package.json script) | `pnpm add vitest@latest` |
| Netlify CLI | `netlify.toml` | `pnpm add netlify-cli@latest` |
| Sass | (global.scss) | `pnpm add sass@latest` |
| sharp | (image processing) | `pnpm add sharp@latest` |

After updating any tool, run the relevant validation:

```bash
pnpm build     # verify build succeeds
pnpm test      # verify tests pass
```

### Astro integrations

Update integrations individually:

```bash
pnpm add @astrojs/react@latest @astrojs/tailwind@latest @astrojs/mdx@latest @astrojs/sitemap@latest @astrojs/partytown@latest
```

---

## Common issues

### `pnpm install` fails after pulling new changes

```bash
pnpm install --frozen-lockfile   # check if lockfile is out of sync
pnpm install                     # let pnpm fix mismatches
```

### Netlify CLI fails

Make sure `.env` has `MAILCHIMP_API_KEY` set. Run `pnpm netlify` from the project root.

### Node version mismatch

Check `.node-version` and verify with:

```bash
node --version   # should be 22.x
```

### direnv not loading

```bash
direnv allow
```

### After switching branches

```bash
pnpm install     # update node_modules if deps changed in the branch
```

---

## Validation checklist

After any dependency or dev environment change:

- [ ] `pnpm install` succeeds
- [ ] `pnpm build` succeeds
- [ ] `pnpm test` passes
- [ ] `pnpm dev` starts without errors
- [ ] Lockfile (`pnpm-lock.yaml`) is committed
- [ ] `.node-version` matches the Node.js version in `flake.nix`
