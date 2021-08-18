import React from 'react'

export default function Section(props) {
    const {borderOff}=props;
    return (
        
        <div className={`w-100 font--headline ${!borderOff&&'b bt bc-offblack'} font-md2 pt-xs mt-xxs`}>
             {props.children}
        </div>
    )
}