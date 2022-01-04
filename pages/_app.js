import Head from "next/head";
import { ThemeProvider } from "next-themes";
import React from "react";
import {
	globalStyles,
	styled,
	darkTheme,
	globalCss,
	theme,
} from "@washingtonpost/wpds-ui-kit";
import { NavigationBar } from "~/components/NavigationBar";

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
				...varSet,
			};
		}, {}),
	},
	body: {
		background: theme.colors.onPrimary,
	},
});

const Container = styled("section", {
	position: "relative",
	minHeight: "calc(100vh - $400)",
});

const Layout = styled("div", {
	width: "100%",
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
				light: "light",
			}}
			disableTransitionOnChange={false}
			enableColorScheme={false}
		>
			<Layout>
				<Head>
					<title>WPDS</title>
				</Head>
				<NavigationBar showLogo />
				<Container>
					<Component {...pageProps} />
				</Container>
			</Layout>
		</ThemeProvider>
	);
}

export default App;
