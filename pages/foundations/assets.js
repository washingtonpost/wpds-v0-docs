import React, { useEffect, useState } from "react";
import Head from "next/head";
import * as AllAssets from "@washingtonpost/wpds-assets/asset";
import {
  styled,
  keyframes,
  theme,
  Icon,
  Box,
} from "@washingtonpost/wpds-ui-kit";
import { paramCase } from "param-case";
import "@codesandbox/sandpack-react/dist/index.css";
import { useTheme } from "next-themes";
import Header from "~/components/Markdown/Components/headers";
import CustomLink from "~/components/Markdown/Components/link";
import { List, ListItem } from "~/components/Markdown/Components/list";
import CopyToClipboard from "~/components/Markdown/Components/CopyToClipBoard";
import { getNavigation } from "~/services/getNavigation";
import CustomSandpack from "~/components/Markdown/Components/Sandbox";
import Container from "~/components/Markdown/Components/container";
import Bookmark from "@washingtonpost/wpds-assets/asset/bookmark";
import Play from "@washingtonpost/wpds-assets/asset/play";
import Email from "@washingtonpost/wpds-assets/asset/email";
import Article from "@washingtonpost/wpds-assets/asset/article";
import Globe from "@washingtonpost/wpds-assets/asset/globe";
import Image from "@washingtonpost/wpds-assets/asset/image";
import InlineSVG from "~/components/Markdown/Components/inlineSVG";

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

const HR = styled("hr", {
  borderStyle: "none",
  backgroundColor: "$subtle",
  height: "1px",
  width: "100%",
  margin: "$100 0",
});

const AssetContainer = styled("button", {
  border: "1px solid $subtle",
  padding: "$100 $050",
  borderRadius: "$025",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: theme.colors.gray500,
  "&:hover": {
    backgroundColor: theme.colors.gray300,
  },
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

  "@sm": {
    gridTemplateColumns: "1fr",
    gridGap: "$100",
  },
});

/** create a code example with a scrollbar */
const CodeExample = styled("pre", {
  overflowX: "auto",
  color: theme.colors.accessible,
  fontSize: "$087",
  lineHeight: "$125",
  "@sm": {
    paddingLeft: "$050",
    paddingBottom: "$050",
    // style the scrollbar
    "&::-webkit-scrollbar": {
      width: "$087",
      height: "calc($087 / 2)",
      backgroundColor: theme.colors.subtle,
    },
    // style the scrollbar handle
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: theme.colors.accessible,
      borderRadius: "$125",
    },
    // style the scrollbar handle on hover
    "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: theme.colors.accessible,
    },
  },
});

const P = styled("p", {
  fontSize: "$100",
  paddingBottom: "$050",
  color: theme.colors.accessible,
});

const codeSample = `import { theme, Icon } from "@washingtonpost/wpds-ui-kit";
import Add from "@washingtonpost/wpds-assets/asset/add";

export default function Example() {
	return (
		<Icon label="Add to List" size="32">
			<Add fill={theme.colors.accessible} />
		</Icon>
	)
}`;

export default function Page({ current, navigation }) {
  const { resolvedTheme } = useTheme();
  const [ShowCopyOSN, setShowCopyOSN] = useState(false);
  useEffect(() => {
    if (ShowCopyOSN) {
      window.alert("Code copied");
      setTimeout(() => setShowCopyOSN(false), 100);
    }
  }, [ShowCopyOSN]);
  function handleCopy(importExample) {
    navigator.clipboard.writeText(`${importExample}`);
    setShowCopyOSN(true);
  }
  return (
    <>
      <Head>
        <title>WPDS - Assets Manager</title>
      </Head>
      <>
        <Header css={{ paddingBottom: "$100" }} as="h1">
          WPDS Assets Manager
        </Header>
        <P>
          The asset manager is an independent package that allows for more
          streamlined management of our assets. WPDS-Asset-Manager, also known
          as WAM, manages all assets as raw SVG files.
        </P>
        <Header as="h3">Table of contents</Header>
        <List>
          <ListItem>
            <CustomLink href={"/foundations/assets#Getting_started"}>
              Getting started
            </CustomLink>
          </ListItem>
          <ListItem>
            <CustomLink href={"/foundations/assets#Design_principles"}>
              Design principles
            </CustomLink>
          </ListItem>
          <ListItem>
            <CustomLink href={"/foundations/assets#Grid_and_keyline_shapes"}>
              Grid and keyline shapes
            </CustomLink>
          </ListItem>
          <ListItem>
            <CustomLink href={"/foundations/assets#Contributing"}>
              Contributing
            </CustomLink>
          </ListItem>
          <ListItem>
            <CustomLink href={"/foundations/assets#Icons"}>Icons</CustomLink>
          </ListItem>
          <ListItem>
            <CustomLink href={"/foundations/assets#Logos"}>Logos</CustomLink>
          </ListItem>
        </List>
        <HR />
        <Header css={{ paddingBottom: "$100" }} as="h2">
          Getting started
        </Header>
        <Header as="h3">How to use in figma</Header>
        <P>
          To use WAM, please enable the{" "}
          <CustomLink
            href="https://www.figma.com/file/LA6qKUukk8v3YkkuKq6IC6/%F0%9F%96%BC--WPDS-Asset-Manager"
            useSignal
          >
            WPDS-Asset-Manager
          </CustomLink>{" "}
          in your libraries to gain access to all the icon glyphs and the logos.
          Please note if you are looking to use the icon as a component, we
          recommend using our icon component.
        </P>
        <Header as="h3">How to install</Header>
        <P>Note: WAM requires React to adopt into your project.</P>
        <CopyToClipboard
          css={{
            padding: "$050",
            marginBottom: "$100",
            color: theme.colors.accessible,
            backgroundColor: theme.colors.gray500,
          }}
          codeToCopy={`npm install @washingtonpost/wpds-assets`}
        >
          <CodeExample css={{ width: "100" }}>
            npm install @washingtonpost/wpds-assets
          </CodeExample>
        </CopyToClipboard>
        <CustomSandpack>{codeSample}</CustomSandpack>
        <HR css={{ marginTop: "$200" }} />
        <Header as="h2">Design principles</Header>
        <Header as="h3">Visual style</Header>
        <P>
          The visual style of our icon set uses minimal lines and geometries. As
          a result, our icons use 1px lines and basic shapes to represent the
          glyph. The corners of our icons are sharp and rarely filled. The
          majority of our icon's geometry uses no fill. Still, when an icon has
          a fill, it is tied to a toggle state or required visual weight to
          satisfy hierarchy in the instances that they are.
        </P>
        <Container>
          <Box
            css={{
              minWidth: 250,
              minHeight: 100,
              alignItems: "center",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <Icon size="24" label="bookmark">
              <Bookmark fill={theme.colors.primary} />
            </Icon>
            <Icon size="24" label="bookmark">
              <Play fill={theme.colors.primary} />
            </Icon>
            <Icon size="24" label="bookmark">
              <Email fill={theme.colors.primary} />
            </Icon>
            <Icon size="24" label="bookmark">
              <Article fill={theme.colors.primary} />
            </Icon>
            <Icon size="24" label="bookmark">
              <Globe fill={theme.colors.primary} />
            </Icon>
            <Icon size="24" label="bookmark">
              <Image fill={theme.colors.primary} />
            </Icon>
          </Box>
        </Container>
        <Header as="h3">Other assets</Header>
        Other assets like logos do not follow any principle other than approved
        brand guidelines. Assets need to be clear in what they represent and
        have guidance around their use.
        <Box
          css={{
            marginBottom: "$100",
          }}
        />
        <HR />
        <Header as="h2">Grid and keyline shapes</Header>
        <Header as="h3">Base size</Header>
        <P>
          There are four keyline shapes an icon can have as a base. All of the
          shapes require a 1 px padding on all sides.
        </P>
        <Container>
          <InlineSVG
            alt="Image of different sized icons labeled from left to right 16px 24px 32px"
            path="/img/foundations/WAM/sizes.svg"
            width={183}
            height={85}
          />
        </Container>
        <Header as="h3">Keyline shapes</Header>
        <P>
          There are four keyline shapes an icon can have as a base. All of the
          shapes require a 1 px padding on all sides.
        </P>
        <Container>
          <InlineSVG
            alt="Image of the different types to be used as a base keyline shape"
            path="/img/foundations/WAM/keyline.svg"
            width={330}
            height={360}
          />
        </Container>
        <List as="ol">
          <ListItem>Square</ListItem>
          <ListItem>Circle</ListItem>
          <ListItem>Rectangle - Vertical</ListItem>
          <ListItem>Rectangle - Horizontal</ListItem>
        </List>
        <HR />
        <Header as="h2">Contributing</Header>
        <P>
          For every submission, we require a review of the guideline checklist
          and follow the approval process. It will save you a lot of time before
          creating an icon to submit. So please review the following:
        </P>
        <List css={{ marginLeft: "$100" }} as="ol">
          <ListItem>
            All icons are unique and not a repeat of any existing icons. Please
            review our current icon set and double-check if there are any
            conflicts.
          </ListItem>
          <ListItem>Icons adhere to our Design principles.</ListItem>
          <ListItem>Icons work across all devices and platforms.</ListItem>
          <ListItem>
            Icons should be understandable by a global audience regardless of
            nationality, language, or device preference.
          </ListItem>
        </List>
        <Header as="h3">Making an icon</Header>
        <P>
          You can create the icon in any tool of your preference. There are a
          few things to consider & required when creating and designing an icon.
          They are as follow:
        </P>
        <List css={{ marginLeft: "$100" }} as="ol">
          <ListItem>
            Avoid using the line tool, and use the rectangle tool to avoid half
            pixels.
          </ListItem>
          <ListItem>
            Consider turning on pixel snapping if that is capable in your device
            of choice.{" "}
          </ListItem>
          <ListItem>
            Never use center borders as they create half pixels.{" "}
          </ListItem>
          <ListItem>Consider converting lines to outline paths.</ListItem>
          <ListItem>
            Ungroup icon layers and have the icon be the topmost layer.
          </ListItem>
          <ListItem>
            Ensure that the SVG file exports with a title that does not conflict
            with an existing icon name.
          </ListItem>
          <ListItem>Must use one of our keyline shapes.</ListItem>
          <ListItem>Combine all shapes and paths when possible.</ListItem>
        </List>
        <Header as="h4">Production ready</Header>
        <P>
          To be considered production-ready, all icon proposals must be an SVG
          file. Any icons that fail to meet the guidelines will be rejected and
          require a resubmission unless otherwise noted.
        </P>
        <Header as="h3">Approval process</Header>
        <P>
          Icons submitted to WAM must go through an approval process by WPDS.
          The process begins when a proposal has been made on our #WPDS slack
          channel or to our email WPDS@washpost.com. After receiving a proposal,
          it will undergo a review by our team. The approval of icons can take
          between 7-14 days. The length depends on how many revisions are needed
          and the number of icons in the proposal.
        </P>
        <P>
          If your submission is accepted, the team will notify your proposal's
          approval. We will update WAM with the new icon(s) with the next
          release.
        </P>
        <HR css={{ marginTop: "$100" }} />
        <Header id="Icons" css={{ paddingBottom: "$100" }} as="h2">
          Icons
        </Header>
        <Grid
          css={{
            "@sm": {
              gridTemplateColumns: "repeat(auto-fill, minmax($400, 1fr))",
            },
          }}
        >
          {Object.keys(AllAssets).map((Asset, i) => {
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
              <AssetContainer key={i} onClick={() => handleCopy(importExample)}>
                <Icon label={`Asset for ${Asset.replace("Svg", "")}`} size="24">
                  <Component fill={theme.colors.primary} />
                </Icon>
              </AssetContainer>
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
            gridGap: "$200",
            // auto equal height cells
            [`${AssetContainer}`]: {
              height: "$500",
              px: "$100",
            },
          }}
        >
          {Object.keys(AllAssets).map((Asset, i) => {
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
                <AssetContainer
                  key={i}
                  css={{
                    backgroundColor: theme.colors["gray500-static"],
                    "&hover": {
                      backgroundColor: theme.colors.gray300,
                    },
                  }}
                  onClick={() => handleCopy(importExample)}
                >
                  <Icon
                    label={`Asset for ${Asset.replace("Svg", "")}`}
                    size={150}
                  >
                    <Component fill={theme.colors.primary} />
                  </Icon>
                </AssetContainer>
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
