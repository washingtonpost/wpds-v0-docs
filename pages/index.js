import * as React from "react";
import Link from "next/link";
import Content from "~/components/Layout/Components/Content";
import { NavigationBar } from "~/components/NavigationBar";
import { getDocsListBySection } from "~/services";
import Layout from "~/components/Layout/WithSidebar";

export default function Index({ posts, docs, foundations, release_notes }) {
	return (
		<Layout>
			<div id="sidebar"></div>
			<Content id="content">
				<h1>Home Page</h1>

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
				<Link href="/quick-links" forceHref>
					<a>
						<h3>Quick Links</h3>
					</a>
				</Link>
				<Link href="/foundations/assets" forceHref>
					<a>
						<h3>Assets</h3>
					</a>
				</Link>
			</Content>
		</Layout>
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
