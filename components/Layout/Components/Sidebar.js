import React, { useState } from "react";
import Link from "next/link";
import { styled } from "@washingtonpost/wpds-ui-kit";
import Header from "../../Typography/Headers";
import Logo from "../../logo";
import VersionButton from "../../versionButton";
import { ThemeToggle } from "~/components/ThemeToggle";
import { useRouter } from "next/router";

/**Sidebar takes in @param foundations, @param docs and @param current and displays alls in the side
 * bar as links. The current will match the
 */
export default function Sidebar({ current, docs }) {
	const [showMenu, setShowMenu] = useState(false);
	const router = useRouter();

	//Sidebar Container
	const Panel = styled("div", {
		position: "relative",
		zIndex: "$offer",
		width: "300px",
		height: "100%",
		overflow: "hidden",
		overflowY: "auto",
		minHeight: "100vh",
		backgroundColor: "$gray500",
		padding: "$100 0 $200 0",
		"@sm": {
			width: "100%",
			minHeight: "unset",
			overflowY: "hidden",
		},
		"@md": {
			width: "100%",
			minHeight: "unset",
			overflowY: "hidden",
		},
		variants: {
			toggle: {
				hide: {
					"@sm": {
						height: "80px",
						backgroundColor: "transparent",
					},
					"@md": {
						height: "80px",
						backgroundColor: "transparent",
					},
				},
				show: {
					"@sm": {
						height: "auto",
						backgroundColor: "$gray500",
					},
					"@md": {
						height: "auto",
						backgroundColor: "$gray500",
					},
				},
			},
		},
	});

	//Container
	const Container = styled("div", {
		width: "300px",
		position: "fixed",
		"@sm": {
			position: "relative",
			width: "100%",
		},
		"@md": {
			position: "relative",
			width: "100%",
			height: "auto",
		},
		variants: {
			toggle: {
				hide: {
					"@sm": {
						display: "none",
					},
					"@md": {
						display: "none",
					},
				},
				show: {
					"@sm": {
						display: "block",
					},
					"@md": {
						display: "block",
					},
				},
			},
		},
	});

	//List in sidebars
	const SideBarList = styled("ul", {
		listStyle: "none",
		paddingLeft: "0",
		marginLeft: "0",
		height: "auto",
	});

	const ListItem = styled("li", {
		color: "$primary",
		padding: "$050 $050 $050 $200",
		cursor: "pointer",
		"&:focus": {
			outlineColor: "$signal",
			outlineStyle: "solid",
			outlineWidth: "2px",
		},
		variants: {
			isCurrent: {
				active: {
					color: "$primary",
					borderLeft: "4px solid",
					borderColor: "$primary",
					backgroundColor: "$subtle",
				},
			},
		},
	});

	//Links in sidebar
	const CustomLink = styled("a", {
		fontFamily: "$meta",
		display: "block",
		fontSize: "$100",
		color: "$accessible",
		textDecoration: "none",
		width: "100%",
		borderLeft: "0 solid",
		"&:focus": {
			outlineColor: "$signal",
			outlineStyle: "solid",
			outlineOffset: "2px",
			outlineWidth: "2px",
		},
		variants: {
			isCurrent: {
				active: {
					color: "$primary",
					margin: "-$025",
				},
			},
		},
	});
	//For mobile nav
	const NavBarWrapper = styled("div", {
		width: "100%",
		display: "flex",
		padding: "0 0 0 $200 ",
		"@sm": {
			paddingRight: "$200",
		},
		"@md": {
			paddingRight: "$200",
		},
	});
	const LogoWrapper = styled("div", {
		display: "flex",
		alignItems: "center",
		width: "100%",
		"@sm": {
			justifyContent: "flex-end",
		},
		"@md": {
			justifyContent: "flex-end",
		},
	});
	//Only shows in mobile
	const MenuButton = styled("button", {
		height: "$200",
		width: "$200",
		display: "flex",
		backgroundColor: "transparent",
		borderStyle: "none",
		"@notSm": {
			display: "none",
		},
		"@md": {
			alignSelf: "flex-start",
			display: "block",
		},
	});

	return (
		<Panel toggle={showMenu ? "show" : "hide"}>
			<Container>
				<NavBarWrapper>
					<MenuButton onClick={() => setShowMenu(!showMenu)}>
						<svg viewBox="0 0 100 80" width="100%" height="100%">
							<rect fill="#666666" width="100" height="12"></rect>
							<rect
								fill="#666666"
								y="30"
								width="100"
								height="12"
							></rect>
							<rect
								fill="#666666"
								y="60"
								width="100"
								height="12"
							></rect>
						</svg>
					</MenuButton>
					<LogoWrapper css={{ marginBottom: "$150" }}>
						<Logo />
						<VersionButton css={{ marginRight: "$050" }} />
						<ThemeToggle />
					</LogoWrapper>
				</NavBarWrapper>
			</Container>
			<Container
				css={{
					"@notSm": { marginTop: "$400" },
					"@md": { marginTop: "0" },
				}}
				toggle={showMenu ? "show" : "hide"}
			>
				<Header
					css={{ textTransform: "capitalize", paddingLeft: "$200" }}
					as="h3"
				>
					{docs.label}
				</Header>
				<SideBarList>
					{docs.files.map((file, i) => (
						<Link
							key={file.filePath}
							as={`/${docs.root}/${file.filePath.replace(
								/\.mdx?$/,
								""
							)}`}
							href={`/${docs.root}/[slug]`}
							passHref
						>
							<ListItem
								tabIndex={0}
								isCurrent={`${
									file.filePath.includes(current)
										? "active"
										: ""
								}`}
							>
								<CustomLink
									isCurrent={`${
										file.filePath.includes(current)
											? "active"
											: ""
									}`}
								>
									{file.data.title}
								</CustomLink>
							</ListItem>
						</Link>
					))}

					{docs.label === "foundations" && (
						<Link href="/foundations/assets" passHref>
							<ListItem
								tabIndex={0}
								isCurrent={
									router.pathname.includes("assets") &&
									"active"
								}
							>
								<CustomLink
									isCurrent={
										router.pathname.includes("assets") &&
										"active"
									}
								>
									Assets
								</CustomLink>
							</ListItem>
						</Link>
					)}
				</SideBarList>
			</Container>
		</Panel>
	);
}
