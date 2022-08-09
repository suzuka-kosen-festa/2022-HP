import { Global, css } from "@emotion/react";
import React from "react";
import { GlobalStyles as BaseStyles } from "twin.macro";

const customStyle = css`
  @font-face {
    font-family: "Zen Kurenaido";
    src: url("/fonts/ZenKurenaido.woff2") format("woff2"), url("/fonts/ZenKurenaido.woff") format("woff"),
      url("/fonts/ZenKurenaido.ttf") format("truetype"), url("/fonts/ZenKurenaido.eot") format("embedded-opentype");
    font-style: normal;
    font-weight: 400;
    /* https://styled-components.com/docs/faqs#how-do-i-fix-flickering-text-after-server-side-rendering */
    font-display: fallback;
  }
`;

const GlobalStyles = (): JSX.Element => (
  <React.Fragment>
    <BaseStyles />
    <Global styles={customStyle} />
  </React.Fragment>
);

export { GlobalStyles };
