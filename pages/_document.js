import Document, { Head, Html, Main, NextScript } from "next/document";

class DefaultDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <link rel="logo" href="/favicon.ico" />
        {/* FONT ROBOTO */}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        ></link>
        {/* FONT WOLF IN THE CITY */}
        <link
          href="http://fonts.cdnfonts.com/css/wolf-in-the-city"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Edu+SA+Beginner&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Titan+One&display=swap"
          rel="stylesheet"
        ></link>

        <body className="min-h-screen bg-gray-500">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default DefaultDocument;
