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
      <main>
        <section id="hero" className={`${styles.grid_landing} pb-xxl pt-xxl`}>
          <div
            className={`${styles.area_1} flex left-ns center mb-0-ns mb-xl flex-column justify-center`}
          >
            <h1
              style={{ width: "90%" }}
              className="font-lg mb-xs-ns mb-xs font--headline"
            >
              Designing tomorrow's news today
            </h1>
            <p className="gray-dark lh-lg w-66-ns">
              The Washington Post design system helps us build for a better
              reading experience across all our products. Build faster, build
              better, and build more with WPDS.
            </p>
            <CTA className="flex_center_sm" url="/getting-started/design">
              Getting started
            </CTA>
          </div>
          <div className={`${styles.area_2} flex items-center justify-center`}>
            <img
              className="mb-0-ns mb-md"
              height="auto"
              width="80%"
              src="/img/landing/design-team.svg"
            />
          </div>
        </section>

        <section className={`pt-xxl pb-xxl subs-theme bg-blue-pale`}>
          <div className={`${styles.grid_cards}`}>
            <Card
              className={`${styles.area_1} mb-0-ns mb-xs `}
              imgPath="/img/landing/components.svg"
            >
              <h3 className="mb-xs">Components</h3>
              <p className="lh-md">
                Each component has been design to be as reusable as possible
              </p>
              <CTA url="/design/uncategorized/accordion" Color="Dark">
                Explore our components
              </CTA>
            </Card>
            <Card
              className={`${styles.area_2} `}
              imgPath="/img/landing/collab.svg"
            >
              <h3 className="mb-xs">Patterns</h3>
              <p className="lh-md">
                Resuable combinations of components to create solve common user
                problems
              </p>
              <CTA Color="Dark">Coming Soon</CTA>
            </Card>
          </div>
        </section>

        <section id="purpose" className={`${styles.grid_landing} pb-xl pt-xxl`}>
          <div
            className={`${styles.area_1} flex left-ns center mb-0-ns mb-xl flex-column justify-center`}
          >
            <h1 className="font-lg-ns font-md mb-0-ns mb-xs font--headline">
              Purpose & Principles
            </h1>
            <p className="gray-dark lh-lg w-66-ns">
              The Washington Post design system helps us build for a better
              reading experience across all our products. Build faster, build
              better, and build more with WPDS.
            </p>
            <CTA className="flex_center_sm" url="/">
              Coming soon
            </CTA>
          </div>
          <div className={`${styles.area_2} flex justify-center items-center`}>
            <img
              className="mb-0-ns mb-md"
              height="auto"
              width="80%"
              src="/img/landing/online-doc.svg"
            />
          </div>
        </section>

        <section id="tokens" className={`${styles.grid_landing} pb-xl pt-xxl`}>
          <div
            className={`${styles.area_2} ml-sm flex left-ns center mb-0-ns mb-xl flex-column justify-center`}
          >
            <h1 className="font-lg-ns font-md mb-0-ns mb-xs font--headline">
              Design Tokens
            </h1>
            <p className="gray-dark lh-lg w-66-ns">
              Design tokens are all the values needed to construct and maintain
              a design system — spacing, color, typography, object styles,
              animation, etc. — represented as data.
            </p>
            <CTA
              className="flex_center_sm"
              url="/foundations/introduction/what-are-tokens"
            >
              Explore and learn more
            </CTA>
          </div>
          <div className={`${styles.area_1} flex items-center justify-center`}>
            <img
              className="mb-0-ns mb-md"
              height="auto"
              width="80%"
              src="/img/landing/palette.svg"
            />
          </div>
        </section>
      </main>
    </Layout>
  );
}
