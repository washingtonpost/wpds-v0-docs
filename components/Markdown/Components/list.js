const { styled, theme } = require("@washingtonpost/wpds-ui-kit");

export const List = styled("ul", {
	listStyle: "none",
	marginTop: "0",
	variants: {
		as: {
			ol: {
				listStyle: "revert",
				paddingLeft: "$100",
			},
		},
	},
});
export const ListItem = styled("li", {
	padding: "$025 0",
	color: theme.colors.gray80,
	"a:nth-child(n)": {
		color: theme.colors.gray80,
		textDecoration: "underline",
	},
	"&.task-list-item p": {
		display: "flex",
		alignItems: "flex-start",

		"[role='checkbox']": {
			marginBottom: "$025",
			alignSelf: "flex-start",
			marginRight: "$050",
		},
	},
});
export const LinkText = styled("span", {
	color: "$accessible",
	textDecoration: "underline",
	"&:focus": {
		outlineColor: "$signal",
		outlineStyle: "solid",
		outlineOffset: "2px",
		outlineWidth: "2px",
	},
});
