import Link from "next/link";
import { VisuallyHidden, styled } from "@washingtonpost/wpds-ui-kit";
import Content from "~/components/Layout/Components/Content";
import { NavigationBar } from "~/components/NavigationBar";
import { getDocsListBySection } from "~/services";

export default function Index({ posts, docs, foundations, release_notes }) {
  const Boop = styled("span", {
    position: "absolute",
    border: 0,
    padding: 0,
    whiteSpace: "nowrap",
    wordWrap: "normal",
    width: 1,
    height: 1,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    color: "currentColor",

    // display label to screen when focused or active
    "&:active": {
      clip: "auto",
      height: "auto",
      width: "auto",
      margin: 0,
      overflow: "visible",
      position: "static"
    },
    "&:focus": {
      clip: "auto",
      height: "auto",
      width: "auto",
      margin: 0,
      overflow: "visible",
      position: "static"
    }
  });

  return (
    <>
      <VisuallyHidden>This should not flash on first page load.</VisuallyHidden>
      <Boop>This should really not flash at all</Boop>
      <NavigationBar showLogo />
      <Content id="content">
        <h1>Home Page</h1>

        <ul>
          {posts.map(post => (
            <li key={post.slug}>
              <Link href={post.slug} forceHref>
                <a>{post.data.title}</a>
              </Link>
            </li>
          ))}
        </ul>
        <h3>Component Docs</h3>
        <ul>
          {docs.map(post => (
            <li key={post.slug}>
              <Link href={post.slug} forceHref>
                <a>{post.data.title}</a>
              </Link>
            </li>
          ))}
        </ul>
        <h3>Foundations</h3>
        <ul>
          {foundations.map(post => (
            <li key={post.slug}>
              <Link href={post.slug} forceHref>
                <a>{post.data.title}</a>
              </Link>
            </li>
          ))}
        </ul>
        <h3>Release Notes</h3>
        <ul>
          {release_notes.map(post => (
            <li key={post.slug}>
              <Link href={post.slug} forceHref>
                <a>{post.data.title}</a>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/quick-links" forceHref>
          <a>
            <h3>Quick Links</h3>
          </a>
        </Link>
        <Link href="/assets" forceHref>
          <a>
            <h3>Assets</h3>
          </a>
        </Link>
      </Content>
    </>
  );
}

export const getStaticProps = async () => {
  const [posts, docs, foundations, release_notes] = [
    "blog",
    "components",
    "foundations",
    "release-notes"
  ].map(section => getDocsListBySection(section));

  return { props: { posts, docs, foundations, release_notes } };
};
