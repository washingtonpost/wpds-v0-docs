import Head from "next/head";
import { ThemeProvider } from "next-themes";
import React from "react";
import { globalStyles, darkTheme } from "@washingtonpost/wpds-ui-kit";
import { darkModeStyles } from "~/components/DarkModeStyles";
import { PageLayout } from "~/components/Layout";

function App({ Component, pageProps }) {
	globalStyles();
	darkModeStyles();

	const getLayout = Component.getLayout;

	// if the page has a getLayout function, use it
	// otherwise, use the default layout

	if (getLayout) {
		return (
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
				{getLayout(<Component {...pageProps} />)}
			</ThemeProvider>
		);
	}

	return (
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
			<PageLayout {...pageProps}>
				<Component {...pageProps} />
			</PageLayout>
		</ThemeProvider>
	);
}

export default App;
