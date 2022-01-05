import React from "react";
import Layout from "~/components/Layout/WithSidebar";
import Head from "next/head";
import Content from "~/components/Layout/Components/Content";
import * as AllAssets from "@washingtonpost/wpds-assets/asset";
import { styled, theme, Icon } from "@washingtonpost/wpds-ui-kit";
import { paramCase } from "param-case";
import { Sandpack } from "@codesandbox/sandpack-react";
import "@codesandbox/sandpack-react/dist/index.css";
import { useTheme } from "next-themes";

const AssetContainer = styled("article", {
	border: "1px solid $onPrimary",
	background: theme.colors.alpha25,
	padding: "$100",
	borderRadius: "$025",
	position: "relative",
	overflow: "hidden",
});

/** create a masonary grid layout */
const Grid = styled("section", {
	display: "grid",
	gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
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

const Story = styled("iframe", {
	aspectRatio: "1 / 1",
	maxHeight: "300px",
	width: "100%",
	borderRadius: "$025",
	border: "$100 solid $subtle",
	background: "transparent",
});

/** create a component that lets the user copy a code example to their clipboard */
const CopyToClipboard = ({ codeToCopy }) => {
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
		}, 3000);
		return () => clearTimeout(timeout);
	}, [copied]);

	const CopyButton = styled("button", {
		backgroundColor: copied
			? theme.colors.onSecondary
			: theme.colors.onPrimary,
		color: copied ? theme.colors.success : theme.colors.primary,
		fontWeight: "bold",
		border: "none",
		padding: "$075",
		borderRadius: "$050",
		cursor: "pointer",
		position: "absolute",
		top: "$075",
		right: "$075",
	});

	return (
		<div>
			<CopyButton onClick={copyToClipboard}>
				{copied ? "Copied!" : "Copy Code"}
			</CopyButton>
		</div>
	);
};

const codeSample = `import { theme, Icon } from "@washingtonpost/wpds-ui-kit";
import Add from "@washingtonpost/wpds-assets/asset/add";

export default function App() {
	return (
		<Icon label="Add to List" size="32">
			<Add fill={theme.colors.primary} />
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
				<h1>Assets Manager</h1>
				<p>CTRL + F to search.</p>

				<p>
					`@washingtonpost/wpds-assets` are SVG React components. They
					are used to create icons, logos, and other visual assets.
					They are imported from the `@washingtonpost/wpds-assets`
					package.
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
						showNavigator: false,
					}}
				/>
				<Grid>
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

						return (
							<AssetContainer key={Asset}>
								<h3>{Asset.replace("Svg", "")}</h3>
								<CopyToClipboard codeToCopy={importExample} />
								<Icon
									label={`Asset for ${Asset.replace(
										"Svg",
										""
									)}`}
									size=""
								>
									<Component fill={theme.colors.primary} />
								</Icon>
							</AssetContainer>
						);
					})}
				</Grid>
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
