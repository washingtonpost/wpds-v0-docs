import React from "react";
import { styled } from "@washingtonpost/wpds-ui-kit";
export default function Container({ children, caption }) {
	const Div = styled("div", {
		width: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		padding: "$275",
		backgroundColor: "$gray500",
		color: "$gray80",
	});
	const Caption = styled("p", {
		color: "$accessible",
		fontSize: "$087",
		marginTop: "$050",
	});
	return (
		<>
			<Div>{children}</Div>
			{caption && <Caption>{caption}</Caption>}
		</>
	);
}
