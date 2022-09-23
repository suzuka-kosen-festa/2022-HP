const valiables = require("./src/styles/_variables.json");

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig} */
module.exports = {
  plugins: [],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ...valiables.color,
      },
      fontFamily: {
        zen: ["Zen KakuGothic New", "sans-serif"],
      },
      margin: {
        64.75: "16.1875rem",
      },
    },
  },
  variants: {
    extend: {},
  },
};
