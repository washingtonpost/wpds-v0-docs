import React from "react";
import { NextSeo } from "next-seo";
import { getDocsListBySection, getNavigation } from "~/services";
import { styled } from "@washingtonpost/wpds-ui-kit";
import { Header } from "~/components/Markdown/Components/headers";
import Link from "~/components/Markdown/Components/link";
import TableofContents from "~/components/Markdown/Components/tableofcontents";
import {
  Thumbnail,
  THUMBNAIL_SQUARE,
  THUMBNAIL_WIDE,
} from "~/components/Thumbnail";
import { LandingContentGrid } from "~/components/Markdown/Components/ResourcesGrids";
import { SeeAllLink, NewCustomLink, sortByRank } from "../utils";

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

const Divider = styled("hr", {
  gridColumnEnd: "span 2",
  margin: "$100 0 $050",
  paddingTop: 0,
  border: 0,
  height: "1px",
  backgroundColor: "$subtle",
  variants: { type: { Workshops: { display: "none" } } },
});

const Page = ({ wrapper }) => (
  <>
    <NextSeo title={`WPDS - Resources`} />
    <Header as="h1">Resources</Header>
    <Description>
      Learn more about our workflow and how to use our tools in our guides.
      Watch our tutorials and workshops to discover the elegance and
      accessibility of WPDS.
    </Description>
    <TableofContents headings={wrapper.headings} css={{ margin: "$075 0" }} />
    {wrapper.content.categories.map((category) => (
      <React.Fragment key={category.name}>
        <NewCustomLink
          type={category.type}
          href={`/resources/${category.name.toLowerCase()}`}
        >
          <StyledHeader as="h2" id={category.id}>
            {category.name}
          </StyledHeader>
          <Description>{category.description}</Description>
        </NewCustomLink>
        <LandingContentGrid size={category.size} className={category.type}>
          {category?.posts?.map((doc) => (
            <Link href={doc.slug} key={doc.slug}>
              <Thumbnail
                name={doc.data.title}
                description={doc.data.description.split(".")[0]}
                publishDate={doc.data.publishDate}
                imageTag={doc.data.imageTag}
                thumbnail={doc.data.thumbnail}
                size={category.size}
              />
            </Link>
          ))}
        </LandingContentGrid>
        <SeeAllLink
          href={`/resources/${category.name.toLowerCase()}`}
          name={category.name}
          type={category.type}
        />
        <Divider type={category.type} />
      </React.Fragment>
    ))}
  </>
);

export const getStaticProps = async () => {
  const docs = await getDocsListBySection("resources");

  // find the three most recent posts to the site before content is sorted by kicker
  const recents = [...docs]
    .sort((a, b) => new Date(b.data.publishDate) - new Date(a.data.publishDate))
    .slice(0, 3);

  const collections =
    // create a collection for each doc.data.kicker property and put their docs in it
    docs
      .reduce((acc, doc) => {
        const kicker = doc.data.kicker;
        const collection = acc.find(
          (collection) => collection.kicker === kicker
        );
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
      }, [])
      .sort((a, b) => {
        // alpha sort
        return a.kicker.localeCompare(b.kicker);
      });

  const wrapper = await getWrapper(collections, recents);
  const navigation = await getNavigation();

  return {
    props: {
      navigation,
      wrapper,
    },
  };
};

async function getWrapper(collections, recents) {
  // create a wrapper which contains all necessary data for the page

  // 1. initialize constants
  const wrapper = { content: {}, headings: [] };
  const content = { categories: [] };
  const level = 2;
  const descriptions = {
    Guides:
      "Explore the processes and tools we use in our step-by-step written guides.",
    Tutorials:
      "Watch or read through our tutorials to understand key techniques and concepts.",
    Workshops:
      "Sharpen your design and development skills with our in-depth recorded workshops.",
  };

  // 2. populate the content array with objects for each category (main data for page)
  content.categories = collections.map((collection) => {
    let name, id, type;
    name = id = type = collection.kicker;
    let [posts, description, size] = [[], descriptions[name], ""];

    if (name === "Guides") {
      // sorting guides by Rank -> if none, sort by title
      posts = sortByRank(collection.docs, 4);
      size = THUMBNAIL_SQUARE;
    } else {
      posts = [...collection.docs].slice(0, 3);
      size = THUMBNAIL_WIDE;
    }
    //return category
    return { name, posts, description, size, type, id };
  });

  // 3. populate headings (for TOC)
  const headings = content.categories.map((category) => {
    return { label: category.name, level };
  });

  // 4. adding what's new section to the front of the content array
  let whatsNew = {
    name: "What's New?",
    posts: recents,
    description: null,
    size: THUMBNAIL_WIDE,
    type: "New",
    id: "What's%20New?",
  };
  content.categories.unshift(whatsNew);
  headings.unshift({ label: whatsNew.name, level });

  // 5. populate the wrapper to return
  wrapper.content = content;
  wrapper.headings = headings;
  return wrapper;
}

Page.displayName = "Page";
export default Page;
