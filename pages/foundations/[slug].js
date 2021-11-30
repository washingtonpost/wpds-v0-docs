import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";
import { useState } from "react";
import Head from "next/head";
import path from "path";
import Header from "../../components/Typography/Headers";
import CustomLink from "../../components/CustomLink";
import Layout from "../../components/Layout/WithSidebar";
import Sidebar from "../../components/Layout/Sidebar";
import Content from "../../components/Layout/Content";
import {
  foundationFilePaths,
  FOUNDATION_PATH,
  docsFilePaths,
  DOCS_PATH
} from "../../utils/mdxUtils";

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  a: CustomLink,
  h1: Header,
  h2: Header,
  h3: Header,
  h4: Header,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  CustomComponent: dynamic(() => import("../../components/Typography/Headers")),
  Head
};

export default function Page({
  current,
  docs,
  foundations,
  source,
  frontMatter
}) {
  const [toggleSideBar, setToggleSideBar] = useState(false);
  return (
    <Layout>
      <Sidebar
        showSidebar={toggleSideBar}
        foundations={foundations}
        docs={docs}
        current={current}
        id="sidebar"
      />
      <Content id="content">
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
      </Content>
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const docFilePath = path.join(FOUNDATION_PATH, `${params.slug}.mdx`);
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

  //fetches all component docs
  const docs = docsFilePaths.map(filePath => {
    const source = fs.readFileSync(path.join(DOCS_PATH, filePath));
    const { content, data } = matter(source);
    return {
      content,
      data,
      filePath
    };
  });
  //fetches all foundation docs
  const foundations = foundationFilePaths.map(filePath => {
    const source = fs.readFileSync(path.join(FOUNDATION_PATH, filePath));
    const { content, data } = matter(source);
    return {
      content,
      data,
      filePath
    };
  });

  return {
    props: {
      current: params.slug,
      docs: docs,
      foundations: foundations,
      source: mdxSource,
      frontMatter: data
    }
  };
};

export const getStaticPaths = async () => {
  const paths = foundationFilePaths
    // Remove file extensions for page paths
    .map(path => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map(slug => ({ params: { slug } }));

  return {
    paths,
    fallback: false
  };
};
