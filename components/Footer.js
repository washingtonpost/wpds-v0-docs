import { Box } from "@washingtonpost/wpds-ui-kit";

export const Footer = () => (
  <Box
    as="footer"
    css={{
      gridArea: "footer",
      borderTop: "1px solid $subtle",
      paddingTop: "$050",
      marginBottom: "$050",
      marginTop: "$500",
      fontFamily: "$meta",
      fontSize: "$100",
      fontWeight: "$light",
      lineHeight: "$150",
      textAlign: "center",
      color: "$accessible",
    }}
  >
    <Box
      as="a"
      css={{
        color: "$accessible",
      }}
      href="https://www.washingtonpost.com"
    >
      washingtonpost.com
    </Box>{" "}
    © 1996-
    {new Date().getFullYear()} The Washington Post
  </Box>
);
