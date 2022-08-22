import Head from "next/head";
import React from "react";
import type { SeoProperties } from "../../models";

const OGP = "/seo/ogp.png";

const SeoMetas = ({ title, description }: Omit<SeoProperties, "pageRelPath">): JSX.Element => (
  <React.Fragment>
    <meta charSet={"utf8"} />
    <meta httpEquiv={"X-UA-Compatible"} content={"IE=edge"} />
    <meta name={"viewport"} content={"width=device-width,initial-scale=1"} />
    <meta name={"description"} content={description} lang={"ja"} />
    <meta name={"name"} content={title} />
    <meta name={"image"} content={OGP} />
    <link rel={"icon"} href={"/seo/favicon.ico"} />
  </React.Fragment>
);

const OgpMetas = ({ title, description, pageRelPath }: SeoProperties): JSX.Element => (
  <React.Fragment>
    <meta property={"og:title"} content={title} />
    <meta property={"og:description"} content={description} />
    <meta property={"og:type"} content={"webpage"} />
    {pageRelPath ? (
      <meta property={"og:url"} content={`https://reroad.site${pageRelPath}`} />
    ) : (
      <meta property={"og:url"} content={"https://reroad.site/"} />
    )}
    <meta property={"og:image"} content={OGP} />
    <meta property={"og:locale"} content={"ja_JP"} />
    <meta property={"og:site_name"} content={"Re:ROAD"} />
  </React.Fragment>
);

const TwMetas = ({ title, description }: Omit<SeoProperties, "pageRelPath">): JSX.Element => (
  <React.Fragment>
    <meta name={"twitter:title"} content={title} />
    <meta name={"twitter:description"} content={description} />
    <meta name={"twitter:image"} content={OGP} />
    <meta name={"twitter:card"} content={"summary_large_image"} />
    <meta name={"twitter:site"} content={"@KOSENFESTA"} />
    <meta name={"twitter:creator"} content={"@KOSENFESTA"} />
  </React.Fragment>
);

const IconMetas = (): JSX.Element => (
  <React.Fragment>
    <link rel={"apple-touch-icon"} sizes={"180x180"} href={"/seo/apple-touch-icon.png"} />
    <link rel={"icon"} type={"image/png"} sizes={"32x32"} href={"/seo/favicon-32x32.png"} />
    <link rel={"icon"} type={"image/png"} sizes={"16x16"} href={"/seo/favicon-16x16.png"} />
    <link rel={"mask-icon"} href={"/seo/safari-pinned-tab.svg"} color={"#000000"} />
    <meta name={"msapplication-TileColor"} content={"#000000"} />
    <meta name={"theme-color"} content={"#000000"} />
  </React.Fragment>
);

const Seo: React.FC<SeoProperties> = ({ title, description, pageRelPath }) => (
  <Head>
    <title>{title}</title>
    <SeoMetas title={title} description={description} />
    <OgpMetas title={title} description={description} pageRelPath={pageRelPath} />
    <TwMetas title={title} description={description} />
    <IconMetas />
    <link rel={"manifest"} href={"/manifest.json"} />
  </Head>
);

export { Seo };
