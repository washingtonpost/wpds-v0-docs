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
  const Panel = styled("div", {
    width: "300px",
    height: "100%",
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
    width: "100%"
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
  const ListText = styled("a", {
    fontFamily: "$meta",
    fontSize: "$100",
    color: "$accessible",
    textDecoration: "none",
    width: "100%",
    borderLeft: "0 solid",
    "&:focus": {
      outlineColor: "$signal",
      outlineStyle: "solid",
      outlineOffset: "4px",
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

  return (
    <Panel toggle={showSidebar ? "show" : "hide"}>
      <Container>
        <Header css={{ paddingLeft: "$200" }} as="h3">
          Foundations
        </Header>
        <SideBarList>
          {foundations.map(foundation => (
            <ListItem
              isCurrent={`${
                foundation.filePath.includes(current) ? "active" : ""
              }`}
              key={foundation.filePath}
            >
              <Link
                as={`/foundations/${foundation.filePath.replace(
                  /\.mdx?$/,
                  ""
                )}`}
                href={`/foundations/[slug]`}
                passHref
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

        <Header css={{ marginTop: "$200", paddingLeft: "$200" }} as="h3">
          Components
        </Header>
        <SideBarList>
          {docs.map(doc => (
            <ListItem
              isCurrent={`${doc.filePath.includes(current) ? "active" : ""}`}
              key={doc.filePath}
            >
              <Link
                as={`/components/${doc.filePath.replace(/\.mdx?$/, "")}`}
                href={`/components/[slug]`}
                passHref
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
