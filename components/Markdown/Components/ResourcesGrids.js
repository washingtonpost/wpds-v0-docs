import { styled, theme } from "@washingtonpost/wpds-ui-kit";

export const LandingContentGrid = styled("div", {
  // responsible for grids on landing pages, such as resources
  display: "grid",

  // specific styling for what's new resource section
  ["&.New"]: { marginTop: "-$075" },

  // variant styling for grids with different thumbnail sizes, square (2 columns) and wide (3 columns)
  variants: {
    size: {
      square: {
        gridTemplateColumns: "1fr",
        gridColumnGap: "$300",
        gridRowGap: "0",
        "@notLg": {
          gridTemplateColumns: "1fr 1fr",
        },
      },
      wide: {
        gap: "$100",
        "@notSm": {
          gridTemplateColumns: "repeat(3,1fr)",
        },
        "@sm": {
          gridTemplateColumns: "repeat( auto-fit, minmax(250px, 1fr) )",
          gridRowGap: "0",
        },
      },
    },
  },
});

export const ContentGrid = styled("div", {
  // responsible for content grids on subpages (pages without dividers, like resources subpages)
  display: "grid",
  margin: "$100 0 -$350",

  // variant styling for grids with different thumbnail sizes, square (2 columns) and wide (3 columns)
  variants: {
    size: {
      square: {
        gridTemplateColumns: "1fr",
        gridGap: "$025",
        "@notMd": {
          gridTemplateColumns: "1fr 1fr",
        },
      },
      wide: {
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        "@notLg": {
          gridTemplateColumns: "repeat(3,1fr)",
        },
      },
    },
  },
});

// Grid to compose the thumbnails in components/Thumbnail.js. 2 sizes, wide and square
export const ThumbnailGrid = styled("div", {
  width: "100%",
  display: "grid",
  paddingRight: "$025",

  variants: {
    size: {
      square: {
        gridTemplateColumns: "1fr 9fr",
        gridGap: "$100",
        "@notLg": {
          gridTemplateColumns: "1fr 6fr",
        },
      },
      wide: {
        gridGap: "$050",
        "@sm": {
          gridGap: "$075",
        },
      },
    },
  },
});
