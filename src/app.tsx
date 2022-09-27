import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import React from "react";
import { Layout } from "./components/templates/layout";
import { GoogleTagManager, googleTagManagerId } from "./infrastructures/gtm";
import Router from "./routes";
import { GlobalStyles } from "./styles/global";

const cache = createCache({ prepend: true, key: "twin" });

const App = (): JSX.Element => (
  <React.StrictMode>
    <CacheProvider value={cache}>
      <GlobalStyles />
      <GoogleTagManager id={googleTagManagerId()} />
      <Layout>
        <Router />
      </Layout>
    </CacheProvider>
  </React.StrictMode>
);

export default App;
