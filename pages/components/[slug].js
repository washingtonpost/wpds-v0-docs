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
  getPropsTable,
} from "~/services";

import { default as EmbedDocsPage } from "~/components/Markdown/Components/EmbedDocsPage";
import { default as EmbedControls } from "~/components/Markdown/Components/EmbedControls";
import { default as EmbedStory } from "~/components/Markdown/Components/EmbedStory";
import { default as CustomSandpack } from "~/components/Markdown/Components/Sandbox";
import { PropsTable } from "~/components/PropsTable";

const components = {
  ...MDXStyling,
  EmbedStory,
  EmbedControls,
  EmbedDocsPage,
  CustomSandpack,
  Head,
  PropsTable,
};

const P = styled("p", {
  color: theme.colors.accessible,
});

export default function Page({ current, source, headings, propsTable }) {
  return (
    <>
      <Head>
        <title>WPDS - {source.scope.title} | Components</title>
      </Head>
      <header className="post-header">
        <Header>{source.scope.title}</Header>
        {source.scope.description && (
          <P className="description">{source.scope.description}</P>
        )}
        <TableofContents current={current} headings={headings} />
      </header>

      <article>
        <MDXRemote
          {...source}
          components={components}
          scope={{
            propsTable,
          }}
        />
      </article>
    </>
  );
}

const thisSection = "components";

export const getStaticProps = async ({ params }) => {
  const source = await getDocByPathName(`${thisSection}/${params.slug}`);
  const headings = await getHeadings(`${thisSection}/${params.slug}`);
  const navigation = await getNavigation();
  const propsTable = await getPropsTable(params.slug);

  return {
    props: {
      current: params.slug,
      headings,
      navigation,
      source,
      propsTable,
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
