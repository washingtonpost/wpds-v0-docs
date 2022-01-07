import { styled } from "@washingtonpost/wpds-ui-kit";

const Layout = styled("div", {
	display: "grid",
	margin: "0 auto",

	"@md": {
		gridTemplateColumns: "1fr",
	},
	"@sm": {
		gridTemplateColumns: "1fr",
	},

	variants: {
		sidebar: {
			true: {
				"@notSm": {
					gridTemplateColumns: "300px 1fr",
				},
			},
			false: {
				"@notSm": {
					gridTemplateColumns: "1fr",
				},
			},
		},
	},

	defaultVariants: {
		sidebar: true,
	},
});

export default Layout;
