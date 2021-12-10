import Layout from "~/components/Layout/WithSidebar";
import Content from "~/components/Layout/Components/Content";
import AllAssets from "@washingtonpost/wpds-assets/asset";
import { styled } from "@washingtonpost/ui-theme";

const AssetContainer = styled("article", {
  border: "1px solid $subtle",
  marginBottom: "$100",
  background: "$accessible"
});

export default function Page() {
  return (
    <Layout>
      <div id="sidebar"></div>
      <Content id="content">
        <h1>Assets</h1>
        {Object.keys(AllAssets).map(Asset => {
          const Component = AllAssets[Asset];
          return (
            <AssetContainer key={Asset}>
              <h2>{Asset}</h2>
              <Component />
            </AssetContainer>
          );
        })}
      </Content>
    </Layout>
  );
}
