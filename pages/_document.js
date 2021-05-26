import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  state = {};
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <div id="notifications" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
