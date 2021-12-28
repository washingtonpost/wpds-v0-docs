import React from "react";
import Link from "next/link";
import Layout from "~/components/Layout/WithSidebar";
import Content from "~/components/Layout/Components/Content";
import { getDocsListBySection } from "~/services";
import { styled, theme } from "@washingtonpost/wpds-ui-kit";

const Heading = styled("h1", {
  fontFamily: "$headline",
  color: "$primary",
  variants: {
    as: {
      h1: {
        fontSize: "$300",
        lineHeight: "$300",
        marginBottom: "$100"
      },
      h2: {
        fontFamily: "$subhead",
        fontSize: "$150",
        lineHeight: "$100"
      }
    }
  }
});

const Anchor = styled("a", {
  color: theme.colors.gray0,
  textDecoration: "none",
  borderBottom: "1px solid $gray0",
  display: "inline-block",
  marginBottom: "$050"
});

const Kicker = styled("div", {
  color: theme.colors.accessible,
  marginBottom: "$050"
});

const Card = styled("article", {
  border: "1px solid $subtle",
  borderRadius: "$050",
  px: "$150",
  py: "$100",
  marginBottom: "$150"
});

const Description = styled("p", {
  fontSize: "$125",
  lineHeight: "$150",
  color: "$accessible"
});

export default function Page({ docs, latestDocs }) {
  // create a "see all releases" toggle
  const [showAll, setShowAll] = React.useState(false);
  const [docsList, setDocsList] = React.useState(latestDocs);

  const toggleShowAll = event => {
    event.preventDefault();
    setShowAll(prev => !prev);
    setDocsList(showAll ? latestDocs : docs);
  };

  return (
    <Layout>
      <div id="sidebar"></div>
      <Content id="content">
        <Heading as="h1">Release Notes</Heading>

        {docsList.map(doc => (
          <Card key={doc.slug}>
            <Kicker>Release</Kicker>
            <Link href={doc.slug} forceHref>
              <Anchor href={doc.slug}>
                <Heading as="h2">{doc.data.title}</Heading>
              </Anchor>
            </Link>
            <Description>{doc.data.description}</Description>
          </Card>
        ))}

        {
          // show all button when docs is greater than latestDocs}
          docs.length > latestDocs.length && (
            <button onClick={toggleShowAll}>
              {showAll ? "See less" : "See all"} releases
            </button>
          )
        }
      </Content>
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const docs = getDocsListBySection("release-notes");

  // sort by publishDate ascending
  docs.sort((a, b) => {
    return new Date(a.data.publishDate) - new Date(b.data.publishDate);
  });

  // create a new array with the latest 8 docs
  const latestDocs = docs.length > 8 ? docs.slice(0, 8) : docs;

  return {
    props: {
      latestDocs,
      docs
    }
  };
};
