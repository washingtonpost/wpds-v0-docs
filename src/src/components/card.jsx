import React from 'react'
import CTA from './cta'
export default function Card(props) {
    return (
        <div className={`${props.className}`}>
        <div className={`${props.className} bg-white brad-8 overflow-hidden  shadow-3 flex`}>
            <div className="bg-white pa-md image-conatiner">
            <img height="100%" width="auto" alt={props.altText} src={props.imgPath}/>
            </div>

            <div className="white w-100 pl-md flex-column flex justify-center subs-theme bg-blue">
                {props.children}
            </div>
            <style jsx>{`
            .image-conatiner{
                height:200px;
                width:250px;
            }
            `}</style>
        </div>
        </div>
    )
}
