import NextDocument, { Html, Head, Main, NextScript, DocumentInitialProps } from "next/document";
import type { DocumentContext } from "next/document";
import type { ReactElement } from "react";

class Document extends NextDocument {
  static getInitialProps(context: DocumentContext): Promise<DocumentInitialProps> {
    return NextDocument.getInitialProps(context);
  }

  // eslint-disable-next-line class-methods-use-this
  render(): ReactElement {
    return (
      <Html lang="ja">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/seo/apple-touch-icon.png"></link>
          <meta name="theme-color" content="#fff" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
