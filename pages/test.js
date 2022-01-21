import * as React from "react";
import { Box, styled } from "@washingtonpost/wpds-ui-kit";
import GuideContainer from "~/components/Markdown/Components/GuideContainer";
import Header from "~/components/Typography/Headers";

const Stack = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",

  "& > *": {
    marginBottom: "$200",
  },
});

export default function Page() {
  return (
    <Box>
      <h1>Docs components</h1>
      <Stack>
        <GuideContainer>
          <Header as="h3">Default</Header>
        </GuideContainer>
        <GuideContainer variant="success">
          <Header as="h3">Success</Header>
        </GuideContainer>
        <GuideContainer variant="warning">
          <Header as="h3">Warning</Header>
        </GuideContainer>
        <GuideContainer variant="signal">
          <Header as="h3">Signal</Header>
        </GuideContainer>
        <GuideContainer variant="error">
          <Header as="h3">Error</Header>
        </GuideContainer>
      </Stack>
    </Box>
  );
}
