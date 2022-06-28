import { Box, styled, theme } from "@washingtonpost/wpds-ui-kit";
import { Header } from "~/components/Markdown/Components/headers";
import { P } from "~/components/Markdown/Styling";
import Image from "next/image";

const StyledImage = styled(Image, {
  flex: "1",
  paddingRight: "$075",
  [".wpds-dark &"]: { opacity: "0.9" },
});

const Grid = styled("section", {
  width: "100%",
  display: "grid",
  gridTemplateColumns: "1fr 5fr",
  gridGap: "$100",
  "@sm": {
    gridTemplateColumns: "1fr 9fr",
  },
});

export const Thumbnail = (props) => {
  // switches based on the size of the post displayed – full for workshops and tutorials, mini for guides
  switch (props.size) {
    case "full":
      return (
        <Box css={{ maxWidth: "280px" }}>
          <StyledImage
            width="300"
            height="150"
            src={`/${props.imageTag}`}
            alt={`${props.name} graphic`}
          />
          <Header as="h3" css={{ marginTop: "$075" }}>
            {props.name}
          </Header>
          <P css={{ [".New &"]: { display: "none" } }}>{props.description}.</P>
          <P
            css={{
              color: "$accessible",
              [".tutorials &"]: { display: "none" },
            }}
          >
            {props.publishDate}
          </P>
        </Box>
      );
    case "mini":
      return (
        <Grid>
          <div>
            <StyledImage
              width="70"
              height="70"
              src={`/../${props.thumbnail}`}
              alt={`${props.name} thumbnail image`}
            />
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
