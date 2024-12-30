// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference
// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.
// @ts-check
// https://astro.build/config
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig(
  /** @type {import('astro').AstroUserConfig} */
  {
    // Enable the Solid renderer to support Solid JSX components.
    site: 'https://injoiapp.com',
    trailingSlash: 'always',
    integrations: [sitemap({
      filter: (page) =>
        page !== 'https://injoiapp.com/de/avv/' &&
        page !== 'https://injoiapp.com/tracking/',
    }), mdx(), react()],
  }
)
