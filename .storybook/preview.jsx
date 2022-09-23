import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { GlobalStyles } from "../src/styles/global";

const cache = createCache({ prepend: true, key: "twin" });

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "kosen-fes",
    values: [
      {
        name: "kosen-fes",
        value: "#FFFFFF",
      },
    ],
  },
};

export const decorators = [
  Story => (
    <CacheProvider value={cache}>
      <GlobalStyles />
      <Story />
    </CacheProvider>
  ),
];
