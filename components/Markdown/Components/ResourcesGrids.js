import { styled, theme } from "@washingtonpost/wpds-ui-kit";

export const LandingGrid = styled("div", {
  // base styling for the grid -> applies to the 3-column grids for what's new, tutorials, workshops
  display: "grid",
  gap: "$100",
  "@notSm": {
    gridTemplateColumns: "repeat(3,1fr)",
  },
  "@sm": {
    gridTemplateColumns: "repeat( auto-fit, minmax(250px, 1fr) )",
    gridRowGap: "0",
  },

  // variant styling for guides section and the what's new section
  variants: {
    type: {
      Guides: {
        gridTemplateColumns: "1fr",
        gridColumnGap: "$300",
        gridRowGap: "0",
        "@notLg": {
          gridTemplateColumns: "1fr 1fr",
        },
      },
      New: { marginTop: "-$075" },
    },
  },
});

export const SubPageGrid = styled("div", {
  // base styling for the grid -> applies to the 3-column grids for tutorials and workshops subpages
  margin: "$100 0 -$350",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  "@notLg": {
    gridTemplateColumns: "repeat(3,1fr)",
  },

  // variant styling for guides subpage
  variants: {
    type: {
      guides: {
        gridTemplateColumns: "1fr",
        gridGap: "$025",
        "@notMd": {
          gridTemplateColumns: "1fr 1fr",
        },
      },
    },
  },
});

// Grid to compose the thumbnails in components/Thumbnail.js
export const ThumbnailGrid = styled("div", {
  width: "100%",
  display: "grid",
  variants: {
    type: {
      full: {
        gridTemplateColumns: "1fr",
        gridGap: "$050",
        paddingRight: "$025",
        "@sm": {
          gridGap: "$075",
        },
      },
      mini: {
        gridTemplateColumns: "1fr 9fr",
        gridGap: "$100",
        "@notLg": {
          gridTemplateColumns: "1fr 6fr",
        },
      },
    },
  },
});
