import React from "react";
import { styled, theme } from "@washingtonpost/wpds-ui-kit";
import Link from "next/link";
import Header from "../../Typography/Headers";

const Container = styled("div", {
	margin: "$200 0",
});
const List = styled("ul", {
	listStyle: "",
	marginTop: "0",
	paddingLeft: "$050",
});
const ListItem = styled("li", {
	cursor: "pointer",
	padding: "$025 0",

	listStyle: "none",
});
const LinkText = styled("a", {
	color: theme.colors.accessible,
	textDecoration: "underline",
	"&:focus": {
		outlineColor: "$signal",
		outlineStyle: "solid",
		outlineOffset: "2px",
		outlineWidth: "2px",
	},
});

const Item = ({ children, as, href }) => (
	<ListItem>
		<Link passHref as={as} href={href}>
			<LinkText>{children}</LinkText>
		</Link>
	</ListItem>
);

export default function tableofcontents({ current, headings }) {
	return (
		<Container>
			<Header css={{ margin: "0 $025" }} as="h2">
				Table of Contents
			</Header>
			<List>
				{headings.map(
					(heading, i) =>
						heading.level === 2 && (
							<Item
								key={i}
								as={`/components/${current}#${heading.label}`}
								href={`/components/[slug]#${heading.label}`}
							>
								{heading.label}
							</Item>
						)
				)}
			</List>
		</Container>
	);
}
