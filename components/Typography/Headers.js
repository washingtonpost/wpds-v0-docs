import { styled } from "@washingtonpost/ui-theme";
const Header = styled("h1", {
  fontSize: "$300",
  fontFamily: "$headline",
  variants: {
    as: {
      h2: {
        fontSize: "$150",
        marginBottom: "$050"
      },
      h3: {
        fontSize: "$125",
        fontFamily: "$subhead",
        fontWeight: "$bold",
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

export default Header;
