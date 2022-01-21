import React from "react";
import Link from "@docusaurus/Link";
import { ChevronRight16 } from "@washingtonpost/site-components/core/icon/chevron-right/16";
export default function CTA(props) {
  const Color = props.Color == "Dark" ? "fill-white white" : "offblack";
  return (
    <Link
      href={props.url}
      className={`${props.className} ${Color}  flex items-center mt-sm font-bold`}
    >
      {props.children}
      <ChevronRight16 className={`${Color} ml-xs`} />
    </Link>
  );
}
