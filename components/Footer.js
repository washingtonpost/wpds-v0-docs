import { Box, styled, theme } from "@washingtonpost/wpds-ui-kit";
import { Footer as SiteFooter } from "@washingtonpost/site-footer";

const StyledFooter = styled(SiteFooter, {
  ".gray-darkest": {
    color: "$colors$onSecondary",
  },

  display: "flex",
  width: "100%",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",

  "& > div.flex": {
    display: "grid",
    width: "100%",
    py: "$200",
    marginBottom: "$150",
    gridTemplateColumns: "repeat(4, 1fr)",
    borderTop: "1px solid $colors$subtle",
    borderBottom: "1px solid $colors$subtle",
  },

  ul: {
    listStyle: "none",
  },

  a: {
    textDecoration: "none",
    lineHeight: "$175",
  },

  ".font-xxxxs": {
    fontSize: "$087",
  },

  ".font-bold": {
    fontWeight: "$bold",
  },

  "div + ul": {
    marginTop: "$050",
  },

  "@notSm": {
    "&.site-footer > footer": {
      display: "none",
    },
  },

  "@sm": {
    alignItems: "flex-start",
    px: "$150",
    paddingTop: "$200",
    borderTop: "1px solid $colors$subtle",

    ".mb-sm": {
      marginBottom: "$100",
    },

    ".lh-default": {
      lineHeight: "$175",
    },

    ".font-xxxs": {
      fontSize: "$087",
    },
  },
});

export const Footer = () => (
  <Box
    css={{
      gridArea: "footer",
      paddingTop: "$050",
      marginBottom: "$100",
      marginTop: "$500",

      "@sm": {
        "footer.site-footer": {
          display: "none",
        },
      },
    }}
  >
    <StyledFooter className="site-footer" />
  </Box>
);
