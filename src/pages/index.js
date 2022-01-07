import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import CTA from "../components/cta";
import Card from "../components/card";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Landing page of WDPS Doc site"
    >
      <main className="flex ma-auto">
        <section
          style={{ width: "80%" }}
          id="hero"
          className={`text-center ma-auto pb-xxl pt-xxl`}
        >
          <div
            style={{ width: "80%" }}
            className={`${styles.area_1} flex center ma-auto mb-0-ns mb-xl flex-column justify-center`}
          >
            <h4 className="font-xxs gray-dark mb-sm font-light">
              <span className="font--headline">⚠️</span> This site is for our
              old design system.
            </h4>
            <h1 className="font-lg mb-xs-ns mb-xs font--headline">
              v0 Design system
            </h1>

            <p style={{ width: "80%" }} className="ma-auto gray-dark w-66-ns">
              What does <span className="italic">"old design system"</span>{" "}
              mean? The old design system is when WPDS and Site components lived
              together. As a lot of you know our design system has grown so much
              this past year. In that time we have learned a lot. One of them in
              particular is how our system scales. As a result, WPDS and Site
              components are now separate. Our tokens have been re-imagined for
              both light and dark mode. Our components scale far better for our
              needs at the post.
            </p>
            <p
              style={{ width: "80%" }}
              className="ma-auto gray-dark mt-sm w-66-ns"
            >
              So who is this site for? Well before creating our new design
              system we knew that there will be phase where for those still on
              our legacy system. We wanted to archive our component and token
              logic for others who still need to review and are still working on
              with these components.
            </p>
            <hr style={{ opacity: 0.25 }} />
            <h3 className="font-sm mb-xs-ns mb-xs font-bold font--meta">
              v1 design system coming soon...
            </h3>
            <img
              className="shadow-4 ma-auto mt-lg"
              src="img/comingsoon.png"
              height="auto"
              width="100%"
            />
          </div>
        </section>
      </main>
    </Layout>
  );
}
