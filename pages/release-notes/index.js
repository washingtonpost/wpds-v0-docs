import React from "react";
import { NextSeo } from "next-seo";
import { getNavigation } from "~/services";
import { Icon, styled } from "@washingtonpost/wpds-ui-kit";
import Header from "~/components/Typography/Headers";
import Link from "~/components/Markdown/Components/link";
import External from "@washingtonpost/wpds-assets/asset/external";

const Card = styled("article", {
  border: "1px solid $subtle",
  borderRadius: "$050",
  px: "$150",
  paddingTop: "$100",
  paddingBottom: "$100",
  marginBottom: "$150",
});

const StyledIcon = styled(Icon, {
  verticalAlign: "middle",
});

export default function Page() {
  return (
    <>
      <NextSeo
        title={`WPDS - Release Notes`}
        description="Release notes for WPDS, the Washington Post Design System."
      />
      <header>
        <Header as="h1">Release notes</Header>
      </header>

      <section>
        <Link
          href="https://github.com/washingtonpost/wpds-ui-kit/releases"
          target="_blank"
          rel="noopener"
        >
          <Card>
            <Header as="h2">
              Ui Kit Release notes{" "}
              <Icon size="100">
                <External></External>
              </Icon>
            </Header>
          </Card>
        </Link>
        <Link
          href="https://github.com/washingtonpost/wpds-assets-manager/releases"
          target="_blank"
          rel="noopener"
        >
          <Card>
            <Header as="h2">
              WAM Release notes{" "}
              <Icon size="100">
                <External></External>
              </Icon>
            </Header>
          </Card>
        </Link>
        <Link
          href="https://github.com/washingtonpost/wpds-plugins/releases"
          target="_blank"
          rel="noopener"
        >
          <Card>
            <Header as="h2">
              Plugins Release notes{" "}
              <Icon size="100">
                <External></External>
              </Icon>
            </Header>
          </Card>
        </Link>
        <Link
          href="https://github.com/washingtonpost/wpds-docs/releases"
          target="_blank"
          rel="noopener"
        >
          <Card>
            <Header as="h2">
              Docs Release notes{" "}
              <Icon size="100">
                <External></External>
              </Icon>
            </Header>
          </Card>
        </Link>
      </section>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const navigation = await getNavigation();

  return {
    props: {
      navigation,
    },
  };
};
