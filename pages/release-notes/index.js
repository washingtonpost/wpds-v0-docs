import React from "react";
import Head from "next/head";
import Layout from "~/components/Layout/WithSidebar";
import Content from "~/components/Layout/Components/Content";
import { getDocsListBySection } from "~/services";
import { styled, theme } from "@washingtonpost/wpds-ui-kit";
import { P } from "~/components/Markdown/Styling";
import Header from "~/components/Typography/Headers";
import Link from "~/components/Markdown/Components/link";

const Card = styled("article", {
	border: "1px solid $subtle",
	borderRadius: "$050",
	px: "$150",
	paddingTop: "$100",
	paddingBottom: "$100",
	marginBottom: "$150",
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
				<title>WPDS - Release Notes</title>
			</Head>
			<div id="sidebar"></div>
			<Content id="content">
				<Header as="h1">Release Notes</Header>

				{docsList.map((doc) => (
					<Card key={doc.slug}>
						<Link href={doc.slug} forceHref passHref>
							<Header
								as="h2"
								css={{
									marginBottom: "$050",
								}}
							>
								{doc.data.title}
							</Header>
						</Link>
						<P>{doc.data.description}</P>
					</Card>
				))}

				{
					// show all button when docs is greater than latestDocs}
					docs.length > latestDocs.length && (
						<button onClick={toggleShowAll}>
							{showAll ? "See less" : "See all"} releases
						</button>
					)
				}
			</Content>
		</Layout>
	);
}

export const getStaticProps = async ({ params }) => {
	const currentDate = new Date();
	const docs = getDocsListBySection("release-notes")
		.sort((a, b) => {
			return new Date(a.data.publishDate) - new Date(b.data.publishDate);
		})
		.filter((doc) => {
			return new Date(doc.data.publishDate) <= currentDate;
		});

	const latestDocs = docs.length > 8 ? docs.slice(0, 8) : docs;

	return {
		props: {
			latestDocs,
			docs,
		},
	};
};
