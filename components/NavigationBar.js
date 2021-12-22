import { useState, useEffect } from "react";
import { styled } from "@washingtonpost/wpds-ui-kit";
import Link from "next/link";
import useScrollPosition from "~/hooks/useScrollPosition";
import Logo from "./logo";
import { ThemeToggle } from "./ThemeToggle";

const Bar = styled("nav", {
  position: "fixed",
  display: "grid",
  gridTemplateColumns: "300px 1fr",
  right: 0,
  left: 0,
  alignItems: "center",
  transition: "transform .5s",
  "@md": {
    display: "none"
  },
  "@sm": {
    display: "none"
  },
  variants: {
    NavState: {
      show: {
        transform: "translateY(0)"
      },
      hide: {
        transform: "translateY(-100%)"
      }
    }
  }
});

const Container = styled("div", {
  alignItems: "center",
  display: "flex"
});
const List = styled("ul", {
  display: "flex",
  gridColumn: "2",
  backgroundColor: "$gray600",
  flexDirection: "row",
  listStyle: "none",
  width: "100%",
  justifyContent: "flex-end",
  margin: 0,
  padding: "$100 0",
  alignItems: "center"
});

const ListItem = styled("li", {
  display: "flex",
  flexDirection: "column",
  margin: "0 $200 0 0"
});

const Anchor = styled("a", {
  color: "$primary",
  fontWeight: "bold",
  textDecoration: "none",
  "&:hover": {
    opacity: "0.75"
  }
});

export const NavigationBar = ({ children, showLogo, disableAnim }) => {
  const activePosition = disableAnim ? 0 : useScrollPosition(); //Hook to track current scroll position
  const [ScrollingDown, setDirection] = useState(false); //if the user is scrolling down
  const [lastPosition, setLastPosition] = useState(null); // store the last postion to calculat the delta

  //Calculates delta for direction when scoll position changes
  useEffect(() => {
    setTimeout(() => {
      setLastPosition(activePosition), 1000;
    });
    if (activePosition - lastPosition <= 0) {
      setDirection(false);
    } else {
      setDirection(true);
    }
  }, [activePosition]);

  return (
    <Bar NavState={ScrollingDown ? "hide" : "show"} id="bar">
      <Container
        css={{
          display: `${showLogo ? "flex" : "none"}`
        }}
      >
        <Logo
          css={{
            padding: "$100 0",
            paddingLeft: "$200",
            marginRight: "$050"
          }}
        />
        <ThemeToggle />
      </Container>
      <List>
        <ListItem>
          <Link href="/" passHref>
            <Anchor>Home</Anchor>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/foundations" passHref>
            <Anchor>Foundations</Anchor>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/components" passHref>
            <Anchor>Components</Anchor>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/blog" passHref>
            <Anchor>Blog</Anchor>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/release-notes" passHref>
            <Anchor>Release Notes</Anchor>
          </Link>
        </ListItem>
      </List>
      {children}
    </Bar>
  );
};
