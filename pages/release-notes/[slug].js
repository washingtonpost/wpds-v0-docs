import { MDXRemote } from "next-mdx-remote";
import MDXStyling from "~/components/Markdown/Styling";
import Layout from "~/components/Layout/WithSidebar";
import Content from "~/components/Layout/Components/Content";
import { styled } from "@washingtonpost/ui-theme";
import Header from "~/components/Typography/Headers";
import { getDocByPathName, getAllPathsBySection } from "~/services";

const CategoryHeader = styled("h4", {
  borderRadius: "$025",
  display: "inline-flex",
  backgroundColor: "$green300",
  border: "1px solid currentColor",
  padding: "$025 $050",
  color: "$green50",
  fontWeight: "normal"
});

const components = {
  ...MDXStyling,
  CategoryHeader
};

const Description = styled("h2", {
  fontSize: "$150",
  lineHeight: "$150",
  color: "$accessible",
  fontWeight: "normal",
  marginBottom: "$100"
});

export default function Page({ source }) {
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
            {source.scope.title}
          </Header>
          <Description as="h2">{source.scope.description}</Description>
        </div>
        <div>
          <MDXRemote {...source} components={components} />
        </div>
      </Content>
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const source = await getDocByPathName(`release-notes/${params.slug}`);

  return {
    props: {
      source
    }
  };
};

export const getStaticPaths = async () => {
  const paths = await getAllPathsBySection("release-notes");

  return {
    paths,
    fallback: false
  };
};