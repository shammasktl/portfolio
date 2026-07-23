// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://shammasktl.vercel.app",
  vite: {
    plugins: [tailwindcss()],
  },
  base: "/",
  trailingSlash: "always",
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Plus Jakarta Sans",
      cssVariable: "--font-plus-jakarta-sans",
    },
  ],
  integrations: [icon(), sitemap()],
});
