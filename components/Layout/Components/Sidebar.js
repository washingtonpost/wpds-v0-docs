import React from "react";
import Link from "next/link";
import { styled, theme } from "@washingtonpost/wpds-ui-kit";
import Header from "../../Typography/Headers";
import * as Accordion from "@radix-ui/react-accordion";
import ChevronDown from "@washingtonpost/wpds-assets/asset/chevron-down";
import { useRouter } from "next/router";
import { P } from "~/components/Markdown/Styling";

const Panel = styled("div", {
  backgroundColor: "$gray500",
  "@notSm": {
    position: "relative",
    height: "100%",
    overflow: "hidden",
    overflowY: "auto",
    minHeight: "100vh",
  },
  "@sm": {
    width: "100%",
  },
});

//Container
const Container = styled("div", {
  padding: "$100 0",
  "@md": { marginTop: "0" },
  "@notSm": {
    width: "300px",
    position: "fixed",
  },
});

const AccordionTrigger = styled(Accordion.Trigger, {
  border: "none",
  display: "flex",
  width: "100%",
  alignItems: "center",
  justifyItems: "flex-start",
  textAlign: "left",
  paddingRight: "$150",
  backgroundColor: "transparent",
});

const AccordionHeader = styled(Header, {
  width: "100%",
  justifySelf: "flex-start",
});

const AccordionChevron = styled(ChevronDown, {
	height: 16,
	fill: theme.colors.accessible,
	justifySelf: "flex-end",
	transition: "transform 300ms",
	"[data-state=open] &": { transform: "rotate(180deg)" },
});

//List in sidebars Accordion Content
const SideBarList = styled("ul", {
  listStyle: "none",
  paddingLeft: "0",
  marginLeft: "0",
});

const ListItem = styled("li", {
  color: "$accessible",
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
        color: "$onSecondary",
        borderLeft: "4px solid",
        borderColor: "$primary",
        backgroundColor: "$gray400",
      },
    },
    disabled: {
      true: {
        cursor: "unset",
      },
    },
  },
});

//Links in sidebar
const CustomLink = styled("a", {
  fontFamily: "$meta",
  display: "block",
  fontSize: "$100",
  color: "inherit",
  textDecoration: "none",
  width: "100%",
  borderLeft: "0 solid",
  marginLeft: "-4px",
  padding: "$050 $050 $050 $125",
  "&:focus": {
    outlineColor: "$signal",
    outlineStyle: "solid",
    outlineOffset: "2px",
    outlineWidth: "2px",
  },
  variants: {
    disabled: {
      true: {
        color: "$onDisabled",
      },
    },
  },
});

export default function Sidebar({ navigation }) {
  const router = useRouter();

  return (
    <Panel id="open-nav">
      <Container>
        {navigation &&
          navigation.map((nav, index) => {
            return (
              <Accordion.Root
                key={index}
                defaultValue={nav.category}
                type="single"
                collapsible
              >
                <Accordion.Item value={nav.category}>
                  <Accordion.Header>
                    <AccordionTrigger>
                      <AccordionHeader
                        css={{
                          textTransform: "capitalize",
                          width: "100%",
                          padding: "$050 0 $050 $125",
                          "@sm": {
                            cursor: "pointer",
                          },
                        }}
                        as="h4"
                      >
                        {nav.category}
                      </AccordionHeader>
                      <AccordionChevron aria-hidden />
                    </AccordionTrigger>
                  </Accordion.Header>
                  <Accordion.Content>
                    <SideBarList>
                      {nav.docs.map((item, index) => {
                        return (
                          <ListItem
                            key={index}
                            isCurrent={
                              router.asPath.includes(item.slug) ? "active" : ""
                            }
                            disabled={item.data.status === "Coming soon"}
                          >
                            {item.data.status === "Coming soon" ? (
                              <CustomLink
                                as="div"
                                css={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignContent: "center",
                                  alignItems: "center",
                                }}
                                disabled
                              >
                                <div>{item.data.title}</div>
                                <P
                                  small
                                  css={{
                                    paddingBottom: "0",
                                    color: "$accessible",
                                    borderRadius: "$050",
                                    padding: "$025",
                                    backgroundColor: "$gray400",
                                  }}
                                >
                                  Coming soon
                                </P>
                              </CustomLink>
                            ) : (
                              <Link href={item.slug} passHref>
                                <CustomLink>{item.data.title}</CustomLink>
                              </Link>
                            )}
                          </ListItem>
                        );
                      })}
                    </SideBarList>
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion.Root>
            );
          })}
        <SideBarList css={{ "@notSm": { display: "none" } }}>
          <ListItem isCurrent={router.asPath.includes("blog") ? "active" : ""}>
            <Link href="/blog" passHref>
              <Header>
                <CustomLink css={{ color: "$primary" }}>Blog</CustomLink>
              </Header>
            </Link>
          </ListItem>
          <ListItem
            isCurrent={router.asPath.includes("release-notes") ? "active" : ""}
          >
            <Link href="/release-notes" passHref>
              <Header>
                <CustomLink css={{ color: "$primary" }}>
                  Release Notes
                </CustomLink>
              </Header>
            </Link>
          </ListItem>
        </SideBarList>
      </Container>
    </Panel>
  );
}
