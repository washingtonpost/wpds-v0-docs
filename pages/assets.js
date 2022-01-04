import React from "react";
import Layout from "~/components/Layout/WithSidebar";
import Head from "next/head";
import Content from "~/components/Layout/Components/Content";
import * as AllAssets from "@washingtonpost/wpds-assets/asset";
import { styled, theme, Icon } from "@washingtonpost/wpds-ui-kit";
import { paramCase } from "param-case";

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
				{copied ? "Copied!" : "Copy"}
			</CopyButton>
		</div>
	);
};

export default function Page() {
	return (
		<Layout noSidebar={true}>
			<Head>
				<title>WPDS - Assets</title>
			</Head>
			<Content
				id="content"
				css={{
					color: "$primary",
				}}
			>
				<h1>Assets</h1>
				<p>CTRL + F to search.</p>

				<h2>How to install</h2>
				<p>
					<code>
						<CodeExample>
							npm install @washingtonpost/wpds-assets
						</CodeExample>
					</code>
				</p>

				<h2>Filling the Asset with a Color</h2>
				<code>
					<CodeExample>{`
import { theme } from "@washingtonpost/wpds-ui-kit";
import Add from "@washingtonpost/wpds-assets/asset/add";

export const MyComponent = () => (
  <Icon label="Add to List" size="16">
    <Add fill={theme.colors.green100} />
  </Icon>
);
          `}</CodeExample>
				</code>
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
