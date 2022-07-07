import { styled } from "@washingtonpost/wpds-ui-kit";
import { Header } from "~/components/Markdown/Components/headers";
import { P } from "~/components/Markdown/Styling";
import Image from "next/image";
import { ThumbnailGrid } from "./Markdown/Components/ResourcesGrids";

export const THUMBNAIL_WIDE = "wide";
export const THUMBNAIL_SQUARE = "square";

// image has 90% opacity when the page is on dark mode
const StyledImage = styled(Image, {
  flex: "1",
  [".wpds-dark &"]: { opacity: "0.9" },
});

const Content = styled("div", {
  display: "flex",
});

export const Thumbnail = (props) => {
  // switches based on the size of the post displayed – full for workshops and tutorials, mini for guides
  // note the description is hidden for what's new and the publish date is hidden for tutorials on the resources landing page
  const { name, description, publishDate, imageTag, thumbnail, size } = props;
  switch (size) {
    case THUMBNAIL_WIDE:
      return (
        <ThumbnailGrid size={THUMBNAIL_WIDE}>
          <Content>
            {imageTag && (
              <StyledImage
                width="500"
                height="250"
                src={imageTag}
                alt={`${name} graphic`}
              />
            )}
          </Content>
          <div>
            <Header as="h3" css={{ marginTop: "0" }}>
              {name}
            </Header>
            <P css={{ [".New &"]: { display: "none" } }}>{description}.</P>
            <P
              css={{
                color: "$accessible",
                [".tutorials &"]: { display: "none" },
              }}
            >
              {publishDate}
            </P>
          </div>
        </ThumbnailGrid>
      );
    case THUMBNAIL_SQUARE:
      return (
        <ThumbnailGrid size={THUMBNAIL_SQUARE}>
          <div>
            {thumbnail && (
              <StyledImage
                width="70"
                height="70"
                src={thumbnail}
                alt={`${name} thumbnail image`}
              />
            )}
          </div>
          <div>
            <Header as="h3" css={{ marginTop: "0" }}>
              {name}
            </Header>
            <P>{description}.</P>
          </div>
        </ThumbnailGrid>
      );
  }
};
