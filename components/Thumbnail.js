import { styled } from "@washingtonpost/wpds-ui-kit";
import { Header } from "~/components/Markdown/Components/headers";
import { P } from "~/components/Markdown/Styling";
import Image from "next/image";
import { ThumbnailGrid } from "./Markdown/Components/ResourcesGrids";

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
  switch (props.size) {
    case "full":
      return (
        <ThumbnailGrid type="full">
          <Content>
            {props.imageTag && (
              <StyledImage
                width="500"
                height="250"
                src={props.imageTag}
                alt={`${props.name} graphic`}
              />
            )}
          </Content>
          <div>
            <Header as="h3" css={{ marginTop: "0" }}>
              {props.name}
            </Header>
            <P css={{ [".New &"]: { display: "none" } }}>
              {props.description}.
            </P>
            <P
              css={{
                color: "$accessible",
                [".tutorials &"]: { display: "none" },
              }}
            >
              {props.publishDate}
            </P>
          </div>
        </ThumbnailGrid>
      );
    case "mini":
      return (
        <ThumbnailGrid type="mini">
          <div>
            {props.thumbnail && (
              <StyledImage
                width="70"
                height="70"
                src={props.thumbnail}
                alt={`${props.name} thumbnail image`}
              />
            )}
          </div>
          <div>
            <Header as="h3" css={{ marginTop: "0" }}>
              {props.name}
            </Header>
            <P>{props.description}.</P>
          </div>
        </ThumbnailGrid>
      );
  }
};
