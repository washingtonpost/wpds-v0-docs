import React, { useState } from "react";
import { styled } from "@washingtonpost/wpds-ui-kit";
import { NavigationBar } from "~/components/NavigationBar";
import Sidebar from "~/components/Layout/Components/Sidebar";
import { Footer } from "~/components/Footer";

const Grid = styled("div", {
  display: "grid",
  margin: "0 auto",
  "@notSm": {
    gridTemplateColumns: "300px 1fr",
    gridTemplateRows: "60px 1fr",
    gridTemplateAreas: `
		    "logo nav"
        "sidebar content"
        "sidebar footer"
    	`,
    gridGap: "$125",
    rowGap: "0",
    paddingRight: "$100",
  },
  "@sm": {
    height: "100vh",
    overflowX: "hidden",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "auto auto 1fr",
    gridTemplateAreas: `
		    "logo"
        "sidebar"
        "content"
        "footer"
		`,
    gridGap: "0",
  },
});

const DesktopMenu = styled("div", {
  gridArea: "sidebar",
  variants: {
    state: {
      open: { display: "block" },
      closed: { "@sm": { display: "none" } },
    },
  },
});

const Container = styled("div", {
  gridArea: "content",
  width: "100%",
  margin: "0 auto",
  marginTop: "$125",
  "@sm": {
    padding: "0 $100",
  },
  "@notSm": {
    maxWidth: "1028px",
  },
});

export const PageLayout = ({ children, ...pageProps }) => {
  const [mobileMenuState, setMobileMenuState] = useState(false);
  return (
    <Grid>
      <NavigationBar
        isClosed={mobileMenuState}
        setMobileMenu={setMobileMenuState}
      />
      <DesktopMenu state={mobileMenuState ? "open" : "closed"}>
        <Sidebar
          setMobileMenu={setMobileMenuState}
          navigation={pageProps.navigation}
        />
      </DesktopMenu>
      <Container>{children}</Container>
      <Footer />
    </Grid>
  );
};
