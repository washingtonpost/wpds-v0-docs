import React from "react";
import { styled, theme } from "@washingtonpost/wpds-ui-kit";
import { NavigationBar } from "~/components/NavigationBar";
import Sidebar from "~/components/Layout/Components/Sidebar";

const Grid = styled("div", {
	display: "grid",
	margin: "0 auto",

	"@notSm": {
		gridTemplateColumns: "300px 1fr",
		gridTemplateRows: "auto 1fr",
		gridTemplateAreas: `
		"logo nav"
        "sidebar content"
    	`,
		gridGap: "$125",
		rowGap: "0",
		paddingRight: "$100",
	},

	"@sm": {
		gridTemplateColumns: "1fr",
		gridTemplateRows: "1fr",
		gridTemplateAreas: `
		"logo"
        "sidebar"
        "content"
		`,
		gridGap: "0",
	},
});

const Container = styled("div", {
	gridArea: "content",
	width: "100%",
	margin: "0 auto",
	marginTop: "$125",

	"@sm": {
		padding: "0 $100",
	},

	"@notSm": {
		maxWidth: "1028px",
	},
});

export const PageLayout = ({ children, ...pageProps }) => {
	return (
		<Grid>
			<NavigationBar />
			<Sidebar
				navigation={pageProps.navigation}
				current={pageProps.current}
			/>
			<Container>{children}</Container>
		</Grid>
	);
};
