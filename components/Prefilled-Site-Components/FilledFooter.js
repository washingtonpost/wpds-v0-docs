import React from 'react'
import { Footer } from "@washingtonpost/site-components/core";
export default function FilledFooter(props) {
    return (
        <footer className={props.className}>
            <Footer env="sandbox" isAmp={false}  />
        </footer>
    )
}
