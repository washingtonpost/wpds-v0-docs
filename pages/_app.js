import Head from "next/head";
import React from "react";
import {
  globalStyles,
  styled,
  theme,
  darkTheme
} from "@washingtonpost/ui-theme";

const Container = styled("section", {
  position: "relative",
  minHeight: "calc(100vh - $400)"
});

const Layout = styled("div", {
  width: "100%"
});

// This default export is required in a new `pages/_app.js` file.
function App({ Component, pageProps }) {
  globalStyles();

  return (
    <Layout>
      <Head>
        <title>WPDS</title>
      </Head>
      <Container>
        <Component {...pageProps} />
      </Container>
    </Layout>
  );
}

export default App;
