/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig} */
module.exports = {
  darkMode: "class",
  plugins: [],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        zen: ["Zen Kurenaido", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
};
