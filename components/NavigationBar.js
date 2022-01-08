import { useState, useEffect } from "react";
import { styled } from "@washingtonpost/wpds-ui-kit";
import Link from "next/link";
import useScrollPosition from "~/hooks/useScrollPosition";
import Logo from "./logo";
import { ThemeToggle } from "./ThemeToggle";
import SearchForm from "./SearchForm";

const List = styled("ul", {
	display: "flex",
	gridColumn: "2",
	flexDirection: "row",
	listStyle: "none",
	width: "100%",
	justifyContent: "flex-end",
	margin: 0,
	padding: "$100 0",
	alignItems: "center",
	transition: "transform .5s",
	transform: "translateY(0)",
});

const Bar = styled("nav", {
	position: "fixed",
	zIndex: "$shell",
	display: "grid",
	gridTemplateColumns: "300px 1fr",
	right: 0,
	left: 0,
	alignItems: "center",
	"@md": {
		display: "none",
	},
	"@sm": {
		display: "none",
	},
	variants: {
		NavState: {
			show: {
				[`& ${List}`]: {
					transform: "translateY(0)",
					backgroundColor: "$secondary",
				},
			},
			hide: {
				[`& ${List}`]: {
					transform: "translateY(-100%)",
				},
			},
		},
	},

	defaultVariants: {
		NavState: "show",
	},
});

const Container = styled("div", {
	alignItems: "center",
	display: "flex",
});

const ListItem = styled("li", {
	display: "flex",
	flexDirection: "column",
	margin: "0 $200 0 0",
});

const Anchor = styled("a", {
	color: "$onSecondary",
	fontWeight: "bold",
	textDecoration: "none",
	"&:hover": {
		opacity: "0.75",
	},
});

export const NavigationBar = ({ children, showLogo, disableAnim = false }) => {
	const activePosition = useScrollPosition(disableAnim);

	// track the direction of the scroll so we can show/hide the navbar
	// if the last known scroll position is greater than the current position
	// we are scrolling down, otherwise we are scrolling up
	const [navState, setNavState] = useState("show");
	const [lastKnownPosition, setLastKnownPosition] = useState(0);

	useEffect(() => {
		if (activePosition >= lastKnownPosition) {
			setNavState("show");
		} else {
			setNavState("hide");
		}
		setTimeout(() => setLastKnownPosition(activePosition), 300);

		return () => {
			setNavState("show");
		};
	}, [activePosition, lastKnownPosition]);

	return (
		<>
			<Bar NavState={navState} id="bar">
				<Container
					css={{
						display: `${showLogo ? "flex" : "none"}`,
					}}
				>
					<Logo
						css={{
							padding: "$100 0",
							paddingLeft: "$200",
							marginRight: "$050",
						}}
					/>
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
			</Bar>
		</>
	);
};
