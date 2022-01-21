import * as React from "react";
import Head from "next/head";
import Link from "next/link";
import { getAllDocs, getNavigation } from "~/services";
import { Box } from "@washingtonpost/wpds-ui-kit";
import {
  List,
  ListItem,
  LinkText,
} from "~/components/Markdown/Components/list";
import Header from "~/components/Typography/Headers";
import { P } from "~/components/Markdown/Styling";

export default function Index({ posts }) {
  return (
    <Box
      css={{
        padding: "0 $100",
      }}
    >
      <Head>WaPo Design System | WPDS</Head>
      <Header>Home Page</Header>
      <P>
        This is a temporary landing page. Product design is working on a really
        cool landing page for us.
      </P>
      <Header as="h2">All markdown posts</Header>
      <List>
        {posts.map((post) => (
          <ListItem key={post.slug}>
            <Link href={post.slug} forceHref>
              <a>
                <LinkText>{post.data.title}</LinkText>
              </a>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export async function getStaticProps() {
  const posts = await getAllDocs();
  const navigation = await getNavigation();

  return {
    props: { posts, navigation },
  };
}
