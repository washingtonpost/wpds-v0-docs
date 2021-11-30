import { styled } from "@washingtonpost/ui-theme";
const Headline = styled("h1", {
  fontSize: "$300",
  fontFamily: "$headline",
  variants: {
    as: {
      h2: {
        fontSize: "$200",
        marginBottom: "$100"
      },
      h3: {
        fontSize: "$150",
        fontFamily: "$subhead",
        marginBottom: "$050"
      },
      h4: {
        fontSize: "$100",
        fontWeight: "$bold",
        fontFamily: "$meta"
      }
    }
  }
});

export default Headline;
