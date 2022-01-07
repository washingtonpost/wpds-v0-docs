import React from "react";
import Head from "next/head";
import Layout from "~/components/Layout/WithSidebar";
import Content from "~/components/Layout/Components/Content";
import { getDocsListBySection } from "~/services";
import { Box, styled, theme } from "@washingtonpost/wpds-ui-kit";
import { Header } from "~/components/Markdown/Components/headers";
import Link from "~/components/Markdown/Components/link";
import { P } from "~/components/Markdown/Styling";

// create a masonary grid of cards
const Masonry = styled("section", {
	display: "grid",
	gridTemplateColumns: "repeat(4, 1fr)",
	gridGap: "$100",
	gridAutoFlow: "dense",
	"@md": {
		gridTemplateColumns: "repeat(auto-fill, minmax(100%, 1fr))",
	},
	"@sm": {
		gridTemplateColumns: "repeat(auto-fill, minmax(100%, 1fr))",
	},
});

export default function Page({ docs, latestDocs, collections }) {
	// create a "see all releases" toggle
	const [showAll, setShowAll] = React.useState(false);
	const [docsList, setDocsList] = React.useState(latestDocs);

	const toggleShowAll = (event) => {
		event.preventDefault();
		setShowAll((prev) => !prev);
		setDocsList(showAll ? latestDocs : docs);
	};

	return (
		<Layout sidebar={false}>
			<Head>
				<title>WPDS - Blog</title>
			</Head>
			<Content id="content">
				<Header as="h1">Blog</Header>
				<Box
					css={{
						marginBottom: "$200",
					}}
					aria-hidden={false}
				/>

				{collections.map((collection, index) => {
					return (
						<div key={index}>
							<Header
								as="h2"
								css={{
									marginBottom: "$100",
								}}
							>
								{collection.kicker}
							</Header>
							<Masonry key={index}>
								{collection.docs.map((doc) => {
									return (
										<Link
											href={doc.slug}
											key={doc.slug}
											css={{
												border: "1px solid $subtle",
												borderRadius: "$050",
												px: "$150",
												paddingBottom: "$100",
												marginBottom: "$150",
											}}
										>
											<article>
												<Header as="h3">
													{doc.data.title}
												</Header>

												<P>{doc.data.description}</P>
											</article>
										</Link>
									);
								})}
							</Masonry>
							<Box
								css={{
									marginBottom: "$200",
								}}
								aria-hidden={false}
							/>
						</div>
					);
				})}

				{/* {
					// show all button when docs is greater than latestDocs}
					docs.length > latestDocs.length && (
						<button onClick={toggleShowAll}>
							{showAll ? "See less" : "See all"} blog posts
						</button>
					)
				} */}
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

	// sort docs into collections by doc.data.kicker property
	const collections = [
		// create a collection for each doc.data.kicker property and put their docs in it
		...docs.reduce((acc, doc) => {
			const kicker = doc.data.kicker;
			const collection = acc.find(
				(collection) => collection.kicker === kicker
			);
			if (collection) {
				collection.docs.push(doc);
			} else {
				acc.push({
					kicker,
					docs: [doc],
				});
			}
			return acc;
		}, []),
		{
			kicker: "Latest",
			docs: latestDocs,
		},
	];

	return {
		props: {
			docs,
			latestDocs,
			collections,
		},
	};
};
