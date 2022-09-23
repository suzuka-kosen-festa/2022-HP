import { Global, css } from "@emotion/react";
import React from "react";
import { GlobalStyles as BaseStyles } from "twin.macro";

const customStyle = css`
  @font-face {
    font-family: "Zen KakuGothic New";
    src: url("/fonts/ZenKakuGothicNew.woff2") format("woff2"), url("/fonts/ZenKakuGothicNew.woff") format("woff"),
      url("/fonts/ZenKakuGothicNew.ttf") format("truetype"), url("/fonts/ZenKakuGothicNew.eot") format("embedded-opentype");
    font-style: normal;
    font-weight: 400;
    /* https://styled-components.com/docs/faqs#how-do-i-fix-flickering-text-after-server-side-rendering */
    font-display: fallback;
  }
`;

const GlobalStyles = (): JSX.Element => (
  <>
    <BaseStyles />
    <Global styles={customStyle} />
  </>
);

export { GlobalStyles };
