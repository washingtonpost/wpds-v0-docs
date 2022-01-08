import React, { useState } from "react";
import Link from "next/link";
import { styled } from "@washingtonpost/wpds-ui-kit";
import Header from "../../Typography/Headers";
import Logo from "../../logo";
import VersionButton from "../../versionButton";
import { useRouter } from "next/router";

/**Sidebar takes in @param foundations, @param docs and @param current and displays alls in the side
 * bar as links. The current will match the
 */
export default function Sidebar({ current, navigation }) {
	const [showMenu, setShowMenu] = useState(false);
	const router = useRouter();

	//Sidebar Container
	const Panel = styled("div", {
		position: "relative",
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
		borderLeft: "4px solid",
		borderColor: "transparent",
		"&:focus": {
			outlineColor: "$signal",
			outlineStyle: "solid",
			outlineWidth: "2px",
		},
		variants: {
			isCurrent: {
				active: {
					boxSizing: "content-box",
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
		marginLeft: "-4px",
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
					<LogoWrapper
						css={{
							marginBottom: "$150",
							"@notSm": {
								display: "none",
							},
							"@md": {
								display: "unset",
							},
						}}
					>
						<Logo />
						<VersionButton css={{ marginRight: "$050" }} />
					</LogoWrapper>
				</NavBarWrapper>
			</Container>
			<Container
				css={{
					"@notSm": { marginTop: "$300" },
					"@md": { marginTop: "0" },
				}}
				toggle={showMenu ? "show" : "hide"}
			>
				{/** map over navigation array for each category */}
				{navigation &&
					navigation.map((nav, index) => {
						return (
							<div key={index}>
								<Header
									css={{
										textTransform: "capitalize",
										paddingLeft: "$200",
									}}
									as="h3"
								>
									{nav.category}
								</Header>
								<SideBarList>
									{nav.docs.map((item, index) => {
										return (
											<Link
												href={item.slug}
												key={index}
												passHref
											>
												<ListItem
													tabIndex={0}
													isCurrent={
														router.asPath ===
														item.slug
															? "active"
															: ""
													}
												>
													<CustomLink
														isCurrent={
															router.asPath ===
															item.slug
																? "active"
																: ""
														}
													>
														{item.data.title}
													</CustomLink>
												</ListItem>
											</Link>
										);
									})}
								</SideBarList>
							</div>
						);
					})}
			</Container>
		</Panel>
	);
}
