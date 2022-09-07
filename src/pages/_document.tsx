import { extractCritical } from "@emotion/server";
import NextDocument, { Html, Head, Main, NextScript, DocumentInitialProps } from "next/document";
import type { DocumentContext } from "next/document";
import type { ReactElement } from "react";
import { Fragment } from "react";

class Document extends NextDocument {
  static async getInitialProps(context: DocumentContext): Promise<DocumentInitialProps> {
    const initialProperties = await NextDocument.getInitialProps(context);
    const page = await context.renderPage();
    const styles = extractCritical(page.html);
    return {
      ...initialProperties,
      ...page,
      styles: (
        <Fragment>
          {initialProperties.styles}
          <style data-emotion-css={styles.ids.join(" ")} dangerouslySetInnerHTML={{ __html: styles.css }} />
        </Fragment>
      ),
    };
  }

  // eslint-disable-next-line class-methods-use-this
  render(): ReactElement {
    return (
      <Html lang="ja">
        <Head>
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
