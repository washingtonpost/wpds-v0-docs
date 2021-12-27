import * as React from "react";
import { NavigationBar } from "~/components/NavigationBar";
import { getDocsListBySection } from "~/services";
import { VisuallyHidden } from "@washingtonpost/wpds-ui-kit";

export default function Boop({ posts, docs, foundations, release_notes }) {
  return (
    <>
      <NavigationBar showLogo />
      <VisuallyHidden>Hi, art</VisuallyHidden>
    </>
  );
}

export function getStaticProps() {
  const [posts, docs, foundations, release_notes] = [
    "blog",
    "components",
    "foundations",
    "release-notes"
  ].map(section => getDocsListBySection(section));

  return { props: { posts, docs, foundations, release_notes } };
}
