import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";
import { styled } from "@washingtonpost/wpds-ui-kit";
import MDXStyling from "~/components/Markdown/Styling";
import Header from "~/components/Typography/Headers";
import {
	getDocByPathName,
	getAllPathsBySection,
	getNavigation,
} from "~/services";

const SECTION = "blog";

const CategoryHeader = styled("h4", {
	borderRadius: "$025",
	display: "inline-flex",
	backgroundColor: "$green300",
	border: "1px solid currentColor",
	padding: "$025 $050",
	color: "$green50",
	fontWeight: "normal",
});

const components = {
	...MDXStyling,
	CategoryHeader,
};

export default function Page({ source }) {
	return (
		<>
			<Head>
				<title>WPDS - {source.scope.title} | Blog</title>
			</Head>
			<>
				<Header
					as="h1"
					css={{
						marginBottom: "$100",
					}}
				>
					{source.scope.title}
				</Header>
				<Header
					as="h2"
					css={{
						marginBottom: "$100",
					}}
				>
					{source.scope.Head}
				</Header>
			</>
			<>
				<MDXRemote {...source} components={components} />
			</>
		</>
	);
}

export const getStaticProps = async (response) => {
	const source = await getDocByPathName(`${SECTION}/${response.params.slug}`);
	const navigation = await getNavigation();

	return {
		props: {
			source,
			navigation,
		},
	};
};

export const getStaticPaths = async () => {
	const paths = await getAllPathsBySection(SECTION);

	return {
		paths,
		fallback: false,
	};
};
