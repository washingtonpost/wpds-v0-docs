import { styled } from "@washingtonpost/ui-theme";

export default function Layout({ children }) {
  const Layout = styled("div", {
    display: "grid",
    margin: "0 auto",
    "@notSm": {
      gridTemplateColumns: "300px 1fr"
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