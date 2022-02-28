import { Box } from "@washingtonpost/wpds-ui-kit";
import { Footer as SiteFooter } from "@washingtonpost/site-footer";

export const Footer = () => (
  <Box
    css={{
      gridArea: "footer",
      paddingTop: "$050",
      marginBottom: "$050",
      marginTop: "$500",
    }}
  >
    <div>
      <SiteFooter className="site-footer" />
    </div>
  </Box>
);
