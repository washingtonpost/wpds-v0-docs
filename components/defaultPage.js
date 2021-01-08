import React from "react";
import Footer from "../components/Prefilled-Site-Components/FilledFooter";
import Navigation from "../components/Prefilled-Site-Components/FilledHeader";
import SecondaryNav from "../components/Prefilled-Site-Components/FilledSecondaryNav";

export default function defaultPage(props) {
  return (
    <>
      <Navigation userName="Default@gmail.com" />
      <main className="d-grid">
        <header className="area-header mt-xl mb-xl">
          {/* <SecondaryNav alignment="left" className=" w-100" /> */}
          <h1 className="font--headline gray-darkest pb-sm">
            Welcome to the article design code playground
          </h1>
          <h2 className="font--subhead font-light gray-dark mb-sm">
            To load an article and test designs please enter a live production
            canonical Url after the url ?data=
            <br/>
            ?data=elections/2020/11/05/trump-biden-election-live-updates/
          </h2>
          <hr />
        </header>
        <article className="area-body">
        {props.ErrorMessage}
        </article>
      </main>
    </>
  );
}
