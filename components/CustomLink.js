import Link from "next/link";
import * as React from "react";
import { styled, globalStyles } from "@washingtonpost/ui-theme";

export default function CustomLink({ as, href, ...otherProps }) {
  const A = styled("a", {
    padding: "30px",
    color: "$cta",
    fontSize: "$",
    cursor: "pointer"
  });
  return (
    <>
      <Link as={as} href={href}>
        <A {...otherProps} />
      </Link>
    </>
  );
}
