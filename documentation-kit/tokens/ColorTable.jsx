import React, { useState, useEffect } from 'react'
import Swatch from './colorSwatch';
import Data from '@washingtonpost/color-tokens/dist/json-flat/tokens.json'
import {Accordion} from '@washingtonpost/site-components/core/accordion/index'
export default function ColorTable(props) {
    const { groupName, filter } = props;
    const [Swatches, setSwatches] = useState([]);
    const [FilterSwatch, setFilterSwatch] = useState("All");
    useEffect(() => {
        getSwatches();
    }, [])

    /* Handles component prop types and maps them to an object and pushes to an array*/
    function getSwatches() {
        let swatches = [];
        for (var key in Data) {
            if (Data.hasOwnProperty(key)) {
                if (Data[key] && !swatches.includes(Data[key])) {
                    groupName.forEach(name => {
                        if (key.includes(name)) {
                            filter ? filter.forEach(f => {
                                if (!key.includes(f)) {
                                    swatches.push({ key: key, value: Data[key] });
                                }
                            }) : swatches.push({ key: key, value: Data[key] });
                        }
                    });
                }
            }
        }
        setSwatches(swatches);
    }

    return (
        <>
            <div className="mb-sm w-100 flex items-center">

            </div>
            <div className="token-grid">
                {Swatches.map((token, i) => {
                    return <Swatch key={i} value={token.value} token={token.key} />
                })}
            </div>
        </>
    )
}
