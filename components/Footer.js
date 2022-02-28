import { Box } from "@washingtonpost/wpds-ui-kit";
import { Footer as SiteFooter } from "@washingtonpost/site-footer";

export const Footer = () => (
  <Box
    css={{
      gridArea: "footer",
      paddingTop: "$050",
      marginBottom: "$050",
      marginTop: "$500",

      ".site-footer": {
        "--primary-border-color": "$colors$subtle",

        ".gray-darkest": {
          color: "$colors$onSecondary",
        },
      },
    }}
  >
    <SiteFooter className="site-footer" />
  </Box>
);
