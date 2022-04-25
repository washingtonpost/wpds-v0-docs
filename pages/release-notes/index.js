import React from "react";
import { NextSeo } from "next-seo";
import { getNavigation, getReleaseNotes } from "~/services";
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

export default function Page({ kit }) {
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
        {kit.map((note) => (
          <P key={note.id}>
            {note.name} {note.shortDescriptionHTML}
          </P>
        ))}
      </article>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const navigation = await getNavigation();

  const [kit, plugins, docs, wam] = await Promise.all([
    getReleaseNotes("wpds-ui-kit"),
    getReleaseNotes("wpds-plugins"),
    getReleaseNotes("wpds-docs"),
    getReleaseNotes("wpds-assets-manager"),
  ]);

  return {
    props: {
      navigation,
      kit,
      plugins,
      docs,
      wam,
    },
  };
};
