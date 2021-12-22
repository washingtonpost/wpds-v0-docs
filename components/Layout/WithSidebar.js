import { styled } from "@washingtonpost/wpds-ui-kit";

export default function Layout({ children }) {
  const Layout = styled("div", {
    display: "grid",
    margin: "0 auto",

    "@notSm": {
      gridTemplateColumns: "300px 1fr"
    },
    "@md": {
      gridTemplateColumns: "1fr"
    },
    "@sm": {
      gridTemplateColumns: "1fr"
    }
  });
  return (
    <>
      <Layout className="wrapper">{children}</Layout>
    </>
  );
}
