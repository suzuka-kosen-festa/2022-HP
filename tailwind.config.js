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
      borderRadius: {
        "5xl": "2.5rem",
      },
      borderWidth: {
        3: "3px",
        5: "5px",
      },
      colors: {
        ...variables.color,
      },
      fontFamily: {
        zen: ["Zen KakuGothic New", "sans-serif"],
      },
      fontSize: {
        xss: "2.4vw",
        "3.5xl": "2rem",
        "4.5xl": "2.5rem",
        "4.5xl": "2.5rem",
        "ink-md": "4.5vw",
        ink: "7.2vw",
      },
      gridTemplateColumns: {
        timetable: "1fr repeat(4, minmax(0, 10fr))",
      },
      gridTemplateRows: {
        7: "repeat(7, minmax(0, 4fr))",
      },
      height: {
        "time-table-row-md": "120vw",
        "time-table-row": "125vw",
      },
      inset: {
        "ink-top-md": "8.75vw",
        "ink-left-md": "10vw",
        "ink-top": "15vw",
        "ink-left": "16.5vw",
      },
      margin: {
        4.5: "1.125rem",
        5.5: "1.375rem",
        21: "5.375rem",
        50: "12.5rem",
        64.75: "16.1875rem",
      },
      maxWidth: {
        "main-md": "81.25vw",
        main: "68.75vw",
      },
      minHeight: {
        switching: "6.25vw",
      },
      minWidth: {
        "switching-md": "42.1vw",
        switching: "31.25vw",
      },
      padding: {
        4.5: "1.125rem",
        5.5: "1.375rem",
        13: "3.25rem",
        21: "5.25rem",
        21.25: "5.3125rem",
        "header-x": "2vw",
        "header-x-md": "10vw",
        "header-y": "1vw",
        "header-y-md": "2vw",
        header: "20%",
        "hero-lg": "28.75vw",
        hero: "24vw",
        main: "8vw",
      },
      screens: {
        xs: "320px",
        "3xl": "1727px",
        bazaar: "640px",
      },
      space: {
        2.25: "0.5625rem",
      },
      width: {
        112.5: "28.125rem",
        180: "45rem",
      },
    },
  },
  variants: {
    extend: {},
  },
};
