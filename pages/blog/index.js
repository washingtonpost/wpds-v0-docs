import React from "react";
import Head from "next/head";
import { getDocsListBySection, getNavigation } from "~/services";
import { Box, styled } from "@washingtonpost/wpds-ui-kit";
import { Header } from "~/components/Markdown/Components/headers";
import Link from "~/components/Markdown/Components/link";
import { P } from "~/components/Markdown/Styling";

const Masonry = styled("section", {
	width: "100%",
	display: "grid",
	gridTemplateColumns: "repeat(auto-fit, minmax($500, 1fr))",
	gridTemplateRows: "repeat(auto-fill, minmax($500, 1fr))",
	gridAutoFlow: "dense",
	gridGap: "$100",

	"& > *": {
		gridColumnEnd: "span 2",
	},

	"@sm": {
		display: "grid",
		gridTemplateColumns: "repeat(auto-fill, minmax(100%, 1fr))",
		gridGap: "$100",
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
		<>
			<Head>
				<title>WPDS - Blog</title>
			</Head>
			<Header as="h1">Blog</Header>
			<Box
				css={{
					marginBottom: "$200",
				}}
				aria-hidden={false}
			/>

			{collections.map((collection, index) => {
				return (
					<Box
						key={index}
						css={{
							display: "flex",
							flexDirection: "column",
						}}
					>
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
					</Box>
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
		</>
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

	const navigation = await getNavigation();

	return {
		props: {
			docs,
			latestDocs,
			collections,
			navigation,
		},
	};
};
