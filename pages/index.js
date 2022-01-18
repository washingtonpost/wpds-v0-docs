import * as React from "react";
import Link from "next/link";
import { NavigationBar } from "~/components/NavigationBar";
import { getAllDocs } from "~/services";
import { Box } from "@washingtonpost/wpds-ui-kit";

export default function Index({ posts }) {
	return (
		<Box
			css={{
				display: "grid",
				gridTemplateColumns: "repeat(auto-fill, minmax(100%, 1fr))",
				gridGap: "$100",
				gridAutoFlow: "dense",
				px: "$100",
				maxWidth: "1028px",
				margin: "0 auto",
				color: "$primary",

				a: {
					color: "$signal",
					lineHeight: "$150",
				},
			}}
		>
			<Box
				css={{
					paddingTop: "$400",
				}}
			></Box>
			<h1>Home Page</h1>
			<p>
				This is a temporary landing page. Product design is working on a
				really cool landing page for us.
			</p>

			<h2>Table of contents</h2>

			<h3>Posts</h3>
			<ul>
				{posts.map((post) => (
					<li key={post.slug}>
						<Link href={post.slug} forceHref>
							<a>{post.data.title}</a>
						</Link>
					</li>
				))}
			</ul>
		</Box>
	);
}

export async function getStaticProps() {
	const posts = await getAllDocs();

	return {
		props: { posts },
	};
}

Index.getLayout = function getLayout(page, pageProps) {
	return (
		<div>
			<NavigationBar isOpen={true} />
			{page}
		</div>
	);
};
