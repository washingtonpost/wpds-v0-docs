import React from "react";
import { styled } from "@washingtonpost/ui-theme";
import Link from "./Typography/link";
export default function Logo({ css }) {
  const Container = styled("div", {
    display: "flex",
    alignItems: "center",
    color: "$accessible",
    fontFamily: "$meta",
    fontWeight: "$light"
  });
  const Span = styled("span", {
    marginLeft: "$050",
    fontSize: "$125",
    textDecoration: "none",
    width: "100%"
  });
  return (
    <Link href="/" passHref>
      <Container css={css}>
        <img src="/logo.svg" />
        <Span>Design system</Span>
      </Container>
    </Link>
  );
}
