import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";
import Head from "next/head";
import path from "path";
import MDXStyling from "../../components/Markdown/Styling";
import Layout from "../../components/Layout/WithSidebar";
import Content from "../../components/Layout/Components/Content";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  ...MDXStyling,
  // Custom components go here
  CustomComponent: dynamic(() => import("../../components/Typography/Headers")),
  Head
};

export default function Page({ foundations, source, frontMatter }) {
  return (
    <Layout>
      <div className="post-header">
        <h1>{frontMatter.title}</h1>
        {frontMatter.description && (
          <p className="description">{frontMatter.description}</p>
        )}
        <button onClick={() => setToggleSideBar(!toggleSideBar)}>
          Toggle Panel
        </button>
      </div>
      <MDXRemote {...source} components={components} />
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const docFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(docFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: []
    },
    scope: data
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data
    }
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map(path => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map(slug => ({ params: { slug } }));

  return {
    paths,
    fallback: false
  };
};
