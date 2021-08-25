import React from 'react'

export default function Sample(props) {
    const {Caption} = props;
    return (
        <div className={`${props.className} relative example flex items-center justify-center pt-xxl pb-xxl bg-gray-lightest`}>
            {props.children}
        <div className="absolute bottom-0 gray-dark font-xxs italic mr-sm mb-sm">{Caption}</div>
        </div>
    )
}