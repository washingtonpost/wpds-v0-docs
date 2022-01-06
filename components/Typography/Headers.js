import { styled } from "@washingtonpost/wpds-ui-kit";
const Header = styled("h1", {
	fontSize: "$300",
	fontFamily: "$headline",
	color: "$primary",
	variants: {
		as: {
			h2: {
				fontSize: "$175",
			},
			h3: {
				fontSize: "$125",
				fontFamily: "$subhead",
				fontWeight: "$bold",
				marginBottom: "$025",
				marginTop: "$100",
			},
			h4: {
				fontSize: "$100",
				fontWeight: "$bold",
				fontFamily: "$meta",
			},
		},
	},
});

export default Header;
