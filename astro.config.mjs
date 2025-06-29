// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import solidJs from "@astrojs/solid-js";

import vue from "@astrojs/vue";

import svelte from "@astrojs/svelte";

import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  markdown: {},
  integrations: [
    react({
      include: ["**/react/**"],
    }),
    solidJs({
      include: ["**/solid/**"],
    }),
    vue(),
    svelte(),
    mdx(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
