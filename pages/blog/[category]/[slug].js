import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";
import MDXStyling from "~/components/Markdown/Styling";
import Header from "~/components/Typography/Headers";
import { getNavigation, getAllPathsByCategory, getBlogPost } from "~/services";
import Breadcrumbs from "~/components/Breadcrumbs";

const SECTION = "blog";

const components = {
  ...MDXStyling,
};

export default function Page({ source }) {
  return (
    <>
      <Head>
        <title>WPDS - {source.scope.title} | Blog</title>
      </Head>
      <>
        <Breadcrumbs.Root>
          <Breadcrumbs.Item href="/blog">Blog</Breadcrumbs.Item>
          <Breadcrumbs.Item href={`/blog/${source.scope.kicker.toLowerCase()}`}>
            {source.scope.kicker}
          </Breadcrumbs.Item>
        </Breadcrumbs.Root>
        <Header as="h1">{source.scope.title}</Header>
        <Header
          as="h2"
          css={{
            font: "$subhead",
            marginBottom: "$200",
            color: "$accessible",
          }}
        >
          {source.scope.description}
        </Header>
      </>
      <>
        <MDXRemote {...source} components={components} />
      </>
    </>
  );
}

export const getStaticProps = async (response) => {
  const source = await getBlogPost(
    `${SECTION}/${response.params.category}/${response.params.slug}`
  );
  const navigation = await getNavigation();

  return {
    props: {
      source,
      navigation,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = await getAllPathsByCategory(SECTION);

  return {
    paths,
    fallback: false,
  };
};
