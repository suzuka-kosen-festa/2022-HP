const valiables = require("./src/styles/_variables.json")

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig} */
module.exports = {
  darkMode: false,
  plugins: [],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ...valiables.global.color
      },
      fontFamily: {
        zen: ["Zen Kurenaido", "sans-serif"],
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
