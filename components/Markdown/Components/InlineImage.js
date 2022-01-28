import { styled } from "@washingtonpost/wpds-ui-kit";
import React from "react";

export default function InlineImage({ maxWidth, src, aspectRatio, ...rest }) {
  const Img = styled("img", {
    maxWidth: `${maxWidth}px`,
    aspectRatio: aspectRatio,
  });
  return <Img {...rest} src={src} width="100%" height="auto" />;
}
