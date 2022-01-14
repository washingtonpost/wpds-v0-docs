import * as React from "react";
import Link from "next/link";
import { NavigationBar } from "~/components/NavigationBar";
import { getDocsListBySection } from "~/services";
import { Box } from "@washingtonpost/wpds-ui-kit";

export default function Index({ posts, docs, foundations, release_notes }) {
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

			<h3>Blog Posts</h3>
			<ul>
				{posts.map((post) => (
					<li key={post.slug}>
						<Link href={post.slug} forceHref>
							<a>{post.data.title}</a>
						</Link>
					</li>
				))}
			</ul>
			<h3>Component Docs</h3>
			<ul>
				{docs.map((post) => (
					<li key={post.slug}>
						<Link href={post.slug} forceHref>
							<a>{post.data.title}</a>
						</Link>
					</li>
				))}
			</ul>
			<h3>Foundations</h3>
			<ul>
				{foundations.map((post) => (
					<li key={post.slug}>
						<Link href={post.slug} forceHref>
							<a>{post.data.title}</a>
						</Link>
					</li>
				))}
			</ul>
			<h3>Release Notes</h3>
			<ul>
				{release_notes.map((post) => (
					<li key={post.slug}>
						<Link href={post.slug} forceHref>
							<a>{post.data.title}</a>
						</Link>
					</li>
				))}
			</ul>
			<Link href="/foundations/assets" forceHref>
				<a>
					<h3>Assets</h3>
				</a>
			</Link>
		</Box>
	);
}

export function getStaticProps() {
	const [posts, docs, foundations, release_notes] = [
		"blog",
		"components",
		"foundations",
		"release-notes",
	].map((section) => getDocsListBySection(section));

	return { props: { posts, docs, foundations, release_notes } };
}

Index.getLayout = function getLayout(page, pageProps) {
	return (
		<div>
			<NavigationBar />
			{page}
		</div>
	);
};
