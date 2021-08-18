import React from 'react'
import { SecondaryNav } from "@washingtonpost/site-components/core/secondary-nav";

export default function Tabs(props) {
    const { relatedUrl, isDesignDoc } = props;

    return (
        <SecondaryNav
            className="mb-lg mt-md"
            sectionData={{
                children: [
                    {
                        name: 'Design',
                        url: isDesignDoc?'/':relatedUrl
                    },
                    {
                        name: 'Implementation',
                        url: isDesignDoc?relatedUrl:'/'
                    }
                ],
            }}
            currentSection="/"
        />
    )
}