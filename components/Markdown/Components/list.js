const { styled } = require("@washingtonpost/ui-theme");

const List = styled("ul", {
  listStyle: "none",
  marginTop: "0",
  paddingLeft: "$050"
});
const ListItem = styled("li", {
  cursor: "pointer",
  padding: "$025 0",

  listStyle: "none"
});
const LinkText = styled("a", {
  color: "$accessible",
  textDecoration: "underline",
  "&:focus": {
    outlineColor: "$signal",
    outlineStyle: "solid",
    outlineOffset: "2px",
    outlineWidth: "2px"
  }
});

export default { List, ListItem, LinkText };
