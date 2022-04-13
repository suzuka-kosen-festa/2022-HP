module.exports = {
  stories: ['../src/components/**/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss')
        }
      }
    }
  ],
  babel: async options => ({
    ...options,
    presets: ['@emotion/babel-preset-css-prop']
  }),
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5'
  }
}
