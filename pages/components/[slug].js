import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";
import { AlertBanner, styled, theme } from "@washingtonpost/wpds-ui-kit";
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

const Article = styled("article", {
  margin: "auto",
});

export default function Page({ current, source, headings, propsTable }) {
  return (
    <>
      <Head>
        <title>WPDS - {source.scope.title} | Components</title>
      </Head>
      {source.scope.status == "Coming soon" && (
        <>
          <P css={{ width: "100%", display: "flex" }}>
            <P
              as="img"
              css={{ margin: "auto" }}
              src="https://media.giphy.com/media/XIqCQx02E1U9W/giphy.gif"
              height="auto"
              width="50%"
            />
          </P>
          <P
            css={{
              fontSize: "$150",
              paddingTop: "$100",
              width: "90%",
              margin: "auto",
              textAlign: "center",
            }}
          >
            This component status is coming soon and indicates a component is in
            a queue for future work.
          </P>
        </>
      )}
      <header className="post-header">
        <Header
          css={{ opacity: source.scope.status == "Coming soon" ? 0.5 : 1 }}
        >
          {source.scope.title}
        </Header>

        {source.scope.status == "Draft" && (
          <AlertBanner.Root css={{ marginBottom: "$200" }} variant="warning">
            <AlertBanner.Content>
              <b>Note:{` `}</b>This component status is in draft and indicates
              the component is actively being worked on.
            </AlertBanner.Content>
          </AlertBanner.Root>
        )}
        {source.scope.description && (
          <P className="description">{source.scope.description}</P>
        )}

        <TableofContents
          css={{ opacity: source.scope.status == "Coming soon" ? 0.5 : 1 }}
          current={current}
          headings={headings}
        />
      </header>

      <Article
        css={{ opacity: source.scope.status == "Coming soon" ? 0.5 : 1 }}
      >
        <MDXRemote
          {...source}
          components={components}
          scope={{
            propsTable,
          }}
        />
      </Article>
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
