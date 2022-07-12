import React from "react";
import { Box, styled, theme } from "@washingtonpost/wpds-ui-kit";

import { getAllDocs, getNavigation } from "~/services";
import Header from "~/components/Markdown/Components/headers";
import { List, ListItem } from "~/components/Markdown/Components/list";
import CustomLink from "~/components/Markdown/Components/link";
import { LandingContentGrid } from "~/components/Markdown/Components/ResourcesGrids";
import { SeeAllLink } from "./utils";

import Image from "next/image";

const GridTwoColumns = styled("div", {
  display: "grid",
  gap: "$200",
  "@notSm": {
    gridTemplateColumns: "repeat(2,1fr)",
  },
  "@sm": {
    gap: "$100",
    gridTemplateColumns: "1fr",
  },
});

const HeroBlock = styled("div", {
  gridColumn: "span 2",
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
});

const BoldTextLooksLikeLink = styled("span", {
  fontWeight: "bold",
  textDecoration: "underline",
  marginTop: theme.sizes[100],
  "@notSm": {
    bottom: 0,
    position: "absolute",
  },
});

const Index = ({ recentPosts }) => {
  return (
    <>
      <LandingContentGrid size={"wide"}>
        <Box
          css={{
            gridColumn: "span 2",
            "@sm": {
              gridColumn: "span 1",
            },
          }}
        >
          <Header as="h1">Welcome</Header>
        </Box>
        <Box
          css={{
            display: "flex",
            alignItems: "flex-end",
            "@md": { display: "none" },
            "@sm": { display: "none" },
          }}
        >
          <Header href="/resources" as="h3">
            What&apos;s new
          </Header>
        </Box>
        <HeroBlock>
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
            "@md": { display: "none" },
            "@sm": { display: "none" },
          }}
        >
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
              marginTop: theme.sizes[200],
              paddingTop: theme.sizes[100],
              "@sm": { paddingBottom: theme.sizes[100], marginBottom: 0 },
            }}
          >
            Getting started
          </Header>
        </Box>
        <Box
          css={{
            position: "relative",
            "@md": {
              gridColumn: "1/-1",
            },
            "@sm": {
              marginBottom: theme.sizes[200],
            },
          }}
        >
          <CustomLink href="/foundations">
            <Image
              height="160"
              width="320"
              layout="responsive"
              src="/img/sections/foundations.png"
              alt="Image shows the word 'Foundations' in large bold letters in front of two squiggly cirles. The words 'WP Design System' in small letters above the bold letters."
            />
            <Header as="h3">Foundations</Header>
            <P
              css={{
                marginBottom: theme.sizes[100],
                "@notSm": {
                  marginBottom: theme.sizes[200],
                },
              }}
            >
              Learn about design tokens what they are, how they work and the
              advantages they bring to a design system. Plus: a list of all
              currently supported tokens.
            </P>
            <BoldTextLooksLikeLink>
              Get started with Foundations
            </BoldTextLooksLikeLink>
          </CustomLink>
        </Box>
        <Box
          css={{
            position: "relative",
            "@md": {
              gridColumn: "1/-1",
            },
            "@sm": {
              marginBottom: theme.sizes[200],
            },
          }}
        >
          <CustomLink href="/components/alert-banner">
            <Image
              height="160"
              width="320"
              layout="responsive"
              src="/img/sections/components.png"
              alt="Image shows the word 'Components' in large bold letters in front of two squiggly cirles. The words 'WP Design System' in small letters above the bold letters."
            />
            <Header as="h3">Components</Header>
            <P
              css={{
                marginBottom: theme.sizes[100],
                "@notSm": {
                  marginBottom: theme.sizes[200],
                },
              }}
            >
              Dive deeper into our component documentation including design
              examples, usage guidelines and best-practices for technical
              implementation.
            </P>
            <BoldTextLooksLikeLink>
              Get started with Components
            </BoldTextLooksLikeLink>
          </CustomLink>
        </Box>
        <Box
          css={{
            height: "100%",
            position: "relative",
            "@md": {
              gridColumn: "1/-1",
            },
            "@sm": {
              marginBottom: theme.sizes[200],
            },
          }}
        >
          <CustomLink href="/resources">
            <Image
              height="160"
              width="320"
              layout="responsive"
              src="/img/sections/resources.png"
              alt="Image shows the word 'Resources' in large bold letters in front of two squiggly cirles. The words 'WP Design System' in small letters above the bold letters."
            />
            <Header as="h3">Resources</Header>
            <P
              css={{
                marginBottom: theme.sizes[100],
                "@notSm": {
                  marginBottom: theme.sizes[200],
                },
              }}
            >
              Get familiar with the WPDS ecosystem by using one of our handy
              how-to guides. Learn more about integrations with Figma, Zeplin,
              and React.
            </P>
            <BoldTextLooksLikeLink>
              Get started with Resources
            </BoldTextLooksLikeLink>
          </CustomLink>
        </Box>
        <Box />
      </LandingContentGrid>
      <GridTwoColumns>
        <Box
          css={{
            gridColumn: "1/-1",
          }}
        >
          <Header
            as="h2"
            css={{
              borderTop: "1px solid $subtle",
              marginTop: theme.sizes[200],
              paddingTop: theme.sizes[100],
              "@sm": { paddingBottom: "0", marginBottom: 0 },
            }}
          >
            Dive Deeper
          </Header>
        </Box>
        <Box
          css={{
            position: "relative",
            "@md": {
              gridColumn: "1/-1",
            },
          }}
        >
          <Image
            height="250"
            width="500"
            layout="responsive"
            src="/img/dive-deeper/workshop_design_2.png"
            alt="To the right of the image, a woman sits at a desk looking down at her computer. Around her head are bubbles depicting a quote, a video, a website, and a message. On the upper left of the image, the word 'WORKSHOP' appears in large bold letters. The words below this say 'Session 2: WPDS for Designers'. 'WP Design System' appears on the lower left."
          />
        </Box>
        <Box
          css={{
            margin: "auto 0",
            "@sm": {
              margin: "0",
            },
          }}
        >
          <Header
            as="h3"
            css={{
              "@sm": {
                marginTop: "0",
              },
            }}
          >
            WPDS Design Workshop #2
          </Header>
          <P>Continuing our deep dive into our new design system.</P>
        </Box>
        <Box
          css={{
            position: "relative",
            "@md": {
              gridColumn: "1/-1",
            },
          }}
        >
          <Image
            height="250"
            width="500"
            layout="responsive"
            src="/img/dive-deeper/workshop_design_1.png"
            alt="To the right of the image, a woman sits at a desk looking down at her computer. Around her head are bubbles depicting a quote, a video, a website, and a message. On the upper left of the image, the word 'WORKSHOP' appears in large bold letters. The words below this say 'Session 1: WPDS for Designers'. 'WP Design System' appears on the lower left."
          />
        </Box>
        <Box
          css={{
            margin: "auto 0",
            "@sm": {
              margin: "0",
            },
          }}
        >
          <Header
            as="h3"
            css={{
              "@sm": {
                marginTop: "0",
              },
            }}
          >
            WPDS Design Workshop #1
          </Header>
          <P>
            Watch Brian Alfaro lead a design workshop for our rollout of the new
            WPDS.
          </P>
        </Box>
        <Box
          css={{
            position: "relative",
            "@md": {
              gridColumn: "1/-1",
            },
          }}
        >
          <Image
            height="250"
            width="500"
            layout="responsive"
            src="/img/dive-deeper/workshop_dev_2.png"
            alt="To the right of the image, a man stands holding a text box with both hands. In front of him a large website floats in front of him. He appears to be inserting the text box into the upper left of the website. On the upper left of the image, the word 'WORKSHOP' appears in large bold letters. The words below this say 'Session 2: WPDS for Developers'. 'WP Design System' appears on the lower left."
          />
        </Box>
        <Box
          css={{
            margin: "auto 0",
            "@sm": {
              margin: "0",
            },
          }}
        >
          <Header
            as="h3"
            css={{
              "@sm": {
                marginTop: "0",
              },
            }}
          >
            WPDS Developer Workshop #2
          </Header>
          <P>
            Watch Arturo Silva lead our second developer workshop for our v1
            rollout of the new WPDS. Same topisc as the first one, but with a
            different approach.
          </P>
        </Box>
        <Box
          css={{
            position: "relative",
            "@md": {
              gridColumn: "1/-1",
            },
          }}
        >
          <Image
            height="250"
            width="500"
            layout="responsive"
            src="/img/dive-deeper/workshop_dev_1.png"
            alt="To the right of the image, a man stands holding a text box with both hands. In front of him a large website floats in front of him. He appears to be inserting the text box into the upper left of the website. On the upper left of the image, the word 'WORKSHOP' appears in large bold letters. The words below this say 'Session 2: WPDS for Developers'. 'WP Design System' appears on the lower left."
          />
        </Box>
        <Box
          css={{
            margin: "auto 0",
            "@sm": {
              margin: "0",
            },
          }}
        >
          <Header
            as="h3"
            css={{
              "@sm": {
                marginTop: "0",
              },
            }}
          >
            WPDS Developer Workshop #1
          </Header>
          <P>
            Watch Arturo Silva lead a developer workshop for our v1 rollout of
            the new WPDS.
          </P>
        </Box>
        <Box
          css={{
            position: "relative",
            "@md": {
              gridColumn: "1/-1",
            },
          }}
        >
          <Image
            height="250"
            width="500"
            layout="responsive"
            src="/img/dive-deeper/guide_figma.png"
            alt="To the right of the image you can see two hands with flowered sleeves typing on a computer. There is a notepad with a pen and a small plant to the right of the computer. To the left, there is a bubble that shows the Figma logo along with the word 'Figma'. On the upper left of the image, the word 'GUIDE' appears in large bold letters. The words below this say 'Using Figma with WPDS'. 'WP Design System' appears on the lower left."
          />
        </Box>
        <Box
          css={{
            margin: "auto 0",
            "@sm": {
              margin: "0",
            },
          }}
        >
          <Header
            as="h3"
            css={{
              "@sm": {
                marginTop: "0",
              },
            }}
          >
            Guide to Figma
          </Header>
          <P>
            Figma is our tool of choice when designing and using our design
            system.
          </P>
        </Box>
        <Box
          css={{
            position: "relative",
            "@md": {
              gridColumn: "1/-1",
            },
          }}
        >
          <Image
            height="250"
            width="500"
            layout="responsive"
            src="/img/dive-deeper/guide_zeplin.png"
            alt="To the right of the image you can see two hands with flowered sleeves typing on a computer. There is a notepad with a pen and a small plant to the right of the computer. To the left, there is a bubble that shows the Zeplin logo along with the word 'Zeplin'. On the upper left of the image, the word 'GUIDE' appears in large bold letters. The words below this say 'Using Zeplin with WPDS'. 'WP Design System' appears on the lower left."
          />
        </Box>
        <Box
          css={{
            margin: "auto 0",
            "@sm": {
              margin: "0",
            },
          }}
        >
          <Header
            as="h3"
            css={{
              "@sm": {
                marginTop: "0",
              },
            }}
          >
            Guide to Zeplin
          </Header>
          <P>
            Zeplin is our tool of choice when it comes to hand-off. It offers a
            layer of connection to code and design not yet realized by other
            tools.
          </P>
        </Box>
        <SeeAllLink href="/resources" name="resources" type="Last" />
      </GridTwoColumns>
    </>
  );
};

const todaysDate = new Date();

Index.displayName = "Index";

export default Index;
export async function getStaticProps() {
  const posts = await getAllDocs();
  const navigation = await getNavigation();

  const recentPosts = posts
    .filter((post, i) => {
      return (
        post.data.publishDate &&
        new Date(post.data.publishDate) <= todaysDate &&
        post.slug.includes("resources")
      );
    })
    .sort((a, b) => {
      return new Date(a.data.publishDate) - new Date(b.data.publishDate);
    })
    .reverse();

  const threshold = 4;
  if (recentPosts.length > threshold) {
    const amountOver = recentPosts.length - threshold;
    recentPosts.splice(threshold, amountOver);
  }
  return {
    props: { recentPosts, navigation },
  };
}
