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
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: "$050",

      "@sm": {
        display: "grid",
        textAlign: "center",
        gridTemplateAreas: `
          "footer-top footer-top"
          "footer-left footer-left"
        `,
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "auto auto",
        rowGap: "$025",
        columnGap: "$050",
      },
    }}
  >
    <Box
      as="a"
      css={{
        color: "$accessible",
        "@sm": {
          order: 2,
          gridArea: "footer-left",
          textAlign: "center",
        },
      }}
      href="https://www.washingtonpost.com"
    >
      washingtonpost.com
    </Box>{" "}
    <Box
      css={{
        "@sm": {
          order: 1,
          gridArea: "footer-top",
        },
      }}
    >
      © 1996-
      {new Date().getFullYear()} {""}
      The Washington Post
    </Box>
  </Box>
);
