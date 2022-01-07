import React from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "~/components/Layout/WithSidebar";
import Content from "~/components/Layout/Components/Content";
import { getDocsListBySection } from "~/services";
import { styled, theme } from "@washingtonpost/wpds-ui-kit";

const Heading = styled("h1", {
	fontFamily: "$headline",
	color: "$primary",
	variants: {
		as: {
			h1: {
				fontSize: "$300",
				lineHeight: "$300",
				marginBottom: "$100",
			},
			h2: {
				fontFamily: "$subhead",
				fontSize: "$150",
				lineHeight: "$100",
			},
		},
	},
});

const Anchor = styled("a", {
	color: theme.colors.gray0,
	textDecoration: "none",
	borderBottom: "1px solid $gray0",
	display: "inline-block",
	marginBottom: "$050",
});

const Kicker = styled("div", {
	color: theme.colors.accessible,
	marginBottom: "$050",
});

const Card = styled("article", {
	border: "1px solid $subtle",
	borderRadius: "$050",
	px: "$150",
	py: "$100",
	marginBottom: "$150",
});

const Description = styled("p", {
	fontSize: "$125",
	lineHeight: "$150",
	color: "$accessible",
});

export default function Page({ docs, latestDocs }) {
	// create a "see all releases" toggle
	const [showAll, setShowAll] = React.useState(false);
	const [docsList, setDocsList] = React.useState(latestDocs);

	const toggleShowAll = (event) => {
		event.preventDefault();
		setShowAll((prev) => !prev);
		setDocsList(showAll ? latestDocs : docs);
	};

	return (
		<Layout>
			<Head>
				<title>WPDS - Blog</title>
			</Head>
			<div id="sidebar"></div>
			<Content id="content">
				<Heading as="h1">Blog</Heading>

				{docsList.map((doc) => (
					<Card key={doc.slug}>
						<Kicker>{doc.data.kicker}</Kicker>
						<Link href={doc.slug} forceHref passHref>
							<Anchor href={doc.slug}>
								<Heading as="h2">{doc.data.title}</Heading>
							</Anchor>
						</Link>
						<Description>{doc.data.description}</Description>
					</Card>
				))}

				{
					// show all button when docs is greater than latestDocs}
					docs.length > latestDocs.length && (
						<button onClick={toggleShowAll}>
							{showAll ? "See less" : "See all"} blog posts
						</button>
					)
				}
			</Content>
		</Layout>
	);
}

export const getStaticProps = async ({ params }) => {
	// const currentDate = new Date();
	const docs = getDocsListBySection("blog").sort((a, b) => {
		return new Date(a.data.publishDate) - new Date(b.data.publishDate);
	});
	// .filter((doc) => {
	// 	return new Date(doc.data.publishDate) <= currentDate;
	// });

	const latestDocs = docs.length > 8 ? docs.slice(0, 8) : docs;

	return {
		props: {
			docs,
			latestDocs,
		},
	};
};
