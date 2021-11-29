import { styled } from "@washingtonpost/wpds-ui-kit";

export default function Layout({ children }) {
  return (
    <>
      <div className="wrapper">{children}</div>
    </>
  );
}
