import React from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

export default function Home() {
  return (
    <Layout
      title="WaPo Design System"
      description="Landing page of the WPDS Documentation Website"
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
              This site contains documentation for The Washington Post’s legacy
              design system (v0). WPDS v0 is no longer under active development.
              Why? Think you’re in the wrong place? Visit the{" "}
              <a href="https://build.washingtonpost.com/">WPDS v1 docs site.</a>
            </p>
            <hr style={{ opacity: 0.25 }} />
          </div>
        </section>
      </main>
    </Layout>
  );
}
