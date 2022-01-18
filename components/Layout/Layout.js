import React, { useState } from "react";
import { Box, styled, theme } from "@washingtonpost/wpds-ui-kit";
import * as Accordion from "@radix-ui/react-accordion";
import { NavigationBar } from "~/components/NavigationBar";
import Sidebar from "~/components/Layout/Components/Sidebar";

const Grid = styled("div", {
	display: "grid",
	margin: "0 auto",

	"@notSm": {
		gridTemplateColumns: "300px 1fr",
		gridTemplateRows: "60px 1fr",
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

const MobileMenu = styled("div", {
	gridArea: "sidebar",

	variants: {
		state: {
			open: { display: "block" },
			closed: { "@sm": { display: "none" } },
		},
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
	const [mobileMenuState, setMobileMenuState] = useState(false);

	return (
		<Grid>
			<NavigationBar
				isOpen={mobileMenuState}
				setMobileMenu={() => setMobileMenuState(!mobileMenuState)}
			/>
			<MobileMenu state={mobileMenuState ? "closed" : "open"}>
				<Sidebar navigation={pageProps.navigation} />
			</MobileMenu>
			<Container>{children}</Container>
		</Grid>
	);
};
