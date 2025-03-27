// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://PokeJofeJr4th.github.io",
  base: "/Website-2.0",
  integrations: [react()],
});