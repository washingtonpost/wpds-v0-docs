import * as React from "react";
import Head from "next/head";
import Link from "next/link";
import { getAllDocs, getNavigation } from "~/services";

export default function Index({ posts }) {
  return <div>TBD</div>;
}

export async function getStaticProps() {
  const posts = await getAllDocs();
  const navigation = await getNavigation();

  return {
    props: { posts, navigation },
  };
}
