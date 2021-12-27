import * as React from "react";
import { VisuallyHidden } from "@washingtonpost/wpds-ui-kit";
import { getDocsListBySection } from "~/services";

export default function Boop({ posts, docs, foundations, release_notes }) {
  return (
    <>
      <VisuallyHidden>Hi, art</VisuallyHidden>
    </>
  );
}

export async function getStaticProps() {
  const [posts, docs, foundations, release_notes] = [
    "blog",
    "components",
    "foundations",
    "release-notes"
  ].map(section => getDocsListBySection(section));

  return { props: { posts, docs, foundations, release_notes } };
}
