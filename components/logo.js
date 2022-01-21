import React from "react";
import { styled, Icon, theme } from "@washingtonpost/wpds-ui-kit";
import WPMark from "@washingtonpost/wpds-assets/asset/wp-mark";
import Link from "next/link";

const Container = styled("div", {
	display: "flex",
	alignItems: "center",
	color: theme.colors.accessible,
	fontFamily: "$meta",
	fontWeight: "$light",
	cursor: "pointer",
	paddingLeft: "$125",
	"@sm": {
		width: "100%",
	},
});
const Span = styled("span", {
  marginLeft: "$050",
  fontSize: "$150",
  textDecoration: "none",
  width: "100%",
});

export default function Logo() {
  return (
    <Link
      passHref
      href="/"
      aria-label="The Washington Post Design System's Homepage"
    >
      <Container>
        <Icon size={40}>
          <WPMark fill={theme.colors.primary} />
        </Icon>
        <Span>Design system</Span>
      </Container>
    </Link>
  );
}
