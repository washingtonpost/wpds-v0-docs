import Head from "next/head";
import React from "react";
import { globalStyles, styled, theme } from "@washingtonpost/ui-theme";

const Container = styled("section", {
  position: "relative",
  minHeight: "calc(100vh - $400)",
  marginLeft: "$400",
  marginRight: "$400",

  "@sm": {
    margin: "$200"
  }
});

const Layout = styled("div", {
  display: "flex",
  flexDirection: "column"
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
