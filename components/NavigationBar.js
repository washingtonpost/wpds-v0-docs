import { Box, styled, theme } from "@washingtonpost/wpds-ui-kit";
import Link from "next/link";
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
	fontWeight: "bold",
	textDecoration: "none",
	"&:hover": {
		opacity: "0.75",
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
						<Anchor>Blog</Anchor>
					</Link>
				</ListItem>
				<ListItem>
					<Link href="/release-notes" passHref>
						<Anchor>Release Notes</Anchor>
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
