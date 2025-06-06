// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import solidJs from "@astrojs/solid-js";

import vue from "@astrojs/vue";

import svelte from "@astrojs/svelte";

import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "server",
  markdown: {},

  integrations: [
    react({
      include: ["**/react/*"],
    }),
    solidJs({
      include: ["**/solid/*"],
    }),
    vue(),
    svelte(),
    mdx(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: node({
    mode: "standalone",
  }),
});
