import { MDXRemote } from "next-mdx-remote";
import dynamic from "next/dynamic";
import { useState } from "react";
import Head from "next/head";
import { styled, theme } from "@washingtonpost/wpds-ui-kit";
import MDXStyling from "~/components/Markdown/Styling";
import Layout from "~/components/Layout/WithSidebar";
import Sidebar from "~/components/Layout/Components/Sidebar";
import Content from "~/components/Layout/Components/Content";
import Header from "~/components/Typography/Headers";
import TableofContents from "~/components/Markdown/Components/tableofcontents";
import {
	getAllPathsBySection,
	getDocByPathName,
	getDocsListBySection,
} from "~/services";

import { default as EmbedDocsPage } from "~/components/Markdown/Components/EmbedDocsPage";
import { default as EmbedControls } from "~/components/Markdown/Components/EmbedControls";
import { default as EmbedStory } from "~/components/Markdown/Components/EmbedStory";

const components = {
	...MDXStyling,
	EmbedStory,
	EmbedControls,
	EmbedDocsPage,
	Head,
};

const P = styled("p", {
	color: "$accessible",
});

export default function Page({ current, docs, source, docgen, propTable }) {
	const [toggleSideBar, setToggleSideBar] = useState(false);
	return (
		<Layout>
			<Head>
				<title>WPDS - {source.scope.title} | Components</title>
			</Head>
			<Sidebar
				showSidebar={toggleSideBar}
				docs={{ root: thisSection, label: thisSection, files: docs }}
				current={current}
				id="sidebar"
			/>
			<Content id="content" useShortVersion>
				<div className="post-header">
					<Header>{source.scope.title}</Header>
					{source.scope.description && (
						<P className="description">
							{source.scope.description}
						</P>
					)}
					<TableofContents current={current} />
				</div>

				<MDXRemote {...source} components={components} />
			</Content>
		</Layout>
	);
}

const thisSection = "components";

export const getStaticProps = async ({ params }) => {
	const source = await getDocByPathName(`${thisSection}/${params.slug}`);

	const [docs] = [thisSection].map((section) =>
		getDocsListBySection(section)
	);

	// const docgen = getDocFromComponent(source.scope.component);

	// const propTable = Object.entries(docgen[0].props).map(([key, value]) => {
	//   return value;
	// });

	// console.log(propTable);

	return {
		props: {
			current: params.slug,
			thisSection,
			docs,
			source,
			// propTable
		},
	};
};

export const getStaticPaths = async () => {
	const paths = await getAllPathsBySection(thisSection);

	return {
		paths,
		fallback: false,
	};
};
