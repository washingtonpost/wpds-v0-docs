import { MDXRemote } from "next-mdx-remote";
import dynamic from "next/dynamic";
import { useState } from "react";
import Head from "next/head";
import { styled } from "@washingtonpost/wpds-ui-kit";
import MDXStyling from "~/components/Markdown/Styling";
import TokenTable from "~/components/Markdown/Components/tokenTable";
import Layout from "~/components/Layout/WithSidebar";
import Sidebar from "~/components/Layout/Components/Sidebar";
import Content from "~/components/Layout/Components/Content";
import Header from "~/components/Typography/Headers";

import {
	getAllPathsBySection,
	getDocByPathName,
	getDocsListBySection,
} from "~/services";

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
	...MDXStyling,
	TokenTable: TokenTable,
	// Custom components go here
	CustomComponent: dynamic(() => import("~/components/Typography/Headers")),
	Head,
};
const P = styled("p", {
	color: "$accessible",
});

export default function Page({ current, navigation, source }) {
	const [toggleSideBar, setToggleSideBar] = useState(false);
	return (
		<Layout>
			<Sidebar
				showSidebar={toggleSideBar}
				navigation={navigation}
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
				</div>
				<MDXRemote {...source} components={components} />
			</Content>
		</Layout>
	);
}

const thisSection = "foundations";

export const getStaticProps = async ({ params }) => {
	const source = await getDocByPathName(`${thisSection}/${params.slug}`);

	const [foundationDocs] = ["foundations"].map((section) =>
		getDocsListBySection(section)
	);

	const [componentDocs] = ["components"].map((section) =>
		getDocsListBySection(section)
	);

	return {
		props: {
			current: params.slug,
			navigation: [
				{
					category: "Foundations",
					isCurrent: true,
					docs: foundationDocs,
				},
				{
					category: "Components",
					docs: componentDocs,
				},
			],
			source,
		},
	};
};

export const getStaticPaths = async () => {
	const paths = await getAllPathsBySection(thisSection);

	const removeAssetsPage = paths.filter(
		(path) => path.params.slug !== "assets"
	);

	return {
		paths: removeAssetsPage,
		fallback: false,
	};
};
