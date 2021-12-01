import React, { useState } from "react";
import Link from "next/link";
import { styled, keyframes } from "@washingtonpost/ui-theme";
import Header from "../../Typography/Headers";

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
  const Panel = styled("aside", {
    position: "relative",
    width: "300px",
    height: "100%",
    minHeight: "100vh",
    backgroundColor: "$gray500",
    padding: "$200",
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
    position: "fixed"
  });
  //List in sidebars
  const SideBarList = styled("ul", {
    listStyle: "none",
    paddingLeft: "0",
    marginLeft: "0"
  });
  const ListItem = styled("li", {
    marginBottom: "$050"
  });
  //Links in sidebar
  const ListText = styled("a", {
    fontFamily: "$meta",
    fontSize: "$100",
    color: "$accessible",
    textDecoration: "none",
    cursor: "pointer",
    variants: {
      isCurrent: {
        active: { fontWeight: "$bold", color: "$primary" }
      }
    }
  });

  return (
    <Panel toggle={showSidebar ? "show" : "hide"}>
      <Container>
        <Header as="h3">Foundations</Header>
        <SideBarList>
          {foundations.map(foundation => (
            <ListItem key={foundation.filePath}>
              <Link
                as={`/foundations/${foundation.filePath.replace(
                  /\.mdx?$/,
                  ""
                )}`}
                href={`/foundations/[slug]`}
              >
                <ListText
                  isCurrent={`${
                    foundation.filePath.includes(current) ? "active" : ""
                  }`}
                >
                  {foundation.data.title}
                </ListText>
              </Link>
            </ListItem>
          ))}
        </SideBarList>
        <Header css={{ marginTop: "$200" }} as="h3">
          Components
        </Header>
        <SideBarList>
          {docs.map(doc => (
            <ListItem key={doc.filePath}>
              <Link
                as={`/components/${doc.filePath.replace(/\.mdx?$/, "")}`}
                href={`/components/[slug]`}
              >
                <ListText
                  isCurrent={`${
                    doc.filePath.includes(current) ? "active" : ""
                  }`}
                >
                  {doc.data.title}
                </ListText>
              </Link>
            </ListItem>
          ))}
        </SideBarList>
      </Container>
    </Panel>
  );
}
