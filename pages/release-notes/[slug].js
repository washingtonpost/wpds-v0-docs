import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";
import MDXStyling from "~/components/Markdown/Styling";
import { styled, Box } from "@washingtonpost/wpds-ui-kit";
import Header from "~/components/Typography/Headers";
import {
  getDocByPathName,
  getAllPathsBySection,
  getHeadings,
} from "~/services";
import { getNavigation } from "~/services/getNavigation";
import CustomLink from "~/components/Typography/link";

const Slash = styled("span", {
  color: "$accessible",
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
        <Header as="h3">{source.scope.description}</Header>
      </>
      <>
        <MDXRemote {...source} components={MDXStyling} />
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
