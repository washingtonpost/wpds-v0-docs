import { Box, styled, theme } from "@washingtonpost/wpds-ui-kit";
import { Header } from "~/components/Markdown/Components/headers";
import { P } from "~/components/Markdown/Styling";
import Image from "next/image";

const StyledImage = styled(Image, {
  flex: "1",
  paddingRight: "$075",
  [".wpds-dark &"]: { opacity: "0.9" },
});

export const Thumbnail = (props) => {
  return (
    <Box css={{ maxWidth: "280px" }}>
      <StyledImage
        width="300"
        height="150"
        src={`/../${props.imageTag}`}
        alt={`${props.name} graphic`}
      />
      <Header as="h3">{props.name}</Header>
      <P css={props.css}>{props.description}.</P>
      <P css={{ color: "$accessible", [".tutorials &"]: { display: "none" } }}>
        {props.publishDate}
      </P>
    </Box>
  );
};
