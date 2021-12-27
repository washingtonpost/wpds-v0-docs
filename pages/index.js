import { VisuallyHidden, styled } from "@washingtonpost/wpds-ui-kit";

export default function Index({ posts, docs, foundations, release_notes }) {
  const Boop = styled("span", {
    position: "absolute",
    border: 0,
    padding: 0,
    whiteSpace: "nowrap",
    wordWrap: "normal",
    width: 1,
    height: 1,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    color: "currentColor",

    // display label to screen when focused or active
    "&:active": {
      clip: "auto",
      height: "auto",
      width: "auto",
      margin: 0,
      overflow: "visible",
      position: "static"
    },
    "&:focus": {
      clip: "auto",
      height: "auto",
      width: "auto",
      margin: 0,
      overflow: "visible",
      position: "static"
    }
  });

  return (
    <>
      <VisuallyHidden>This should not flash on first page load.</VisuallyHidden>
      <Boop>This should really not flash at all</Boop>
    </>
  );
}
