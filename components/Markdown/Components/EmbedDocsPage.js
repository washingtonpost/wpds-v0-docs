import { styled } from "@washingtonpost/wpds-ui-kit";

/**
 * create a component that renders an iframe embedding a storybook story
 * @param {string} componentName - the name of the story to embed in the iframe (e.g. ('button'))
 */
export default function EmbedDocsPage({ componentName, ...rest }) {
	const Story = styled("iframe", {
		aspectRatio: "1 / 1.125",
		width: "100%",
		borderRadius: "$025",
		border: "$100 solid $subtle",
		background: "transparent",
	});

	const hostname = "https://main--6197ecb0496d77003a9e85fd.chromatic.com";
	const pathname = `/iframe.html?id=${componentName}--play&viewMode=docs&singleStory=true`;
	const src = `${hostname}${pathname}`;

	return <Story src={src} {...rest} />;
}
