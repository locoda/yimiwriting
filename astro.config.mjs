// @ts-check
import { defineConfig } from 'astro/config';

import playformCompress from '@playform/compress';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [playformCompress()],

  vite: {
    plugins: [tailwindcss()]
  }
});