import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";
import MDXStyling from "~/components/Markdown/Styling";
import { styled, theme } from "@washingtonpost/wpds-ui-kit";
import Header from "~/components/Typography/Headers";
import { getDocByPathName, getAllPathsBySection } from "~/services";
import { getNavigation } from "~/services/getNavigation";

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

const Description = styled("h2", {
	fontSize: "$150",
	lineHeight: "$150",
	color: theme.colors.accessible,
	fontWeight: "normal",
	marginBottom: "$100",
});

export default function Page({ source }) {
	return (
		<>
			<Head>
				<title>WPDS - {source.scope.title} | Release Notes</title>
			</Head>
			<>
				<Header
					css={{
						marginBottom: "$100",
					}}
				>
					{source.scope.title}
				</Header>
				<Description as="h2">{source.scope.description}</Description>
			</>
			<>
				<MDXRemote {...source} components={components} />
			</>
		</>
	);
}

export const getStaticProps = async ({ params }) => {
	const source = await getDocByPathName(`release-notes/${params.slug}`);

	const navigation = await getNavigation();

	return {
		props: {
			source,
			navigation,
		},
	};
};

export const getStaticPaths = async () => {
	const paths = await getAllPathsBySection("release-notes");

	return {
		paths,
		fallback: false,
	};
};
