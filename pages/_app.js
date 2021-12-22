import Head from "next/head";
import { ThemeProvider } from "next-themes";
import React from "react";
import {
  globalStyles,
  styled,
  darkTheme,
  globalCss
} from "@washingtonpost/wpds-ui-kit";

const darkModeStyles = globalCss({
  "@dark": {
    ...Object.keys(darkTheme.colors).reduce((varSet, currentColorKey) => {
      const currentColor = darkTheme.colors[currentColorKey];
      const currentColorValue =
        currentColor.value.substring(0, 1) === "$"
          ? `$colors${currentColor.value}`
          : currentColor.value;

      return {
        [currentColor.variable]: currentColorValue,
        ...varSet
      };
    }, {})
  }
});

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
  darkModeStyles();

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        dark: darkTheme.className,
        light: "light"
      }}
    >
      <Layout>
        <Head>
          <title>WPDS</title>
        </Head>
        <Container>
          <Component {...pageProps} />
        </Container>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
