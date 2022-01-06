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
import Header from "~/components/Markdown/Components/headers";
import Sidebar from "~/components/Layout/Components/Sidebar";
import { getDocsListBySection } from "~/services";

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

const thisSection = "foundations";

export default function Page({ current, docs }) {
	const { resolvedTheme } = useTheme();

	return (
		<Layout>
			<Head>
				<title>WPDS - Assets Manager</title>
			</Head>
			<Sidebar
				docs={{
					root: "foundations",
					label: "foundations",
					files: docs,
				}}
				current={current}
				id="sidebar"
			/>
			<Content
				id="content"
				css={{
					color: "$primary",
				}}
			>
				<Header css={{ paddingBottom: "$100" }} as="h1">
					WPDS Assets Manager
				</Header>

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
					<Sandpack
						template="react"
						theme={resolvedTheme}
						files={{
							"/App.js": codeSample,
						}}
						customSetup={{
							dependencies: {
								"@washingtonpost/wpds-assets": "1.1.13",
								"@washingtonpost/wpds-ui-kit":
									"0.1.0-experimental.20",
							},
						}}
						options={{
							wrapContent: true,
						}}
					/>
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
									<VisuallyHidden>
										<Header as="h3">
											{Asset.replace("Svg", "")}
										</Header>
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
				<Header id="Logos" css={{ paddingBottom: "$100" }} as="h2">
					Logos
				</Header>
				<Box
					css={{
						display: "grid",
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
								</CopyToClipboard>
							);
						}
					})}
				</Box>
			</Content>
		</Layout>
	);
}

export const getStaticProps = async () => {
	const [docs] = [thisSection].map((section) =>
		getDocsListBySection(section)
	);

	return {
		props: {
			current: "/foundations/assets",
			docs,
		},
	};
};
