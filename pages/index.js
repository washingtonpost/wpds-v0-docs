import React, { useEffect, useState } from "react";
import { getAllDocs, getNavigation } from "~/services";
import { AlertBanner, Box, styled, theme } from "@washingtonpost/wpds-ui-kit";
import Header from "~/components/Markdown/Components/headers";
import { List, ListItem } from "~/components/Markdown/Components/list";
import CustomLink from "~/components/Markdown/Components/link";
export default function Index({ recentPosts }) {
  const Grid = styled("div", {
    display: "grid",
    gap: "$100",
    "@notSm": {
      gridTemplateColumns: "repeat(3,1fr)",
    },
    "@sm": {
      gridTemplateColumns: "1fr",
    },
  });
  const HeroBlock = styled("div", {
    gridColumn: "span 2",
    minHeight: "50vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "@md": {
      gridColumn: "span 3",
    },
    "@sm": {
      gridColumn: "span 1",
    },
  });
  const P = styled("p", {
    color: theme.colors.accessible,
    fontSize: theme.fontSizes[100],
    fontWeight: theme.fontWeights.light,
    lineHeight: theme.lineHeights[125],
    marginBottom: theme.sizes[150],
  });
  return (
    <Grid>
      <HeroBlock>
        <Header as="h1">Welcome</Header>
        <P css={{ fontSize: "$125" }}>
          The Washington Post Design System (WPDS) is a growing library of
          design tokens and interactive components purpose-built for
          washingtonpost.com.
        </P>
        <P css={{ fontSize: "$125" }}>
          WPDS enables designers and developers at the Post to ship
          reader-facing digital products that are modular, elegant and
          accessible while maintaining visual consistency at scale.
        </P>
      </HeroBlock>
      <Box
        css={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingTop: "$225",
          "@md": { display: "none" },
          "@sm": { display: "none" },
        }}
      >
        <Header as="h4">WPDS Resources</Header>
        <List>
          {recentPosts &&
            recentPosts.map((post, i) => {
              return (
                <ListItem css={{ display: `${i > 5 ? "none" : ""}` }} key={i}>
                  <P
                    css={{
                      color: theme.colors.primary,
                      fontSize: theme.fontSizes["075"],
                      fontWeight: theme.fontWeights.bold,
                      marginBottom: "0",
                    }}
                  >
                    {post.data.publishDate}
                  </P>
                  <CustomLink css={{ fontSize: "075" }} href={post.slug}>
                    {post.data.title}
                  </CustomLink>
                </ListItem>
              );
            })}
        </List>
      </Box>
      <Box
        css={{
          gridColumn: "1/-1",
        }}
      >
        <Header
          as="h2"
          css={{
            borderTop: "1px solid $subtle",
            paddingTop: "$100",
            "@sm": { paddingBottom: "0", marginBottom: 0 },
          }}
        >
          Getting started
        </Header>
      </Box>
      <Box css={{ position: "relative" }}>
        <Header as="h3">Foundations</Header>
        <P css={{ paddingBottom: "$200" }}>
          Learn about design tokens what they are, how they work and the
          advantages they bring to a design system. Plus: a list of all
          currently supported tokens.
        </P>
        <CustomLink
          css={{
            bottom: 0,
            position: "absolute",
            fontWeight: "bold",
            textDecoration: "underline",
          }}
          href={"/foundations/principles"}
        >
          Get started with Foundations
        </CustomLink>
      </Box>
      <Box css={{ position: "relative" }}>
        <Header as="h3">Components</Header>
        <P css={{ paddingBottom: "$200" }}>
          Dive deeper into our component documentation including design
          examples, usage guidelines and best-practices for technical
          implementation.
        </P>
        <CustomLink
          css={{
            bottom: 0,
            position: "absolute",
            fontWeight: "bold",
            textDecoration: "underline",
          }}
          href={"/components/alert-banner"}
        >
          Get started with Foundations
        </CustomLink>
      </Box>
      <Box css={{ height: "100%", position: "relative" }}>
        <Header as="h3">Guides</Header>
        <P css={{ paddingBottom: "$200" }}>
          Get familiar with the WPDS ecosystem by using one of our handy how-to
          guides. Learn more about integrations with Figma, Zeplin, and React.
        </P>
        <CustomLink
          css={{
            bottom: 0,
            position: "absolute",
            fontWeight: "bold",
            textDecoration: "underline",
          }}
          href={"/resources/guides"}
        >
          Get started with Foundations
        </CustomLink>
      </Box>
      <Box css={{ marginTop: "$200", gridColumn: "1/-1" }}>
        <AlertBanner.Root>
          <AlertBanner.Content>
            <Box as="span">🧐 </Box>
            Looking for documentation for our legacy design system? Visit the{" "}
            <CustomLink
              css={{ textDecoration: "underline" }}
              href="build.washingtonpost.com"
            >
              WPDS v0 docs site.
            </CustomLink>
          </AlertBanner.Content>
        </AlertBanner.Root>
      </Box>
    </Grid>
  );
}

export async function getStaticProps() {
  const posts = await getAllDocs();
  const navigation = await getNavigation();

  let recentPosts = [];
  posts.map((post) => {
    if (post.slug.includes("resources")) {
      recentPosts.push(post);
    }
  });
  recentPosts.sort((a, b) => {
    return new Date(a.data.publishDate) - new Date(b.data.publishDate);
  });
  recentPosts.reverse();
  const threshold = 4;
  if (recentPosts.length > threshold) {
    const amountOver = recentPosts.length - threshold;
    recentPosts.splice(threshold, amountOver);
  }
  return {
    props: { recentPosts, navigation },
  };
}
