import { styled } from "@washingtonpost/ui-theme";
import Link from "next/link";

const Bar = styled("nav", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  marginTop: "$100",
  alignItems: "center"
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

export const NavigationBar = ({ children }) => (
  <Bar>
    <List>
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
