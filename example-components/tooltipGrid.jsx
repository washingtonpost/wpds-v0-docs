import React,{useState} from 'react'
import {Button} from '@washingtonpost/site-components/core/button'
import {Tooltip} from "@washingtonpost/site-components/core/Tooltip/"
function GridSet() {
    const [Popover, setPopover] = useState(false)
    return (
    <div className="flex flex-column items-center justify-center">
    <div className="grid-grid">
        <div className="pa-lg">
            <Tooltip asPopOver={Popover} placement="top-start" content={<div className="pa-xs">Beak at top start</div>}>
                <p>{Popover?'Click to see:':'Hover to see:'} Top-Start</p>
            </Tooltip>
        </div>
        <div className="pa-lg">
            <Tooltip asPopOver={Popover} placement="top" content={<div className="pa-xs">Beak is centered</div>}>
                <p>{Popover?'Click to see:':'Hover to see:'} Top</p>
            </Tooltip>
        </div>
        <div className="pa-lg">
            <Tooltip asPopOver={Popover} placement="top-end" content={<div className="pa-xs">Beak top end</div>}>
                <p>{Popover?'Click to see:':'Hover to see:'} Top-End</p>
            </Tooltip>
        </div>
        <div className="pa-lg">
            <Tooltip asPopOver={Popover} placement="left-start" content={<div className="pa-sm">Beak left start</div>}>
                <p>{Popover?'Click to see:':'Hover to see:'} Left-Start</p>
            </Tooltip>
        </div>
        <div className="pa-lg">
            <Tooltip asPopOver={Popover} placement="left" id="tooltip" content={<div className="pa-sm">Beak left</div>}>
                <p>{Popover?'Click to see:':'Hover to see:'} Left</p>
            </Tooltip>
        </div>
        <div className="pa-lg">
            <Tooltip asPopOver={Popover} placement="left-end" id="tooltip" content={<div className="pa-sm">Beak left end</div>}>
                <p>{Popover?'Click to see:':'Hover to see:'} Left-End</p>
            </Tooltip>
        </div>
        <div className="pa-lg">
            <Tooltip asPopOver={Popover} placement="right-start" content={<div className="pa-sm">Beak right start</div>}>
                <p>{Popover?'Click to see:':'Hover to see:'} Right-Start</p>
            </Tooltip>
        </div>
        <div className="pa-lg">
            <Tooltip asPopOver={Popover} placement="right" id="tooltip" content={<div className="pa-sm">Beak right</div>}>
                <p>{Popover?'Click to see:':'Hover to see:'} Right</p>
            </Tooltip>
        </div>
        <div className="pa-lg">
            <Tooltip asPopOver={Popover} placement="right-end" id="tooltip" content={<div className="pa-sm">Beak right end</div>}>
                <p>{Popover?'Click to see:':'Hover to see:'} Right-End</p>
            </Tooltip>
        </div>
        <div className="pa-lg">
            <Tooltip asPopOver={Popover} placement="bottom-start" content={<div className="pa-xs">Beak bottom start</div>}>
                <p>{Popover?'Click to see:':'Hover to see:'} Bottom-Start</p>
            </Tooltip>
        </div>
        <div className="pa-lg">
            <Tooltip asPopOver={Popover} placement="bottom" id="tooltip" content={<div className="pa-xs">Beak bottom</div>}>
                <p>{Popover?'Click to see:':'Hover to see:'} Bottom</p>
            </Tooltip>
        </div>
        <div className="pa-lg">
            <Tooltip asPopOver={Popover} placement="bottom-end" id="tooltip" content={<div className="pa-xs">Beak bottom end</div>}>
                <p>{Popover?'Click to see:':'Hover to see:'} Bottom-End</p>
            </Tooltip>
        </div>
    </div>
        <Button  onClick={()=> setPopover(!Popover)} color="white">Show {Popover?' Tooltip':' Popover'}</Button>
    </div>
    )
}


export {GridSet}