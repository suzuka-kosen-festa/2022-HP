const variables = require("./src/styles/_variables.json");

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig} */
module.exports = {
  plugins: [],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "social-instagram":
          "radial-gradient(circle farthest-corner at 28% 100%, #FFD600 0%, #FF7A00 22%, #FF0069 35%, transparent 65%), linear-gradient(145deg, #7638FA 10%, #D300C5 70%)",
        "social-instagram-reaction":
          "radial-gradient(circle farthest-corner at 28% 100%, #e6c100 0%, #e66e00 22%, #e6005f 35%, transparent 65%), linear-gradient(145deg, #651ff9 10%, #b900ad 70%)",
      },
      colors: {
        ...variables.color,
      },
      fontFamily: {
        zen: ["Zen KakuGothic New", "sans-serif"],
      },
      margin: {
        4.5: "1.125rem",
        64.75: "16.1875rem",
      },
      padding: {
        4.5: "1.125rem",
        13: "3.25rem",
        "header-x-md": "10vw",
        "header-x": "2vw",
        "header-y": "3.5vw",
        "header-y-md": "2vw",
        header: "20%",
        "hero-lg": "28.75vw",
        hero: "24vw",
      },
    },
  },
  variants: {
    extend: {},
  },
};
