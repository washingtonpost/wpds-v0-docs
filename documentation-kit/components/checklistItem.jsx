import React from 'react'
import { Check16 } from "@washingtonpost/site-components/core/icon/check/16";

export default function checklistItem(props) {
    const {isDone, title,description}=props;
    return (
        <div className="flex">
            <div>
                <div style={{ width: '32px', height: '32px' }} className={`brad-50 ml-xs b flex items-center justify-center subs-theme bc-blue bg-blue-pale `}>
                    {isDone&&<Check16 className="subs-theme fill-blue" />}
                </div>
            </div>
            <div className="ml-sm -mt-xxs">
                <div className="font-bold mb-0 pb-0">{title}</div>
                <p className="mt-0">{description} </p>
            </div>
        </div>
    )
}
