import React from 'react'

export default function DocHead(props) {
    return (
        <span className="pt-xl font-xl font-bold font--headline">
            {props.children}
        </span>
    )
}