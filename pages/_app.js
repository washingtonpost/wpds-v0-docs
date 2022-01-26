import { ThemeProvider } from "next-themes";
import React from "react";
import Script from "next/script";
import { DefaultSeo } from "next-seo";
import { globalStyles, darkTheme, Box } from "@washingtonpost/wpds-ui-kit";
import { darkModeStyles } from "~/components/DarkModeStyles";
import { PageLayout } from "~/components/Layout";
import { SSRProvider } from "@react-aria/ssr";
import SEO from "../next-seo.config";
import "@codesandbox/sandpack-react/dist/index.css";
import { Footer } from "~/components/Footer";

function App({ Component, pageProps }) {
  globalStyles();
  darkModeStyles();

  const getLayout = Component.getLayout;

  return (
    <SSRProvider>
      <DefaultSeo {...SEO} />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        value={{
          dark: darkTheme.className,
          light: "light",
        }}
        disableTransitionOnChange={false}
        enableColorScheme={false}
      >
        {getLayout ? (
          getLayout(
            <>
              <Component {...pageProps} />
              <Footer />
            </>
          )
        ) : (
          <PageLayout {...pageProps}>
            <Component {...pageProps} />
          </PageLayout>
        )}
        {/** only render on prod */}
        {process.env.NODE_ENV === "production" && (
          <>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-DD0F8SKR32"
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
								window.dataLayer = window.dataLayer || [];
								function gtag(){window.dataLayer.push(arguments);}
								gtag('js', new Date());

								gtag('config', 'G-DD0F8SKR32');
							`}
            </Script>
          </>
        )}
      </ThemeProvider>
    </SSRProvider>
  );
}

export default App;
