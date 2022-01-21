import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";
import { styled, theme } from "@washingtonpost/wpds-ui-kit";
import MDXStyling from "~/components/Markdown/Styling";
import Header from "~/components/Typography/Headers";
import TableofContents from "~/components/Markdown/Components/tableofcontents";
import {
  getAllPathsBySection,
  getDocByPathName,
  getHeadings,
  getNavigation,
} from "~/services";

import { default as EmbedDocsPage } from "~/components/Markdown/Components/EmbedDocsPage";
import { default as EmbedControls } from "~/components/Markdown/Components/EmbedControls";
import { default as EmbedStory } from "~/components/Markdown/Components/EmbedStory";
import { default as CustomSandpack } from "~/components/Markdown/Components/Sandbox";

const components = {
  ...MDXStyling,
  EmbedStory,
  EmbedControls,
  EmbedDocsPage,
  CustomSandpack,
  Head,
};

const P = styled("p", {
  color: theme.colors.accessible,
});

export default function Page({ current, source, headings }) {
  return (
    <>
      <Head>
        <title>WPDS - {source.scope.title} | Components</title>
      </Head>
      <div className="post-header">
        <Header>{source.scope.title}</Header>
        {source.scope.description && (
          <P className="description">{source.scope.description}</P>
        )}
        <TableofContents current={current} headings={headings} />
      </div>

      <MDXRemote {...source} components={components} />
    </>
  );
}

const thisSection = "components";

export const getStaticProps = async ({ params }) => {
  const source = await getDocByPathName(`${thisSection}/${params.slug}`);
  const headings = await getHeadings(`${thisSection}/${params.slug}`);
  const navigation = await getNavigation();

  return {
    props: {
      current: params.slug,
      headings,
      navigation,
      source,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = await getAllPathsBySection(thisSection);

  return {
    paths,
    fallback: false,
  };
};
