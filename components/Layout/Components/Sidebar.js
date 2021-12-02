import React, { useState } from "react";
import Link from "next/link";
import { styled, keyframes } from "@washingtonpost/ui-theme";
import Header from "../../Typography/Headers";
import Logo from "../../logo";
import VersionButton from "../../versionButton";
/**Sidebar takes in @param foundations, @param docs and @param current and displays alls in the side
 * bar as links. The current will match the
 */
export default function Sidebar({ current, foundations, docs, showSidebar }) {
  //Handles animation for sidebar drawer
  const togglePanel = keyframes({
    from: { transform: "translateX(0%)" },
    to: { transform: "translateX(-100%)" }
  });
  //Sidebar Container
  const Panel = styled("div", {
    position: "relative",
    width: "300px",
    height: "100%",
    overflow: "hidden",
    minHeight: "100vh",
    backgroundColor: "$gray500",
    padding: "$200 0 $200 0",
    "@sm": {
      position: "absolute"
    },
    "&.title": {
      color: "$red100"
    },
    variants: {
      toggle: {
        hide: {
          "@sm": {
            animation: `${togglePanel} 200ms normal`,
            animationFillMode: "forwards"
          }
        },
        show: {
          "@sm": {
            animation: `${togglePanel} 200ms reverse`,
            animationFillMode: "forwards"
          }
        }
      }
    }
  });
  //Container
  const Container = styled("div", {
    width: "100%",
    position: "absolute"
  });
  //List in sidebars
  const SideBarList = styled("ul", {
    listStyle: "none",
    paddingLeft: "0",
    marginLeft: "0",
    height: "auto"
  });

  const ListItem = styled("li", {
    color: "$primary",
    padding: "$050 $050 $050 $200",
    cursor: "pointer",
    "&:focus": {
      outlineColor: "$signal",
      outlineStyle: "solid",
      outlineOffset: "2px",
      outlineWidth: "2px"
    },
    variants: {
      isCurrent: {
        active: {
          color: "$primary",
          borderLeft: "4px solid",
          borderColor: "$primary",
          backgroundColor: "$subtle"
        }
      }
    }
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
      outlineWidth: "2px"
    },
    variants: {
      isCurrent: {
        active: {
          color: "$primary"
        }
      }
    }
  });

  const LogoWrapper = styled("div", {
    display: "flex",
    alignItems: "center"
  });

  return (
    <Panel toggle={showSidebar ? "show" : "hide"}>
      <Container>
        <LogoWrapper css={{ paddingLeft: "$200", marginBottom: "$150" }}>
          <Logo />
          <VersionButton />
        </LogoWrapper>
        <Header css={{ paddingLeft: "$200" }} as="h3">
          Foundations
        </Header>
        <SideBarList>
          {foundations.map((foundation, i) => (
            <Link
              key={foundation.filePath}
              as={`/foundations/${foundation.filePath.replace(/\.mdx?$/, "")}`}
              href={`/foundations/[slug]`}
              passHref
            >
              <ListItem
                tabIndex={0}
                isCurrent={`${
                  foundation.filePath.includes(current) ? "active" : ""
                }`}
              >
                <CustomLink
                  isCurrent={`${
                    foundation.filePath.includes(current) ? "active" : ""
                  }`}
                >
                  {foundation.data.title}
                </CustomLink>
              </ListItem>
            </Link>
          ))}
        </SideBarList>

        <Header css={{ marginTop: "$200", paddingLeft: "$200" }} as="h3">
          Components
        </Header>
        <SideBarList>
          {docs.map(doc => (
            <Link
              key={doc.filePath}
              as={`/components/${doc.filePath.replace(/\.mdx?$/, "")}`}
              href={`/components/[slug]`}
              passHref
            >
              <ListItem
                tabIndex={0}
                isCurrent={`${doc.filePath.includes(current) ? "active" : ""}`}
              >
                <CustomLink
                  isCurrent={`${
                    doc.filePath.includes(current) ? "active" : ""
                  }`}
                >
                  {doc.data.title}
                </CustomLink>
              </ListItem>
            </Link>
          ))}
        </SideBarList>
      </Container>
    </Panel>
  );
}
