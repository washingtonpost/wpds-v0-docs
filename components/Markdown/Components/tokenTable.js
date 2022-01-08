import React from "react";
import { styled } from "@washingtonpost/wpds-ui-kit";
import Tokens from "@washingtonpost/wpds-theme/src/wpds.tokens.json";

export default function tokenTable({ headers, tableData }) {
	const Table = styled("table", {
		borderCollapse: "collapse",
		margin: "$050 0",
		minWidth: 400,
		boxShadow: "$100",
		"@sm": {
			width: "100%",
			minWidth: "unset",
		},
	});
	const TR = styled("tr", {
		border: "1px solid $subtle",
	});
	const Div = styled("div", {
		padding: "$050 $150",
		width: "100%",
	});
	const TD = styled("td", {
		color: "$accessible",
		border: "1px solid $subtle",
		padding: "$050",
		variants: {
			dataType: {
				header: {
					color: "$primary",
					fontWeight: "$bold",
				},
			},
		},
	});
	return (
		<Table>
			<thead>
				<TR>
					{headers.map((elem, i) => {
						return (
							<TD dataType={"header"} key={i}>
								{elem}
							</TD>
						);
					})}
				</TR>
			</thead>
			{tableData.map((elem, i) => {
				return (
					<TR key={i}>
						<TD>{elem.name}</TD>
						<TD>
							<Div css={elem.css} />
						</TD>
					</TR>
				);
			})}
		</Table>
	);
}
