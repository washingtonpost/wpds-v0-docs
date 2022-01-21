import React, { useEffect, useState } from "react";
import { SecondaryNav } from "@washingtonpost/site-components/core/secondary-nav";

export default function Tabs(props) {
  const { relatedUrl, isDesignDoc } = props;
  const [rootUrl, setrootUrl] = useState(null);
  useEffect(() => {
    let destinationUrl = window.location.origin + "/" + relatedUrl;
    setrootUrl(destinationUrl);
  }, []);
  return (
    <SecondaryNav
      className="mb-lg mt-md"
      sectionData={{
        children: [
          {
            name: "Design",
            url: isDesignDoc ? "/" : rootUrl
          },
          {
            name: "Implementation",
            url: isDesignDoc ? rootUrl : "/"
          }
        ]
      }}
      currentSection="/"
    />
  );
}
