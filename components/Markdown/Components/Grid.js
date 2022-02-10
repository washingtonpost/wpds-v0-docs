import { styled, theme } from "@washingtonpost/wpds-ui-kit";

export const Grid = ({ maxSize, children }) => {
  const GridObject = styled("div", {
    display: "grid",
    gridTemplateColumns: `repeat(auto-fill, minmax(${
      maxSize ? `${maxSize}px` : "50px"
    }, 1fr) )`,
    gridGap: theme.space[100],
    gridAutoFlow: "row dense",
  });
  return <GridObject>{children}</GridObject>;
};

export const Cell = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
