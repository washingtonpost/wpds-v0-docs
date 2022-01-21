import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";
import MDXStyling from "~/components/Markdown/Styling";
import { styled, Box, theme } from "@washingtonpost/wpds-ui-kit";
import Header from "~/components/Typography/Headers";
import {
  getDocByPathName,
  getAllPathsBySection,
  getHeadings,
} from "~/services";
import { getNavigation } from "~/services/getNavigation";
import CustomLink from "~/components/Typography/link";
// import TOC from "~/components/Markdown/Components/tableofcontents";

const Slash = styled("span", {
  color: "$accessible",
});

const Change = styled("div", {
  cursor: "pointer",
  color: "$accessible",
  marginBottom: "$025",
  borderRadius: "$025",
  display: "inline-block",
  border: "1px solid currentColor",
  display: "inline-block",
  px: "$050",
  borderRadius: "$025",
  fontFamily: "$meta",
  fontSize: "$100",
  fontWeight: "$light",
  lineHeight: "auto",
  marginTop: "$100",
  marginBottom: "$050",

  variants: {
    type: {
      New: { color: "$green80", background: "$green300" },
      Updates: { color: "$blue80", background: "$blue300" },
      Fixes: { color: "$red80", background: "$red300" },
    },
  },
});

const components = {
  ...MDXStyling,
  Change,
};

const Description = styled("h2", {
  fontSize: "$150",
  lineHeight: "$150",
  color: theme.colors.accessible,
  fontWeight: "normal",
  marginBottom: "$100",
});

export default function Page({ source, headings }) {
  return (
    <>
      <Head>
        <title>WPDS - {source.scope.title} | Release Notes</title>
      </Head>
      <>
        <Box
          css={{
            marginBottom: "$050",
          }}
        >
          <CustomLink
            href="/release-notes"
            css={{
              fontFamily: "$meta",
              fontSize: "$100",
              fontWeight: "$light",

              borderBottom: "1px solid currentColor",
              color: "$accessible",
              marginRight: "$050",
            }}
          >
            Release notes
          </CustomLink>
          <Slash aria-hidden="true">/</Slash>
        </Box>
        <Header
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
        <Description as="h2">{source.scope.description}</Description>
        {/* <TOC headings={headings} /> */}
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

  const headings = await getHeadings(`release-notes/${params.slug}`);

  return {
    props: {
      source,
      navigation,
      headings,
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
