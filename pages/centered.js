import Head from "next/head";
import { useEffect, useState } from "react";
import ArticleLayout from "../Layouts/CenterLayout";
import DefaultPage from "../components/defaultPage";
import CSS from "@washingtonpost/site-components/css/index.css";

export default function Home() {
  const [prismData, setprismData] = useState(null);
  const [Retrieved, setRetrieved] = useState(false);
  useEffect(() => {
    //fetch Article Data
    async function getData() {
      const url = await window.location.href.split("3000/centered?url=");
      if (url.length > 1) {
        const canonicalUrl = (await url.length) > 1 ? url[1] : "";
        const res = await fetch(`/api/getdata?website_url=${canonicalUrl}`);
        const json = await res.json();
        if (json.data) {
          console.log(json.data.items[0]);
          setprismData(json.data.items[0]);
          setRetrieved(true);
        }else{
          console.log("Please Check URL and make sure it is correct with a /")
        }
      }
    }
    getData();
  }, []);

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>
      {Retrieved ? (
        <ArticleLayout data={prismData} />
      ) : (
        <>
          <DefaultPage />
        </>
      )}
    </>
  );
}
