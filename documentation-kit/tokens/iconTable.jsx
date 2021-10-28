import React, { useState,useEffect } from 'react'
import IconCard from './icon-card';
import Data from '@washingtonpost/icon-tokens/dist/tokens.json';

export default function IconTable(props) {
    const { group, size, color, filter, all } = props;
    const [AllIcons, setAllIcons] = useState([])
    useEffect(() => {
        if(all){
            getIcons();
        }
    }, [])
    function getIcons() {
        let iconNames = [];
        for (var key in Data) {
            if (Data.hasOwnProperty(key)) {
                if (!iconNames.includes(key)&&!group.includes(key)) {
                  iconNames.push(key);
                }
            }
        }
        setAllIcons(iconNames);
    }
    
    return (
        <>
            <div className="mb-sm w-100 flex items-center">

            </div>
            {all ?
                <div className="token-grid">
                    {AllIcons.map((token, i) => {
                        return <IconCard key={i} iconName={token} size={size} color={color} />
                    })}
                </div>
                :
                <div className="token-grid">
                    {group.map((token, i) => {
                        return <IconCard key={i} iconName={token} size={size} color={color} />
                    })}
                </div>
            }
        </>
    )
}
