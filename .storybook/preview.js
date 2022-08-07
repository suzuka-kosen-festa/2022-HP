import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { GlobalStyles } from "../src/styles/global";
import { Layout } from "../src/components/templates/layout";

const cache = createCache({ prepend: true, key: "twin" });

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  Story => (
    <CacheProvider value={cache}>
      <GlobalStyles />
      <Layout>
        <Story />
      </Layout>
    </CacheProvider>
  ),
];
