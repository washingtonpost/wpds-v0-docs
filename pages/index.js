import * as React from "react";
import { getAllDocs, getNavigation } from "~/services";

export default function Index({ posts }) {
  return <div>This landing page is not ready</div>;
}

export async function getStaticProps() {
  const posts = await getAllDocs();
  const navigation = await getNavigation();

  return {
    props: { posts, navigation },
  };
}
