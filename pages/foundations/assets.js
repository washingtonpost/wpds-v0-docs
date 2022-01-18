import React from "react";
import Head from "next/head";
import * as AllAssets from "@washingtonpost/wpds-assets/asset";
import { styled, theme, Icon, Box } from "@washingtonpost/wpds-ui-kit";
import { paramCase } from "param-case";
import { Sandpack } from "@codesandbox/sandpack-react";
import "@codesandbox/sandpack-react/dist/index.css";
import { useTheme } from "next-themes";
import Header from "~/components/Markdown/Components/headers";
import CustomLink from "~/components/Markdown/Components/link";
import { getNavigation } from "~/services/getNavigation";
import CustomSandpack from "~/components/Markdown/Components/Sandbox";

// if the componentName is in this array then don't map over it
const logos = [
	"voraciously",
	"amazon",
	"amazon-music",
	"apple-podcast",
	"apple",
	"by-the-way",
	"comments",
	"elections",
	"facebook-logo",
	"google-podcast",
	"olympics-dark",
	"olympics",
	"stitcher",
	"tooled-washington-post",
	"washington-post-magazine",
	"washington-post-white",
	"washington-post",
	"wp-mark-white",
	"wp-mark",
	"rss",
	"spotify",
	"google",
];

const AssetContainer = styled("article", {
	border: "1px solid $subtle",
	padding: "$100 $050",
	borderRadius: "$025",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	background: theme.colors.subtle,

	// highlight AssetContainer when CTRL + F is used
	"&:focus": {
		outline: "2px solid $signal",
	},
});

/** create a masonary grid layout */
const Grid = styled("section", {
	display: "grid",
	gridTemplateColumns: "repeat(auto-fill, minmax($400, 1fr))",
	gridGap: "$200",
	margin: "0 auto",
	maxWidth: "100%",
	width: "100%",
});

/** create a code example with a scrollbar */
const CodeExample = styled("pre", {
	overflow: "auto",
	color: "$gray80",
	fontSize: "$087",
	lineHeight: "$125",
});

/** create a component that lets the user copy a code example to their clipboard */
const CopyToClipboard = ({ codeToCopy, children }) => {
	const [copied, setCopied] = React.useState(false);
	const copyToClipboard = () => {
		const textArea = document.createElement("textarea");
		textArea.value = codeToCopy;

		document.body.appendChild(textArea);
		textArea.select();
		document.execCommand("copy");
		textArea.remove();
		setCopied(true);
	};

	// reset the copied state after a second
	React.useEffect(() => {
		const timeout = setTimeout(() => {
			setCopied(false);
		}, 1000);
		return () => clearTimeout(timeout);
	}, [copied]);

	const CopyButton = styled("button", {
		cursor: "pointer",
		// remove default button styles
		border: "none",
		padding: "0",
		margin: "0",
		background: "none",

		[`& ${AssetContainer}`]: {
			backgroundColor: copied
				? theme.colors.success
				: theme.colors.subtle,
		},
	});

	return (
		<CopyButton onClick={copyToClipboard} title="Click to copy code">
			{children}
		</CopyButton>
	);
};

const P = styled("p", {
	fontSize: "$100",
	paddingBottom: "$050",
	color: "$accessible",
});

const codeSample = `import { theme, Icon, globalStyles } from "@washingtonpost/wpds-ui-kit";
import Add from "@washingtonpost/wpds-assets/asset/add";

export default function App() {
	globalStyles();
	return (
		<Icon label="Add to List" size="32">
			<Add fill={theme.colors.accessible} />
		</Icon>
	)
}`;

export default function Page({ current, navigation }) {
	const { resolvedTheme } = useTheme();

	return (
		<>
			<Head>
				<title>WPDS - Assets Manager</title>
			</Head>
			<>
				<Header css={{ paddingBottom: "$100" }} as="h1">
					WPDS Assets Manager
				</Header>

				<Header css={{ paddingBottom: "$100" }} as="h2">
					Figma design
				</Header>

				<P>
					All of our icons are design to share a similar visual
					language. The icons utilize a single path to create the
					glyph of the icon. To use our icons in your designs enable
					WPDS-Asset-Manager library in Figma to have access to the
					components. Icons color fill should follow our guidance on
					color.{" "}
					<CustomLink
						href="https://www.figma.com/file/LA6qKUukk8v3YkkuKq6IC6/%F0%9F%96%BC--WPDS-Asset-Manager"
						useSignal
					>
						Open in Figma
					</CustomLink>
				</P>

				<Box
					css={{
						marginBottom: "$200",
					}}
				/>

				<Header
					id="React components"
					css={{ paddingBottom: "$100" }}
					as="h2"
				>
					React components
				</Header>
				<Box
					css={{
						border: "1px solid $onPrimary",
						borderRadius: "$025",
					}}
				>
					<Header
						id="how-to-install"
						css={{ paddingBottom: "$100" }}
						as="h3"
					>
						How to install
					</Header>
					<CopyToClipboard
						codeToCopy={`npm install @washingtonpost/wpds-assets`}
					>
						<CodeExample>
							npm install @washingtonpost/wpds-assets
						</CodeExample>
					</CopyToClipboard>

					<Box
						css={{
							marginBottom: "$100",
						}}
					/>

					<Header
						id="code-example"
						css={{ paddingBottom: "$100" }}
						as="h3"
					>
						Import the icons into your React project
					</Header>
					<CustomSandpack withPreview={true}>
						{codeSample}
					</CustomSandpack>
				</Box>
				<Box
					as="hr"
					css={{
						display: "block",
						height: "0",
						color: theme.colors.subtle,
						border: "none",
						borderBottom: "1px solid currentColor",
						marginTop: "$200",
						marginBottom: "$200",
					}}
				/>
				<Header id="Icons" css={{ paddingBottom: "$100" }} as="h2">
					Icons
				</Header>
				<Grid>
					{Object.keys(AllAssets).map((Asset) => {
						const Component = AllAssets[Asset];
						const componentName = paramCase(Asset);

						if (logos.includes(componentName)) {
							return null;
						}

						const importExample = `import ${Asset.replace(
							"Svg",
							""
						)} from "@washingtonpost/wpds-assets/asset/${componentName.replace(
							"svg",
							""
						)}";`;

						return (
							<CopyToClipboard
								key={Asset}
								codeToCopy={importExample}
							>
								<AssetContainer>
									<Box
										css={{
											lineHeight: 0,
										}}
									>
										<Icon
											label={`Asset for ${Asset.replace(
												"Svg",
												""
											)}`}
											size="32"
										>
											<Component
												fill={theme.colors.primary}
											/>
										</Icon>
									</Box>
								</AssetContainer>
								<Header
									as="h6"
									css={{
										width: "100%",
										marginTop: "$025",
									}}
								>
									{Asset.replace("Svg", "")}
								</Header>
							</CopyToClipboard>
						);
					})}
				</Grid>
				<Box
					css={{
						marginBottom: "$200",
					}}
				/>
				<Header id="Logos" css={{ paddingBottom: "$100" }} as="h2">
					Logos
				</Header>
				<Box
					css={{
						display: "grid",
						gridTemplateColumns:
							"repeat(auto-fit, minmax(200px, 1fr))",
						gridGap: "$200",
						// auto equal height cells
						[`${AssetContainer}`]: {
							height: "$500",
							px: "$100",
							background: theme.colors.subtle,
						},
					}}
				>
					{Object.keys(AllAssets).map((Asset) => {
						const Component = AllAssets[Asset];
						const componentName = paramCase(Asset);

						const importExample = `import ${Asset.replace(
							"Svg",
							""
						)} from "@washingtonpost/wpds-assets/asset/${componentName.replace(
							"svg",
							""
						)}";`;

						if (logos.includes(componentName)) {
							return (
								<CopyToClipboard
									key={Asset}
									codeToCopy={importExample}
								>
									<AssetContainer>
										<Icon
											label={`Asset for ${Asset.replace(
												"Svg",
												""
											)}`}
											size=""
										>
											<Component
												fill={theme.colors.primary}
											/>
										</Icon>
									</AssetContainer>
									<Header
										as="h6"
										css={{
											marginTop: "$025",
										}}
									>
										{Asset.replace("Svg", "")}
									</Header>
								</CopyToClipboard>
							);
						}
					})}
				</Box>
			</>
		</>
	);
}

export const getStaticProps = async () => {
	const navigation = await getNavigation();

	return {
		props: {
			current: "/foundations/assets",
			navigation,
		},
	};
};
