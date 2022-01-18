import { Box, styled, theme } from "@washingtonpost/wpds-ui-kit";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "./logo";
import { ThemeToggle } from "./ThemeToggle";
import SearchForm from "./SearchForm";

const List = styled("ul", {
	gridArea: "nav",
	display: "flex",
	flexDirection: "row",
	listStyle: "none",
	justifyContent: "flex-end",
	alignItems: "center",

	"@notSm": {
		top: 0,
		position: "sticky",
		zIndex: "$shell",
		background: theme.colors.secondary,
		height: 60,
	},

	"@sm": {
		display: "none",
	},
});

const Container = styled("div", {
	alignItems: "center",
	display: "flex",
	gridArea: "logo",

	"@notSm": {
		backgroundColor: "$gray500",
		overflow: "hidden",
		position: "fixed",
		zIndex: "$shell",
		top: 0,
		right: 0,
		left: 0,
		width: "300px",
		height: 60,
	},

	"@sm": {
		width: "100%",
	},
});

const ListItem = styled("li", {
	display: "flex",
	flexDirection: "column",
	margin: "0 $200 0 0",

	"@sm": {
		margin: "0",
		display: "none",
	},
});

const Anchor = styled("a", {
	color: "$onSecondary",
	textDecoration: "none",
	"&:hover": {
		opacity: "0.75",
	},

	variants: {
		isCurrent: {
			true: {
				fontWeight: "$bold",
			},
		},
	},
});

const ToggleSidebar = () => {
	return (
		<>
			<a
				href="#open-nav"
				id="sidenav-button"
				title="Open Menu"
				aria-label="Open Menu"
			>
				☰
			</a>

			<a
				href="#"
				id="sidebar-close"
				title="Close Menu"
				aria-label="Close Menu"
				onClick={() => {
					document.location.hash = "";
				}}
			>
				close
			</a>
		</>
	);
};

export const NavigationBar = ({ children }) => {
	const router = useRouter();

	return (
		<>
			<Container>
				<Logo />
				<Box
					css={{
						"@notSm": {
							display: "none",
						},
					}}
				>
					<ThemeToggle />
					<ToggleSidebar />
				</Box>
			</Container>
			<List>
				<ListItem>
					<SearchForm />
				</ListItem>
				<ListItem>
					<Link href="/blog" passHref>
						<Anchor isCurrent={router.asPath.includes("/blog")}>
							Blog
						</Anchor>
					</Link>
				</ListItem>
				<ListItem>
					<Link href="/release-notes" passHref>
						<Anchor
							isCurrent={router.asPath.includes("/release-notes")}
						>
							Release Notes
						</Anchor>
					</Link>
				</ListItem>
				<ListItem>
					<ThemeToggle />
				</ListItem>
			</List>
			{children}
		</>
	);
};
