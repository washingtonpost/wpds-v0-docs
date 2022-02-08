import { MDXRemote } from "next-mdx-remote";
import dynamic from "next/dynamic";
import Head from "next/head";
import { styled, theme } from "@washingtonpost/wpds-ui-kit";
import MDXStyling from "~/components/Markdown/Styling";

import Header from "~/components/Typography/Headers";

import { getAllPathsBySection, getDocByPathName } from "~/services";
import { getNavigation } from "~/services/getNavigation";

const components = {
  ...MDXStyling,
  CustomComponent: dynamic(() => import("~/components/Typography/Headers")),
  Head,
};
const P = styled("p", {
  color: theme.colors.accessible,
});

export default function Page({ source }) {
  return (
    <>
      <Head>
        <title>WPDS - {source.scope.title} | Foundations</title>
      </Head>
      <div className="post-header">
        <Header>{source.scope.title}</Header>
        {source.scope.description && (
          <P className="description">{source.scope.description}</P>
        )}
      </div>
      <MDXRemote {...source} components={components} />
    </>
  );
}

const thisSection = "foundations";

export const getStaticProps = async ({ params }) => {
  const source = await getDocByPathName(`${thisSection}/${params.slug}`);

  const navigation = await getNavigation();

  return {
    props: {
      current: params.slug,
      navigation,
      source,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = await getAllPathsBySection(thisSection);

  const removeAssetsPage = paths.filter(
    (path) => path.params.slug !== "assets"
  );

  return {
    paths: removeAssetsPage,
    fallback: false,
  };
};
