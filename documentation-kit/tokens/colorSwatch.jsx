import React, { useState } from 'react'
import Token from '@washingtonpost/color-tokens/dist/json-flat/tokens.json'

import {motion} from 'framer-motion'
export default function colorSwatch(props) {
    const {token,value}=props;
    const splitToken=token.split('color-')[1].split('-');
    let tokenName=splitToken.toString();
    tokenName=tokenName.replace(',',' ');
    tokenName=tokenName.replace(',',' ');
    tokenName=tokenName.replace('ui',"");
    tokenName=tokenName.replace('corporate',"")
    tokenName=tokenName.replace('subscription',"subs")
    

    // const hexValue
    const [hasCopied, sethasCopied] = useState(false)
    const [isActive, setisActive] = useState(false)

    const variants={
        visible:{opacity:1,y:0},
        hidden:{opacity:0,y:10}
    }
    function resetCopy() {
        try {
            navigator.clipboard.writeText(value)
            sethasCopied(true);
        } catch (error) {
            sethasCopied(false)
        }
        setTimeout(() => {
            sethasCopied(false)
        }, 1000);
    }

    return (
        <div 
        onMouseEnter={()=>setisActive(true)}  
        onMouseLeave={()=>setisActive(false)}
        onClick={() => resetCopy()} style={{ maxWidth: 150 }} 
        className="card w-100 pointer brad-4 b bc-gray-lighter ma-auto">
            <a href={`#${tokenName}`} className="flex  items-center justify-center" style={{ height: 150, backgroundColor: value }} >
                <motion.p 
                className="bg-white pa-xs brad-4"
                variants={variants}
                animate={isActive?'visible':'hidden'}
                transition={{type:'tween',ease:'easeOut'}}
                >
                    {hasCopied?'Copied!':'Click to copy'}
        
                </motion.p>
            </a>
            <div className="pa-xs">
                <p className="capitalize">{tokenName}</p>
                <p className="font-xxxs mt-xxs uppercase">{value}</p>
            </div>
        </div>
    )
}

