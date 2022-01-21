import { styled } from "@washingtonpost/wpds-ui-kit";
import React from "react";
import Link from "./link";

export const Header = styled("h1", {
  fontSize: "$300",
  fontFamily: "$headline",
  color: "$primary",
  fontWeight: "$bold",
  variants: {
    as: {
      h2: {
        fontFamily: "$headline",
        fontSize: "$175",
        fontWeight: "$bold",
      },
      h3: {
        fontSize: "$125",
        fontFamily: "$subhead",
        fontWeight: "$bold",

        marginBottom: "$025",
        marginTop: "$100",
      },
      h4: {
        fontSize: "$100",
        fontWeight: "$bold",
        fontFamily: "$meta",
      },
      h6: {
        fontSize: "$050",
        fontWeight: "$light",
        fontFamily: "$body",
      },
    },
  },
});

export default function headers({ css, children, as }) {
  return (
    <Link id={`${children}`} href={`#${children}`}>
      <Header css={css} as={as}>
        {children}
      </Header>
    </Link>
  );
}
