import React from 'react'
import CTA from './cta'
export default function Card(props) {
    return (
        <div className={`${props.className}`}>
            <div className={`${props.className} bg-white brad-8 overflow-hidden  shadow-3 flex`}>
                <div style={{ height: 200, width: 250 }} className="bg-white pa-md image-conatiner">
                    <img height="100%" width="auto" alt={props.altText} src={props.imgPath} />
                </div>

                <div className="gray-dark w-100 pl-md flex-column flex justify-center subs-theme bg-offwhite">
                    {props.children}
                </div>
            </div>
        </div>
    )
}
