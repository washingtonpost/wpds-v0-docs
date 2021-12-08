import React from "react";

import { styled } from "@washingtonpost/ui-theme";
import { ThemeToggle } from "~/components/ThemeToggle";
import { NavigationBar } from "~/components/NavigationBar";

export default function Content({ children, useShortVersion }) {
  const Container = styled("div", {
    padding: "0 $200",
    gridColumn: "span 1",
    "@sm": {
      gridColumn: "span 2"
    }
  });
  const Main = styled("main", {
    maxWidth: "1024px",
    margin: "$200 auto"
  });
  return (
    <Container>
      <NavigationBar useShortVersion={useShortVersion}>
        <ThemeToggle />
      </NavigationBar>
      <Main>{children}</Main>
    </Container>
  );
}
