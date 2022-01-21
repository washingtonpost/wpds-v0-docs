import React, { useRef, useState } from 'react'
import { ReactSVG } from 'react-svg';
import { motion } from 'framer-motion';
import Data from '@washingtonpost/icon-tokens/dist/tokens.json';
// Must have the exact spelling of the token or throws an error. :/ 
export default function IconCard(props) {
    const { iconName, size, className } = props;
    const splitIconName=iconName.split("-");
    const formattedIconName=`${splitIconName.length>1?`${splitIconName[0]} ${splitIconName[1]}`:iconName}`
    const source = "16"
    const path = Data[iconName][source];
    const fillRule = Data[iconName].fillRule;
    const svgRef = useRef();
    const [hasCopied, sethasCopied] = useState(false);
    const [isActive, setisActive] = useState(false)
    const variants = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 10 }
    }

    function resetCopy() {
        try {
            navigator.clipboard.writeText(svgRef.current.outerHTML);
            sethasCopied(true);
        } catch (error) {
            sethasCopied(false)
        }
        setTimeout(() => {
            sethasCopied(false)
        }, 1000);
    }
    const getIcon = () => {
        return path&& (
            <div
                onMouseEnter={() => setisActive(true)}
                onMouseLeave={() => setisActive(false)}
                onClick={() => resetCopy()} style={{ maxWidth: 150 }}
                style={{ width: 150 }} className={`${className} card w-100 pointer brad-4 b bc-gray-lighter ma-auto`}>
                <div style={{ height: 150 }} className="flex bg-offwhite items-center relative justify-center">
                    <svg
                        ref={svgRef}
                        width={size}
                        height={size}
                        viewBox={`0 0 ${16} ${16}`}
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>{iconName}</title>
                        <path d={path} fillRule={fillRule} />
                    </svg>
                    <motion.p
                        className="bg-white absolute pa-xs brad-4"
                        variants={variants}
                        animate={isActive ? 'visible' : 'hidden'}
                        transition={{ type: 'tween', ease: 'easeOut' }}
                    >
                        {hasCopied ? 'Copied!' : 'Copy SVG'}

                    </motion.p>
                </div>
                <div className="pa-xs">
                    <p className="capitalize">{formattedIconName}</p>
                </div>
            </div>
        )
    }
    return (
        <div>
            {iconName && getIcon()}
        </div>
    )
}
