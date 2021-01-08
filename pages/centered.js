import Head from "next/head";
import { useEffect, useState } from "react";
import ArticleLayout from "../Layouts/CenterLayout";
import DefaultPage from "../components/defaultPage";
import CSS from "@washingtonpost/site-components/css/index.css";

export default function Home() {
  const [prismData, setprismData] = useState(null);
  const [Retrieved, setRetrieved] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("")
  useEffect(() => {
    //fetch Article Data
    async function getData() {
      const url = new URL(window.location.href);
      const dataPath = url.searchParams.get("data");

      try {
        const json = await DataHelper.fetchData(dataPath);
        if (json.success==true) {
          console.log("Working")
          setprismData(json.data.items[0]);
          setRetrieved(true);
        }else{
          setErrorMessage(`Sorry no data was retrieved double check the data url be sure not to include the first /.
          Should be ?data=politics not ?data=/politics `);
        }
      } catch (error) {
        console.log(error);
        setErrorMessage(
          "Sorry no data was retrieved please look at console for error"
        );
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
          <p className="red center w-full">{ErrorMessage}</p>
        </>
      )}
    </>
  );
}
