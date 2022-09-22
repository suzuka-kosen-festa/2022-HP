const react = require("@vitejs/plugin-react");

module.exports = {
  stories: ["../src/components/**/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
    "@storybook/addon-a11y",
  ],
  staticDirs: ["../public"],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config) {
    config.plugins = config.plugins.filter(
      plugin => !(Array.isArray(plugin) && plugin[0]?.name.includes("vite:react")),
    );
    config.plugins.push(
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
    );
    return config;
  },
};
