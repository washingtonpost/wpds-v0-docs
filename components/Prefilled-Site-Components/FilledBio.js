import React from "react";
import { AuthorBio } from "@washingtonpost/site-components/core/authorbio";
export default function FilledBio(props) {
    const info=props.info;
  return(
  <AuthorBio 
  imgUrl={info.credits.by[0].image.url} 
  name={info.credits.by[0].name}
  twitter={info.credits.by[0].additional_properties.original.twitter}
  >
      {info.credits.by[0].description}
      </AuthorBio>
  )
}
