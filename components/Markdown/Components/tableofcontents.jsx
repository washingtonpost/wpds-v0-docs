import React from "react";
import { styled } from "@washingtonpost/wpds-ui-kit";
import Link from "next/link";
import Header from "../../Typography/Headers";
export default function tableofcontents({ current }) {
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
		color: "$accessible",
		textDecoration: "underline",
		"&:focus": {
			outlineColor: "$signal",
			outlineStyle: "solid",
			outlineOffset: "2px",
			outlineWidth: "2px",
		},
	});
	return (
		<Container>
			<Header css={{ margin: "0 $025" }} as="h2">
				Table of Contents
			</Header>
			<List>
				<ListItem>
					<Link
						passHref
						as={`/components/${current}#Anatomy`}
						href={`/components/[slug]#anatomy`}
					>
						<LinkText>Anatomy</LinkText>
					</Link>
				</ListItem>
				<ListItem>
					<Link
						passHref
						as={`/components/${current}#Options`}
						href={`/components/[slug]#options`}
					>
						<LinkText>Options</LinkText>
					</Link>
				</ListItem>
				<ListItem>
					<Link
						passHref
						as={`/components/${current}#Behavior`}
						href={`/components/[slug]#behavior`}
					>
						<LinkText>Behavior</LinkText>
					</Link>
				</ListItem>
				<ListItem>
					<Link
						passHref
						as={`/components/${current}#Specs`}
						href={`/components/[slug]#specs`}
					>
						<LinkText>Specs</LinkText>
					</Link>
				</ListItem>
				<ListItem>
					<Link
						passHref
						as={`/components/${current}#Accessbility`}
						href={`/components/[slug]#accessbility`}
					>
						<LinkText>Accessiblity</LinkText>
					</Link>
				</ListItem>
				<ListItem>
					<Link
						as={`/components/${current}#Implementation`}
						href={`/components/[slug]#implementation`}
						passHref
					>
						<LinkText>Implementation</LinkText>
					</Link>
				</ListItem>
				<ListItem>
					<Link
						passHref
						as={`/components/${current}#Checklist`}
						href={`/components/[slug]#checklist`}
					>
						<LinkText>Checklist</LinkText>
					</Link>
				</ListItem>
			</List>
		</Container>
	);
}
