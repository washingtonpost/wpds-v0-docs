import React from 'react'

export default function splitGrid(props) {
    const {className}=props;
    return (
        <div className={`w-100 grid-split pr-sm ${className?className:'mb-xl'}`}>
            {props.children}
        </div>
    )
}
