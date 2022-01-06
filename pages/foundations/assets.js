import React from "react";
import Layout from "~/components/Layout/WithSidebar";
import Head from "next/head";
import Content from "~/components/Layout/Components/Content";
import * as AllAssets from "@washingtonpost/wpds-assets/asset";
import {
	styled,
	theme,
	Icon,
	Box,
	VisuallyHidden,
} from "@washingtonpost/wpds-ui-kit";
import { paramCase } from "param-case";
import { Sandpack } from "@codesandbox/sandpack-react";
import "@codesandbox/sandpack-react/dist/index.css";
import { useTheme } from "next-themes";

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

const Heading = styled("h3", {
	marginBottom: "$100",
});

const AssetContainer = styled("article", {
	border: "1px solid $onPrimary",
	padding: "$100 $050",
	borderRadius: "$025",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	background: theme.colors.alpha50,
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
	padding: "$075 $100",
	backgroundColor: "$gray600",
	borderRadius: "$050",
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
				: theme.colors.alpha50,
		},
	});

	return <CopyButton onClick={copyToClipboard}>{children}</CopyButton>;
};

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

export default function Page() {
	const { resolvedTheme } = useTheme();

	return (
		<Layout noSidebar={true}>
			<Head>
				<title>WPDS - Assets Manager</title>
			</Head>
			<Content
				id="content"
				css={{
					color: "$primary",
				}}
			>
				<h1>WPDS Assets Manager</h1>
				<h2>Icons</h2>
				<Box
					css={{
						marginBottom: "$100",
					}}
				/>

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
									<VisuallyHidden>
										{Asset.replace("Svg", "")}
									</VisuallyHidden>
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
							</CopyToClipboard>
						);
					})}
				</Grid>

				<Box
					css={{
						marginBottom: "$200",
					}}
				/>

				<h2>Logos</h2>

				<Box
					css={{
						marginBottom: "$075",
					}}
				/>

				<Box
					css={{
						display: "grid",
						// grid cells should be 400 by 400
						gridTemplateColumns:
							"repeat(auto-fill, minmax(20%, 1fr))",
						gridGap: "$200",
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
								<Box
									css={{
										lineHeight: 0,
										border: "1px solid $onPrimary",
										background: theme.colors.alpha50,
										padding: "$100 $050",
										borderRadius: "$025",
										// center the content
										display: "flex",
										flexDirection: "column",
										justifyContent: "center",
										alignItems: "center",
										padding: "$200",
									}}
								>
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
								</Box>
							);
						}
					})}
				</Box>

				<Box
					css={{
						marginBottom: "$200",
					}}
				/>

				<p>
					`@washingtonpost/wpds-assets` are SVG React components. They
					are used to create icons, logos, and other visual assets.
					They are imported from the `@washingtonpost/wpds-assets`
					package. They should be paired with the Icon component as
					shown in the code sample below especially if they are for
					presentation only.
				</p>

				<p>
					New assets can be submitted for review by submitting a pull
					request here
					https://github.com/WPMedia/wpds-assets-manager/pulls. Please
					follow the contribution guidelines here:
					https://github.com/WPMedia/wpds-assets-manager#contributing
				</p>

				<h2>Component API</h2>
				<ul>
					<li>
						fill: <code>string</code> - the fill color of the SVG
					</li>
					<li>
						width: <code>string</code> - the width of the SVG
					</li>
					<li>
						height: <code>string</code> - the height of the SVG
					</li>
				</ul>

				<h2>How to install</h2>
				<CopyToClipboard
					codeToCopy={`npm install @washingtonpost/wpds-assets`}
				/>
				<CodeExample>
					npm install @washingtonpost/wpds-assets
				</CodeExample>

				<h2>Filling the Asset with a Color</h2>
				<Sandpack
					template="react"
					theme={resolvedTheme}
					files={{
						"/App.js": codeSample,
					}}
					customSetup={{
						dependencies: {
							"@washingtonpost/wpds-assets": "1.1.8",
							"@washingtonpost/wpds-ui-kit":
								"0.1.0-experimental.20",
						},
					}}
					options={{
						wrapContent: true,
					}}
				/>
			</Content>
		</Layout>
	);
}

export const getStaticProps = async ({ params }) => {
	return {
		props: {
			links: [],
		},
	};
};
