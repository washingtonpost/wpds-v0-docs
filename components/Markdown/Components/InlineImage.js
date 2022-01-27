import { styled } from "@washingtonpost/wpds-ui-kit";
import React from "react";

export default function InlineImage({ maxWidth, src, ...rest }) {
  const Img = styled("img", {
    maxWidth: `${maxWidth}px`,
  });
  return <Img {...rest} src={src} width="100%" height="auto" />;
}
