const variables = require("./src/styles/_variables.json");

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig} */
module.exports = {
  darkMode: "class",
  plugins: [],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ...variables.global.color,
      },
    },
  },
  variants: {
    extend: {},
  },
};
