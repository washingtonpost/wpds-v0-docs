import React from "react";
import { NextSeo } from "next-seo";
import { getDocsListBySection, getNavigation } from "~/services";
import { Box, Icon, theme, styled } from "@washingtonpost/wpds-ui-kit";
import ChevronRight from "@washingtonpost/wpds-assets/asset/chevron-right";
import { Header } from "~/components/Markdown/Components/headers";
import Link from "~/components/Markdown/Components/link";
import TableofContents from "~/components/Markdown/Components/tableofcontents";
import { Thumbnail } from "~/components/Thumbnail";
import { MiniThumbnail } from "~/components/MiniThumbnail";

const Grid = styled("section", {
  width: "100%",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gridGap: "$100",
  "@sm": {
    gridTemplateColumns: "repeat( auto-fit, minmax(250px, 1fr) )",
    gridGap: "0",
  },
});

// create a divider
const Divider = styled("hr", {
  gridColumnEnd: "span 2",
  margin: "$200 0 $050 0",
  padding: 0,
  border: 0,
  height: "1px",
  backgroundColor: "$subtle",
});

const Description = styled("div", {
  padding: "0 0 $100 $050",
  maxWidth: "600px",
  "@md": {
    gridColumn: "span 3",
  },
  "@sm": {
    gridColumn: "span 1",
  },
});

const CheveronForLink = styled(ChevronRight, {
  fill: theme.colors.accessible,
});

const StyledHeader = styled("span", {
  padding: "$150 0 $075 $050",
  fontFamily: "$headline",
  fontSize: "$225",
  fontWeight: "$bold",
  lineHeight: "$110",
  color: "$primary",
});

const GuideGrid = styled("div", {
  margin: "$050",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridRow: "auto auto",
  gridColumnGap: "$300",
  justifyContent: "flex-end",
  "@sm": {
    gridTemplateColumns: "1fr",
    gridGap: "$100",
  },
});

const SeeAll = styled(Header, {
  display: "flex",
  marginLeft: "$050",
  marginTop: "$100",
  alignItems: "center",
  lineHeight: "$100",
});

export default function Page({ recents, guides, tutorials, workshops }) {
  return (
    <>
      <NextSeo title={`WPDS - Resources`} />
      <Header as="h1" css={{ margin: "$050", marginBottom: "0" }}>
        Resources
      </Header>
      <Description>
        Learn more about our workflow and how to use our tools in our guides.
        Watch our tutorials and workshops to discover the elegance and
        accessibility of WPDS.
      </Description>
      <TableofContents
        headings={[
          { label: "What's New", level: 2 },
          { label: "Guides", level: 2 },
          { label: "Tutorials", level: 2 },
          { label: "Workshops", level: 2 },
        ]}
        css={{ margin: "$075 0 $075 $050" }}
      />

      {/* What's new */}
      <StyledHeader id="What's%20New" as="h2">
        What&apos;s New?
      </StyledHeader>
      <Grid>
        {recents.map((doc) => {
          return (
            <Link
              href={doc.slug}
              key={doc.slug}
              css={{
                borderRadius: "$025",
                padding: "$050",
              }}
            >
              <Thumbnail
                name={doc.data.title}
                description={doc.data.description.split(".")[0]}
                publishDate={doc.data.publishDate}
                kicker={doc.data.kicker}
                imageTag={doc.data.imageTag}
                css={{ display: "none" }}
              />
            </Link>
          );
        })}
      </Grid>

      <Divider css={{ marginTop: "$100" }} />

      {/* guides */}
      <Link href="/resources/guides">
        <StyledHeader as="h2" id="Guides">
          Guides
        </StyledHeader>
        <Description>
          Learn the processes and tools we use through our step-by-step written
          guides.
        </Description>
      </Link>
      <GuideGrid>
        {guides.map((doc) => {
          return (
            <Link href={doc.slug} key={doc.slug}>
              <MiniThumbnail
                name={doc.data.title}
                description={doc.data.description.split(".")[0]}
                thumbnail={doc.data.thumbnail}
              />
            </Link>
          );
        })}
      </GuideGrid>

      <Link href={`/resources/guides`}>
        <SeeAll as="h4">
          <Box css={{ borderBottom: "1px solid $accessible" }}>
            See all guides
          </Box>
          <Icon>
            <CheveronForLink />
          </Icon>
        </SeeAll>
      </Link>

      <Divider />

      {/* Tutorials */}
      <>
        <Link href={`/resources/tutorials`}>
          <StyledHeader as="h2" id="Tutorials">
            Tutorials
          </StyledHeader>
          <Description>
            Watch or read through our tutorials to understand key techniques and
            concepts.
          </Description>
        </Link>

        <Grid className="tutorials">
          {tutorials.map((doc, index) => {
            return (
              <Link
                href={doc.slug}
                key={doc.slug}
                css={{
                  borderRadius: "$025",
                  padding: "$050",
                }}
              >
                <Thumbnail
                  name={doc.data.title}
                  description={doc.data.description.split(".")[0]}
                  byline={doc.data.byline}
                  publishDate={doc.data.publishDate}
                  kicker={doc.data.kicker}
                  imageTag={doc.data.imageTag}
                />
              </Link>
            );
          })}
        </Grid>

        {/* add this part back if/when we have >3 tutorials */}
        {/* <Link href={`/resources/tutorials`}>
          <SeeAll as="h4">
            <Box css={{ borderBottom: "1px solid $accessible" }}>
              See all tutorials
            </Box>
            <Icon>
              <CheveronForLink />
            </Icon>
          </SeeAll>
        </Link> */}
        <Divider css={{ marginTop: "$100" }} />
      </>

      {/* workshops */}
      <>
        <Link href={`/resources/workshops`}>
          <StyledHeader as="h2" id="Workshops">
            Workshops
          </StyledHeader>
          <Description>
            Sharpen your design and development skills with our in-depth
            recorded workshops.
          </Description>
        </Link>
        <Grid>
          {workshops.map((doc, index) => {
            return (
              <Link
                href={doc.slug}
                key={doc.slug}
                css={{
                  borderRadius: "$025",
                  padding: "$050",
                }}
              >
                <Thumbnail
                  name={doc.data.title}
                  description={doc.data.description.split(".")[0]}
                  publishDate={doc.data.publishDate}
                  kicker={doc.data.kicker}
                  imageTag={doc.data.imageTag}
                />
              </Link>
            );
          })}
        </Grid>

        <Link href={`/resources/workshops`}>
          <SeeAll as="h4" css={{ marginBottom: "-$350" }}>
            <Box css={{ borderBottom: "1px solid $accessible" }}>
              See all workshops
            </Box>
            <Icon>
              <CheveronForLink />
            </Icon>
          </SeeAll>
        </Link>
      </>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const docs = await getDocsListBySection("resources");
  const recents = await [...docs]
    .sort((a, b) => new Date(b.data.publishDate) - new Date(a.data.publishDate))
    .slice(0, 3);

  // sort docs into collections by doc.data.kicker property
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

  // create minor collections for each topic

  let guidesIdx, tutorialsIdx, workshopsIdx;
  for (let i = 0; i < collections.length; i++) {
    if (collections[i].kicker === "Guides") {
      guidesIdx = i;
    }
    if (collections[i].kicker === "Tutorials") {
      tutorialsIdx = i;
    }
    if (collections[i].kicker === "Workshops") {
      workshopsIdx = i;
    }
  }

  const guides = await [...collections[guidesIdx].docs]
    .sort((a, b) => a.data.guideRank - b.data.guideRank)
    .slice(0, 4);

  const tutorials = [...collections[tutorialsIdx].docs].slice(0, 3);

  const workshops = [...collections[workshopsIdx].docs].slice(0, 3);

  // for if we want to exclude guides from what's new
  // const recents = tutorials
  //   .concat(workshops)
  //   .sort((a, b) => new Date(b.data.publishDate) - new Date(a.data.publishDate))
  //   .slice(0, 3);

  const navigation = await getNavigation();

  return {
    props: {
      navigation,
      recents,
      guides,
      tutorials,
      workshops,
    },
  };
};
