// astro.config.mjs
//
// LEARNING NOTE — Astro Config:
// This is Astro's central config file. Right now it's minimal,
// but as your project grows you'll add integrations here:
//   - @astrojs/tailwind   (if you switch to Tailwind)
//   - @astrojs/react      (if you need React components for interactivity)
//   - @astrojs/vercel     (for deployment)

import { defineConfig } from 'astro/config';

export default defineConfig({
  // 'static' means Astro pre-renders every page to plain HTML at build time.
  // Perfect for a game like this — fast, no server needed.
  output: 'static',
});
