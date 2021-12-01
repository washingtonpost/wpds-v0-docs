import { styled } from "@washingtonpost/ui-theme";
import React from "react";
import CustomLink from "./link";
export default function headers({ children, as }) {
  const Header = styled("h1", {
    fontSize: "$300",
    fontFamily: "$headline",
    variants: {
      as: {
        h2: {
          fontSize: "$150",
          marginBottom: "$050"
        },
        h3: {
          fontSize: "$100",
          fontFamily: "$subhead",
          fontWeight: "$bold",
          marginBottom: "$025"
        },
        h4: {
          fontSize: "$100",
          fontWeight: "$bold",
          fontFamily: "$meta"
        }
      }
    }
  });
  return (
    <CustomLink href={`#${children}`}>
      <Header as={as}>{children}</Header>
    </CustomLink>
  );
}
