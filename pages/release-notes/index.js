import React from "react";
import { NextSeo } from "next-seo";
import { getDocsListBySection, getNavigation } from "~/services";
import { styled } from "@washingtonpost/wpds-ui-kit";
import { P } from "~/components/Markdown/Styling";
import Header from "~/components/Typography/Headers";
import Link from "~/components/Markdown/Components/link";

const Card = styled("article", {
  border: "1px solid $subtle",
  borderRadius: "$050",
  px: "$150",
  paddingTop: "$100",
  paddingBottom: "$100",
  marginBottom: "$150",
});

export default function Page({ docs, latestDocs }) {

  return (
    <>
      <NextSeo
        title={`WPDS - Release Notes`}
        description="Release notes for WPDS, the Washington Post Design System."
      />
      <header>
        <Header as="h1">Release notes</Header>
      </header>

      <article>
        {docs.map((doc) => (
          <Card key={doc.slug}>
            <Link href={doc.slug}>
              <Header
                as="h2"
                css={{
                  marginBottom: "$050",
                }}
              >
                {doc.data.title}
              </Header>
            </Link>
            <P>{doc.data.description}</P>
          </Card>
        ))}


      </article>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const docs = await getDocsListBySection("release-notes");
  const sortedByLatestRelease = docs.sort((a, b) => {
    return new Date(b.data.publishDate) - new Date(a.data.publishDate);
  });

  const navigation = await getNavigation();

  return {
    props: {
      docs: sortedByLatestRelease,
      navigation,
    },
  };
};
