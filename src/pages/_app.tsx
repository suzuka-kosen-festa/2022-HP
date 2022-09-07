import { cache } from "@emotion/css";
import { CacheProvider } from "@emotion/react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import React from "react";
import { Layout } from "../components/templates/layout";
import { GlobalStyles } from "../styles/global";

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
  <CacheProvider value={cache}>
    <GlobalStyles />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </CacheProvider>
);

export default App;
