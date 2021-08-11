import Head from "next/head";
import React, { useEffect, useState } from "react";
import CSS from "@washingtonpost/site-components/css/index.css";

export default function Home() {
  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>
      <main>
        <h1> Welcome to WPDS</h1>
      </main>
    </>
  );
}
