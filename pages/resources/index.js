import React from "react";
import { NextSeo } from "next-seo";
import { getDocsListBySection, getNavigation } from "~/services";
import { Box, Icon, theme, styled } from "@washingtonpost/wpds-ui-kit";
import ChevronRight from "@washingtonpost/wpds-assets/asset/chevron-right";
import { Header } from "~/components/Markdown/Components/headers";
import Link from "~/components/Markdown/Components/link";
import TableofContents from "~/components/Markdown/Components/tableofcontents";
import { Thumbnail } from "~/components/Thumbnail";

const Grid = styled("section", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gridGap: "$100",
  "@sm": {
    gridTemplateColumns: "repeat( auto-fit, minmax(250px, 1fr) )",
    gridRowGap: "0",
  },
  variants: {
    type: {
      Guides: {
        gridTemplateColumns: "1fr",
        gridColumnGap: "$300",
        gridRowGap: "0",
        "@notLg": {
          gridTemplateColumns: "1fr 1fr",
        },
      },
      New: { marginTop: "-$075" },
    },
  },
});

const CustomLink = styled(Link, {
  variants: {
    type: {
      New: {
        pointerEvents: "none",
      },
    },
  },
});

const StyledHeader = styled("span", {
  padding: "$150 0 $075 0",
  fontFamily: "$headline",
  fontSize: "$225",
  fontWeight: "$bold",
  lineHeight: "$110",
  color: "$primary",
});

const Description = styled("div", {
  paddingBottom: "$100",
  color: "$primary",
  maxWidth: "600px",
});

const SeeAll = styled(Header, {
  display: "flex",
  margin: "$100 0 $200",
  alignItems: "center",
  variants: {
    type: { Workshops: { marginBottom: "-$350" }, New: { display: "none" } },
  },
});

const Divider = styled("hr", {
  gridColumnEnd: "span 2",
  margin: "$100 0 $050",
  paddingTop: 0,
  border: 0,
  height: "1px",
  backgroundColor: "$subtle",
  variants: { type: { Workshops: { display: "none" } } },
});

const CheveronForLink = styled(ChevronRight, {
  fill: theme.colors.accessible,
});

export default function Page({ content, headings }) {
  return (
    <>
      <NextSeo title={`WPDS - Resources`} />
      <Header as="h1">Resources</Header>
      <Description>
        Learn more about our workflow and how to use our tools in our guides.
        Watch our tutorials and workshops to discover the elegance and
        accessibility of WPDS.
      </Description>
      <TableofContents headings={headings} css={{ margin: "$075 0" }} />
      <>
        {content.categories.map((cat) => {
          return (
            <>
              <CustomLink
                type={cat.type}
                href={`/resources/${cat.name.toLowerCase()}`}
              >
                <StyledHeader as="h2" id={cat.id}>
                  {cat.name}
                </StyledHeader>
                <Description>{cat.description}</Description>
              </CustomLink>
              <Grid type={cat.type} className={cat.type}>
                {cat.posts.map((doc) => {
                  return (
                    <Link
                      href={doc.slug}
                      key={doc.slug}
                      css={{
                        borderRadius: "$025",
                        padding: "$050 0 $050",
                      }}
                    >
                      <Thumbnail
                        name={doc.data.title}
                        description={doc.data.description.split(".")[0]}
                        publishDate={doc.data.publishDate}
                        imageTag={doc.data.imageTag}
                        thumbnail={doc.data.thumbnail}
                        size={cat.size}
                      />
                    </Link>
                  );
                })}
              </Grid>
              <Link href={`/resources/${cat.name.toLowerCase()}`}>
                <SeeAll as="h4" type={cat.type}>
                  <Box css={{ borderBottom: "1px solid $accessible" }}>
                    See all {cat.name.toLowerCase()}
                  </Box>
                  <Icon>
                    <CheveronForLink />
                  </Icon>
                </SeeAll>
              </Link>
              <Divider type={cat.type} />
            </>
          );
        })}
      </>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const docs = await getDocsListBySection("resources");

  // array of three most recent posts to the site
  const recents = [...docs]
    .sort((a, b) => new Date(b.data.publishDate) - new Date(a.data.publishDate))
    .slice(0, 3);

  const collections = [
    // create a collection for each doc.data.kicker property and put their docs in it
    ...docs.reduce((acc, doc) => {
      const kicker = doc.data.kicker;
      const collection = acc.find((collection) => collection.kicker === kicker);
      const todaysDate = new Date();
      // exclude future posts using collection.publishDate
      if (new Date(doc.data.publishDate) <= todaysDate) {
        if (collection) {
          collection.docs.push(doc);
        } else {
          acc.push({
            kicker,
            docs: [doc],
          });
        }
      }
      return acc;
    }, []),
  ].sort((a, b) => {
    // alpha sort
    return a.kicker.localeCompare(b.kicker);
  });

  // compile page content based on kicker. Includes a name, the posts to be displayed, a description, and the size of the posts
  // we have to hard-code What's New because it's too unique
  let content = { categories: [] };
  let [name, posts, description, size, type, id] = [
    "What's New?",
    recents,
    null,
    "full",
    "New",
    "What's%20New?",
  ];
  let category = { name, posts, description, size, type, id };
  content.categories.push(category);

  let [label, level, headings] = [name, 2, []];
  let heading = { label, level };
  headings.push(heading);

  const descriptions = {
    Guides:
      "Explore the processes and tools we use in our step-by-step written guides.",
    Tutorials:
      "Watch or read through our tutorials to understand key techniques and concepts.",
    Workshops:
      "Sharpen your design and development skills with our in-depth recorded workshops.",
  };

  for (let i = 0; i < collections.length; i++) {
    name = collections[i].kicker;
    if (name === "Guides") {
      posts = [...collections[i].docs]
        .sort((a, b) => a.data.guideRank - b.data.guideRank)
        .slice(0, 4);
      size = "mini";
    } else {
      posts = [...collections[i].docs].slice(0, 3);
      size = "full";
    }
    description = descriptions[`${name}`];
    type = id = label = name;
    category = { name, posts, description, size, type, id };
    content.categories.push(category);

    heading = { label, level };
    headings.push(heading);
  }

  const navigation = await getNavigation();

  return {
    props: {
      navigation,
      content,
      headings,
    },
  };
};
