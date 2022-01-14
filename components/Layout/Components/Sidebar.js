import React, { useState } from "react";
// import Link from "next/link";
import { styled } from "@washingtonpost/wpds-ui-kit";
import Header from "../../Typography/Headers";
// import Logo from "../../logo";
// import VersionButton from "../../versionButton";
import { useRouter } from "next/router";

const Panel = styled("div", {
	gridArea: "sidebar",
	backgroundColor: "$gray500",

	"@notSm": {
		position: "relative",
		height: "100%",
		overflow: "hidden",
		overflowY: "auto",
		minHeight: "100vh",
		padding: "$125 0 $200 0",
	},

	"@sm": {
		width: "100%",
	},
});

//Container
const Container = styled("div", {
	"@notSm": {
		width: "300px",
		position: "fixed",
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
	padding: "$050 $050 $050 $125",
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
				backgroundColor: "$gray400",
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
	padding: "0 0 0 $100",
	"@sm": {
		paddingRight: "$200",
	},
	"@md": {
		paddingRight: "$200",
	},
});
// const LogoWrapper = styled("div", {
// 	display: "flex",
// 	alignItems: "center",
// 	width: "100%",
// 	"@sm": {
// 		justifyContent: "flex-end",
// 	},
// 	"@md": {
// 		justifyContent: "flex-end",
// 	},
// });
// //Only shows in mobile
// const MenuButton = styled("button", {
// 	height: "$200",
// 	width: "$200",
// 	display: "flex",
// 	backgroundColor: "transparent",
// 	borderStyle: "none",
// 	"@notSm": {
// 		display: "none",
// 	},
// 	"@md": {
// 		alignSelf: "flex-start",
// 		display: "block",
// 	},
// });

/**Sidebar takes in @param foundations, @param docs and @param current and displays alls in the side
 * bar as links. The current will match the
 */
export default function Sidebar({ current, navigation }) {
	const router = useRouter();

	// when esc key is pressed, close the menu
	// const handleKeyDown = (e) => {
	// 	if (e.keyCode === 27) {
	// 		document.location.hash = "";
	// 	}
	// };

	// React.useEffect(() => {
	// 	document.addEventListener("keydown", handleKeyDown);
	// 	return () => {
	// 		document.removeEventListener("keydown", handleKeyDown);
	// 	};
	// }, []);

	return (
		<Panel id="open-nav">
			<Container>
				<NavBarWrapper>
					{/* <MenuButton onClick={() => setShowMenu(!showMenu)}>
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
					</MenuButton> */}
					{/* <LogoWrapper
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
					</LogoWrapper> */}
				</NavBarWrapper>
			</Container>
			<Container
				css={{
					"@md": { marginTop: "0" },
				}}
			>
				{navigation &&
					navigation.map((nav, index) => {
						return (
							<div key={index}>
								<Header
									css={{
										textTransform: "capitalize",
										padding: "$050 0 $050 $125",
									}}
									as="h4"
								>
									{nav.category}
								</Header>
								<SideBarList>
									{nav.docs.map((item, index) => {
										return (
											<ListItem
												key={index}
												isCurrent={
													router.asPath.includes(
														item.slug
													)
														? "active"
														: ""
												}
											>
												<CustomLink
													href={item.slug}
													passHref
													isCurrent={
														router.asPath.includes(
															item.slug
														)
															? "active"
															: ""
													}
												>
													{item.data.title}
												</CustomLink>
											</ListItem>
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
