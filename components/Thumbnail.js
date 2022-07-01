import { Box, styled, theme } from "@washingtonpost/wpds-ui-kit";
import { Header } from "~/components/Markdown/Components/headers";
import { P } from "~/components/Markdown/Styling";
import Image from "next/image";

const StyledImage = styled(Image, {
  flex: "1",
  [".wpds-dark &"]: { opacity: "0.9" },
});

const Grid = styled("section", {
  width: "100%",
  display: "grid",
  variants: {
    type: {
      full: {
        width: "100%",
        display: "grid",
        gridTemplateColumns: "1fr",
        gridGap: "$050",
        "@sm": {
          gridGap: "$075",
        },
      },
      mini: {
        gridTemplateColumns: "1fr 8fr",
        gridGap: "$100",
        "@sm": {
          gridTemplateColumns: "1fr 9fr",
        },
      },
    },
  },
});

const Content = styled("div", {
  display: "flex",
});

export const Thumbnail = (props) => {
  // switches based on the size of the post displayed – full for workshops and tutorials, mini for guides
  switch (props.size) {
    case "full":
      return (
        <Grid type="full">
          <Content>
            {props.imageTag && (
              <StyledImage
                width="500"
                height="250"
                src={props.imageTag}
                alt={`${props.name} graphic`}
              />
            )}
          </Content>
          <div>
            <Header as="h3" css={{ marginTop: "0" }}>
              {props.name}
            </Header>
            <P css={{ [".New &"]: { display: "none" } }}>
              {props.description}.
            </P>
            <P
              css={{
                color: "$accessible",
                [".tutorials &"]: { display: "none" },
              }}
            >
              {props.publishDate}
            </P>
          </div>
        </Grid>
      );
    case "mini":
      return (
        <Grid type="mini">
          <div>
            {props.thumbnail && (
              <StyledImage
                width="70"
                height="70"
                src={props.thumbnail}
                alt={`${props.name} thumbnail image`}
              />
            )}
          </div>
          <div>
            <Header as="h3" css={{ marginTop: "0" }}>
              {props.name}
            </Header>
            <P>{props.description}.</P>
          </div>
        </Grid>
      );
  }
};
