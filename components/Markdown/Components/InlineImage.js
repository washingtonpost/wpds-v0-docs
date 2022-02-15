import { styled, css } from "@washingtonpost/wpds-ui-kit";
import React from "react";
import Image from "next/image";

export default function InlineImage({ maxWidth, width, height, src, ...rest }) {
  const ImageContainer = styled("div", {
    maxWidth: `${maxWidth}px`,

    padding: "$100",
  });

  const inlineImageCSS = css({
    aspectRatio: `${width}/${height}`,
  });
  return (
    <ImageContainer>
      <Image
        className={inlineImageCSS()}
        {...rest}
        src={src}
        width={width}
        height={height}
      />
    </ImageContainer>
  );
}
