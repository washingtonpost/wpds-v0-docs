import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import MDXStyling from "~/components/Markdown/Styling";
import Layout from "~/components/Layout/WithSidebar";
import Content from "~/components/Layout/Components/Content";
import { styled } from "@washingtonpost/ui-theme";
import { Box } from "@washingtonpost/ui-box";
import { RELEASE_NOTES_PATH, release_notesFilePaths } from "~/utils/mdxUtils";
import Header from "~/components/Typography/Headers";

const components = {
  ...MDXStyling,
  Box
};

const Description = styled("h2", {
  fontSize: "$150",
  lineHeight: "$150",
  color: "$accessible",
  fontWeight: "normal",
  marginBottom: "$100"
});

export default function Page({ source, frontMatter }) {
  return (
    <Layout>
      <div id="sidebar"></div>
      <Content id="content">
        <div>
          <Header
            css={{
              marginBottom: "$100"
            }}
          >
            {frontMatter.title}
          </Header>
          <Description as="h2">{frontMatter.description}</Description>
        </div>
        <div>
          <MDXRemote {...source} components={components} />
        </div>
      </Content>
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const slug = path.join(RELEASE_NOTES_PATH, `index.mdx`);
  const source = fs.readFileSync(slug);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    scope: data
  });

  return {
    props: {
      current: params.slug,
      source: mdxSource,
      frontMatter: data
    }
  };
};

export const getStaticPaths = async () => {
  const paths = release_notesFilePaths
    // Remove file extensions for page paths
    .map(path => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map(slug => ({ params: { slug } }));

  return {
    paths,
    fallback: false
  };
};
