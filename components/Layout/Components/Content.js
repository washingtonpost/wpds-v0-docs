import React from "react";
import { styled } from "@washingtonpost/ui-theme";
export default function Content({ children }) {
  const Container = styled("div", {
    padding: "0 $200",
    gridColumn: "span 1",
    "@sm": {
      gridColumn: "span 2"
    }
  });
  const Main = styled("main", {
    maxWidth: "1440px",
    margin: "$200 auto"
  });
  return (
    <Container>
      <Main>{children}</Main>
    </Container>
  );
}
