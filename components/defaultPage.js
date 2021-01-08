import React from "react";
import Footer from "../components/Prefilled-Site-Components/FilledFooter";
import Navigation from "../components/Prefilled-Site-Components/FilledHeader";
import SecondaryNav from "../components/Prefilled-Site-Components/FilledSecondaryNav";

export default function defaultPage() {
  return (
    <>
      <Navigation userName="Default@gmail.com" />
      <main className="d-grid">
        <header className="area-header">
          <SecondaryNav alignment="left" className=" w-100" />
          <h1 className="font--headline gray-darkest pb-sm">
            Welcome to the article design code playground
          </h1>
          <h2 className="font--subhead font-light gray-dark mb-sm">
            To load an article and test designs please enter a live produciton
            canonical Url after the localhost:3000/?url= example
            localhost:3000?url=/elections/2020/11/05/trump-biden-election-live-updates/
          </h2>
          <hr />
        </header>
        <article className="area-body">
          lorum ispsum seifjewiojwfoejwfoj wfiejfowjieo ewiofjojwe fioewjf
          ewiofj eiowfjewo fejwf oeijwoj
        </article>
      </main>
    </>
  );
}
