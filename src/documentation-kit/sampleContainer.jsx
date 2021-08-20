import React from 'react'

export default function Sample(props) {
    return (
        <div className={`${props.className} flex items-center justify-center pt-xxl pb-xxl bg-gray-lightest`}>
            {props.children}
        </div>
    )
}