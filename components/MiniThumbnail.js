import { Box, styled, theme, css } from "@washingtonpost/wpds-ui-kit";
import { Header } from "~/components/Markdown/Components/headers";
import { P } from "~/components/Markdown/Styling";
import Image from "next/image";

const StyledImage = styled(Image, {
  paddingRight: "$075",
  [".wpds-dark &"]: { opacity: "0.9" },
});

const Grid = styled("section", {
  width: "100%",
  display: "grid",
  gridTemplateColumns: "1fr 4fr",
  gridGap: "$100",

  "@sm": {
    gridTemplateColumns: "1fr 9fr",
  },
});

export const MiniThumbnail = (props) => {
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
        <P
          css={{
            "@notSm": {
              marginBottom: "$100",
            },
          }}
        >
          {props.description}
        </P>
      </div>
    </Grid>
  );
};
