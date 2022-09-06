module.exports = {
  presets: [
    [
      "next/babel",
      {
        "preset-react": {
          runtime: "automatic",
          importSource: "@emotion/react",
        },
      },
    ],
  ],
  plugins: [
    "@emotion",
    "macros",
    [
      "@emotion/babel-plugin-jsx-pragmatic",
      {
        export: "jsx",
        import: "__cssprop",
        module: "@emotion/react",
      },
    ],
    ["@babel/plugin-transform-react-jsx", { pragma: "__cssprop" }, "twin.macro"],
    ['@babel/plugin-proposal-private-methods', { loose: false }],
  ],
  env: {
    test: {
      presets: [
        [
          "@babel/preset-env",
          {
            targets: {
              node: "current",
            },
          },
        ],
      ],
    },
  },
};
