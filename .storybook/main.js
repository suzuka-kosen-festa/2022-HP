module.exports = {
  stories: ["../src/components/**/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    {
      name: "@storybook/addon-essentials",
      options: {
        actions: true,
        backgrounds: true,
        controls: true,
        docs: true,
        viewport: true,
        toolbars: false,
      },
    },
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
  babel: async options => ({
    ...options,
    presets: ["@emotion/babel-preset-css-prop"],
  }),
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
};
