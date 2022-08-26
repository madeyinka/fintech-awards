import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <div>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link
              href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap"
              rel="stylesheet"
            />
          </div>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <div id="renderTooltip"></div>
      </Html>
    );
  }
}

export default MyDocument;
