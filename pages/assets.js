import Layout from "~/components/Layout/WithSidebar";
import Content from "~/components/Layout/Components/Content";
import AllAssets from "@washingtonpost/wpds-assets/asset";
import { styled } from "@washingtonpost/ui-theme";
import { paramCase } from "param-case";

const AssetContainer = styled("article", {
  border: "1px solid $subtle",
  background: "$accessible",
  padding: "$100",
  borderRadius: "$100"
});

export default function Page() {
  return (
    <Layout>
      <div id="sidebar"></div>
      <Content id="content">
        <h1>Assets</h1>
        {Object.keys(AllAssets).map(Asset => {
          const Component = AllAssets[Asset];
          const componentName = paramCase(Asset);
          const importExample = `import ${Asset} from "@washingtonpost/wpds-assets/${componentName}";`;

          return (
            <section key={Asset}>
              <h2>{Asset}</h2>
              <pre>{importExample}</pre>
              <AssetContainer>
                <Component />
              </AssetContainer>
            </section>
          );
        })}
      </Content>
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  return {
    props: {
      links: []
    }
  };
};
