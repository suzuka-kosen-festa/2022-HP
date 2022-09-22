import { mergeConfig } from "vite";
import { defineConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      root: process.cwd(),
      globals: true,
      environment: "jsdom",
      setupFiles: "tests/vitest.custom-matchers.ts",
    },
  }),
);
