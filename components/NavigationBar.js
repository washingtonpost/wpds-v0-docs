import { styled, keyframes } from "@washingtonpost/ui-theme";
import Link from "next/link";

const Reveal = keyframes({
  from: { transform: "translateY(-100%)" },
  to: { transform: "translateY(0)" }
});
const Bar = styled("nav", {
  position: "fixed",
  right: 0,
  backgroundColor: "$gray600",
  zIndex: "$z-shell",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  padding: "$150 0",
  alignItems: "center",
  variants: {
    NavState: {
      show: {
        animation: `${Reveal} 200ms normal`,
        animationFillMode: "forwards"
      },
      hide: {
        animation: `${Reveal} 200ms normal`,
        animationFillMode: "reverse"
      }
    }
  }
});

const List = styled("ul", {
  display: "flex",
  flexDirection: "row",
  listStyle: "none",
  margin: 0,
  padding: 0,
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

export const NavigationBar = ({ children, useShortVersion }) => (
  <Bar>
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
