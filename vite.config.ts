import react from "@vitejs/plugin-react";
import * as path from "node:path";
import { defineConfig, splitVendorChunkPlugin } from "vite";
import { VitePWA as vitePwaPlugin } from "vite-plugin-pwa";

const PRODUCTION = "production";
const DEVELOPMENT = "development";

const environment = process.env.NODE_ENV === PRODUCTION ? PRODUCTION : DEVELOPMENT;
const is_production = environment === PRODUCTION;

const root = `${process.cwd()}/src`;
const dist = `${process.cwd()}/dist`;

export default defineConfig({
  build: {
    assetsDir: "assets",
    chunkSizeWarningLimit: 500,
    emptyOutDir: true,
    minify: is_production ? "terser" : undefined,
    outDir: dist,
    rollupOptions: {
      input: {
        index: `${path.resolve(root, "index.html")}/`,
      },
      output: {
        assetFileNames: is_production ? "assets/[hash][extname]" : "assets/[name]-[hash][extname]",
        chunkFileNames: is_production ? "assets/[hash].js" : "assets/[name]-[hash].js",
        entryFileNames: "assets/[name].[hash].js",
        manualChunks: {
          vendor: ["react", "react-dom", "wouter"],
          emotion: ["@emotion/css", "@emotion/react", "@emotion/styled", "twin.macro"],
        },
      },
    },
    terserOptions: is_production
      ? {
          compress: {
            drop_console: true,
          },
        }
      : undefined,
  },
  plugins: [
    react({
      babel: {
        plugins: [
          "babel-plugin-macros",
          [
            "@emotion/babel-plugin-jsx-pragmatic",
            {
              export: "jsx",
              import: "__cssprop",
              module: "@emotion/react",
            },
          ],
          ["@babel/plugin-transform-react-jsx", { pragma: "__cssprop" }, "twin.macro"],
        ],
      },
    }),
    vitePwaPlugin({
      registerType: "autoUpdate",
      workbox: {
        inlineWorkboxRuntime: true,
      },
      manifest: {
        name: "Re:ROAD",
        short_name: "Re:ROAD",
        icons: [
          {
            src: "/seo/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/seo/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        theme_color: "#ffcb00",
        background_color: "#ffcb00",
        start_url: "https://reroad.site/",
        display: "standalone",
        description: "Re:ROAD、それぞれが色付けた3年ぶりの鈴鹿高専祭。",
        lang: "ja",
      },
    }),
    splitVendorChunkPlugin(),
  ],
  root,
  envDir: process.cwd(),
  publicDir: `${process.cwd()}/public`,
  server: {
    port: 3000,
  },
});
