const { styled, theme } = require("@washingtonpost/wpds-ui-kit");

export const List = styled("ul", {
	listStyle: "none",
	marginTop: "0",
	paddingLeft: "0",
});
export const ListItem = styled("li", {
	cursor: "pointer",
	padding: "$025 0",
	"a:nth-child(n)": {
		color: theme.colors.gray80,
		textDecoration: "underline",
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
