import { styled } from "@washingtonpost/wpds-ui-kit";

export default function EmbedControls({ componentName, ...rest }) {
	const Story = styled("iframe", {
		aspectRatio: "1 / 1",
		width: "100%",
		borderRadius: "$025",
		border: "$100 solid $subtle",
		background: "transparent",
	});

	const hostname = "https://main--6197ecb0496d77003a9e85fd.chromatic.com";
	const pathname = `/?path=/story/${componentName}--play&addonPanel=storybook/controls/panel&full=true&nav=false&full=true&singleStory=true&panel=bottom`;
	const src = `${hostname}${pathname}`;

	return <Story src={src} {...rest} />;
}
