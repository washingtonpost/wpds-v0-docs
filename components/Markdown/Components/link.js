import Link from "next/link";
import * as React from "react";
import { styled, globalStyles } from "@washingtonpost/ui-theme";

export default function CustomLink({ as, href, ...otherProps }) {
  const A = styled("a", {
    color: "$signal",
    fontSize: "$",
    cursor: "pointer",
    "&:hover": {
      opacity: ".75"
    }
  });
  return (
    <>
      <Link as={as} href={href}>
        <A {...otherProps} />
      </Link>
    </>
  );
}
