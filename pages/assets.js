import Layout from "~/components/Layout/WithSidebar";
import Content from "~/components/Layout/Components/Content";
import * as AllAssets from "@washingtonpost/wpds-assets/asset";
import { styled, theme } from "@washingtonpost/ui-theme";
import { Icon } from "@washingtonpost/ui-icon";
import { paramCase } from "param-case";
import Add from "@washingtonpost/wpds-assets/asset/add";

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
        <p>CTRL + F to search.</p>

        <h2>example of using theme</h2>
        <Icon label="Add to List" size="16">
          <Add fill={theme.colors.green100} />
        </Icon>
        <code>
          <pre>{`
import { theme } from "@washingtonpost/ui-theme";

export const MyComponent = () => (
  <Icon label="Add to List" size="16">
    <Add fill={theme.colors.green100} />
  </Icon>
);
          `}</pre>
        </code>

        {Object.keys(AllAssets).map(Asset => {
          const Component = AllAssets[Asset];
          const componentName = paramCase(Asset);
          const importExample = `import ${Asset} from "@washingtonpost/wpds-assets/asset/${componentName}";`;

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
