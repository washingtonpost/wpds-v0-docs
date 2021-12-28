import React from "react";
import { styled, Icon, theme } from "@washingtonpost/wpds-ui-kit";
import WPMark from "@washingtonpost/wpds-assets/asset/wp-mark";
import Link from "next/link";

export default function Logo({ css }) {
  const Container = styled("div", {
    display: "flex",
    alignItems: "center",
    color: "$accessible",
    fontFamily: "$meta",
    fontWeight: "$light",
    cursor: "pointer"
  });
  const Span = styled("span", {
    marginLeft: "$050",
    fontSize: "$125",
    textDecoration: "none",
    width: "100%"
  });
  return (
    <Link href="/" aria-label="The Washington Post Design System's Homepage">
      <Container css={css}>
        <Icon size={32}>
          <WPMark fill={theme.colors.primary} />
        </Icon>
        <Span>Design system</Span>
      </Container>
    </Link>
  );
}
