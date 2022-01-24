import React from "react";
import { Box, theme, styled } from "@washingtonpost/wpds-ui-kit";
import CustomLink from "~/components/Typography/link";

const Slash = styled("span", {
  color: theme.colors.accessible,
});

const Root = ({ children }) => {
  return (
    <Box
      as="nav"
      aria-label="Breadcrumb"
      css={{
        marginBottom: "$050",
      }}
    >
      {children}
    </Box>
  );
};

const Item = ({ children, href }) => {
  return (
    <>
      <CustomLink
        href={href}
        css={{
          fontFamily: "$meta",
          fontSize: "$100",
          fontWeight: "$light",
          borderBottom: "1px solid currentColor",
          color: theme.colors.accessible,
          marginRight: "$050",
        }}
      >
        {children}
      </CustomLink>
      <Slash aria-hidden="true">/</Slash>
    </>
  );
};

const Breadcrumbs = {
  Root,
  Item,
};

export default Breadcrumbs;
