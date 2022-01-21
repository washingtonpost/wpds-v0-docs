import React, { useState } from 'react'
import { PaginationDots } from "@washingtonpost/site-components/core/pagination-dots/"
import { ButtonIcon } from "@washingtonpost/site-components/core/button-icon";
import { ChevronLeft16 } from "@washingtonpost/site-components/core/icon/chevron-left/16"
import { ChevronRight16 } from "@washingtonpost/site-components/core/icon/chevron-right/16"
import { Card } from "@washingtonpost/site-components/core/card"
import { Carousel } from "@washingtonpost/site-components/core/carousel";


function DefaultExample() {
    const [Index, setIndex] = useState(1)
    const Total = 10;
    return (
        <div className="flex flex-column justify-center">
            <div className="flex">
                <ButtonIcon onClick={() => setIndex(Index - 1 > 0 ? Index - 1 : 0)} size="small" renderIcon={ChevronLeft16} color="white" />
                <PaginationDots
                    className="mt-sm"
                    current={Index}
                    label="Dots progress example"
                    total={Total}
                    unitName="step"
                />
                <ButtonIcon onClick={() => setIndex(Index + 1 < Total ? Index + 1 : Total)} size="small" renderIcon={ChevronRight16} color="white" />
            </div>
            <p className=" ma-auto mt-sm">Current index:{' '}{Index}</p>
        </div>
    )
}
function LessThan5Example() {
    const [Index, setIndex] = useState(1)
    const Total = 4;
    return (
        <div className="flex flex-column justify-center">
            <div className="flex">
                <ButtonIcon onClick={() => setIndex(Index - 1 > 0 ? Index - 1 : 0)} size="small" renderIcon={ChevronLeft16} color="white" />
                <PaginationDots
                    className="mt-sm ml-lg mr-lg"
                    current={Index}
                    label="Dots progress example"
                    total={Total}
                    unitName="step"
                />
                <ButtonIcon onClick={() => setIndex(Index + 1 < Total ? Index + 1 : Total)} size="small" renderIcon={ChevronRight16} color="white" />
            </div>
            <p className=" ma-auto mt-sm">Current index:{' '}{Index}</p>
        </div>
    )
}
function LessThan4Example() {
    const [Index, setIndex] = useState(1)
    const Total = 3;
    return (
        <div className="flex flex-column justify-center">
            <div className="flex">
                <ButtonIcon onClick={() => setIndex(Index - 1 > 0 ? Index - 1 : 0)} size="small" renderIcon={ChevronLeft16} color="white" />
                <PaginationDots
                    className="mt-sm ml-lg mr-lg"
                    current={Index}
                    label="Dots progress example"
                    total={Total}
                    unitName="step"
                />
                <ButtonIcon onClick={() => setIndex(Index + 1 < Total ? Index + 1 : Total)} size="small" renderIcon={ChevronRight16} color="white" />
            </div>
            <p className=" ma-auto mt-sm">Current index:{' '}{Index}</p>
        </div>
    )
}

function CardVisual() {
    return (
        <Card style={{ width: 200 }} className="bg-white h-auto pa-xs mr-sm overflow-hidden">
            <img src="https://picsum.photos/200/150" />
            <h6 className="pb-0 font--headline font-md">Card Title</h6>
            <p className="pt-0">Simple paragraph about this picture.</p>
        </Card>
    )
}

function CardExample() {
    return (
        <div className="flex flex-column h-auto justify-center">
            <Carousel navigateBy="item" arrowSize="sm" dots="always" hasGradientAtCutoff={false} style={{ width: 200 }} className="relative">
                <CardVisual />
                <CardVisual />
                <CardVisual />
                <CardVisual />
                <CardVisual />
                <CardVisual />
                <CardVisual />
            </Carousel>
        </div>
    )
}

export { DefaultExample, LessThan5Example, LessThan4Example, CardExample }

