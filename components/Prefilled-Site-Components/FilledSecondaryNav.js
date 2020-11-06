import React from 'react'
import {SecondaryNav} from '@washingtonpost/site-components';
import staticSection from '../../staticData/secondaryData'
export default function FilledSecondaryNav(props) {
    return (
        <SecondaryNav
        sectionData={props.sectionData?props.sectionData:staticSection}
        alignment={props.alignment?props.alignment:'left'}
        logoName={props.logoName?props.logoName:""}
        navItemElement="a"
        useGutter={true}
        className={props.className}
        />
    )
}
