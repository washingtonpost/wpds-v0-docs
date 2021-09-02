import React from 'react'
import { Banner } from "@washingtonpost/site-components/core/banner";
import { Alert16 } from "@washingtonpost/site-components/core/icon/alert/16";
import { Check16 } from "@washingtonpost/site-components/core/icon/check/16";
import { Info16 } from "@washingtonpost/site-components/core/icon/info/16";

export default function alertBanner() {
     
    return (
        <Banner renderCloseButton={false} className="bg-blue-pale brad-4 shadow-1 mt-xl mb-xl w-100">
            <p className="flex">
                <Alert16 className="fill-blue-dark mr-xs" />
                <span className="offblack">Warning that this component currently does not support any transition</span>
            </p>
        </Banner>
    )
}
