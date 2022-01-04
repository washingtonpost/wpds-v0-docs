import { styled } from "@washingtonpost/wpds-ui-kit";

export default function Layout({ children, noSidebar }) {
	const Layout = styled("div", {
		display: "grid",
		margin: "0 auto",

		"@notSm": {
			gridTemplateColumns: "300px 1fr",
		},
		"@md": {
			gridTemplateColumns: "1fr",
		},
		"@sm": {
			gridTemplateColumns: "1fr",
		},

		variants: {
			noSidebar: {
				true: {
					"@notSm": {
						gridTemplateColumns: "1fr",
					},
				},
			},
		},
	});
	return (
		<>
			<Layout className="wrapper" noSidebar={noSidebar}>
				{children}
			</Layout>
		</>
	);
}
