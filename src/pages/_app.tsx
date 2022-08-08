import type { NextPage } from "next";
import type { AppProps } from "next/app";
import React from "react";
import { Layout } from "../components/templates/layout";
import { GlobalStyles } from "../styles/global";

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
  <React.Fragment>
    <GlobalStyles />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </React.Fragment>
);

export default App;
