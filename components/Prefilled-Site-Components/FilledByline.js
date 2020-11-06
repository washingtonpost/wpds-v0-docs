import React from 'react'
import { Byline } from "@washingtonpost/site-components/core/byline";
export default function FilledByline(props) {
    const info=props.data;
    return (
        <Byline
        avatarSize="medium"
        data={[
            {
                description: info.credits.by[0].additional_properties.original.role === "Staff writer" ? "" : info.credits.by[0].additional_properties.original.role,
                // imgUrl: info.credits.by[0].image.url,
                linkToBio: info.credits.by[0].additional_properties.original.bio_page,
                name: info.credits.by[0].name
            }
        ]}
        isVertical={false}
    />
    )
}
