import React from "react";
import { styled } from "@washingtonpost/wpds-ui-kit";

export default function Content({ children, useShortVersion }) {
	const Container = styled("div", {
		padding: "0 $200",
		gridColumn: "span 1",
		"@sm": {
			gridColumn: "span 2",
		},
	});
	const Main = styled("main", {
		maxWidth: "1024px",
		paddingTop: "$300",
		margin: "$200 auto",
	});
	return (
		<Container>
			<Main>{children}</Main>
		</Container>
	);
}
