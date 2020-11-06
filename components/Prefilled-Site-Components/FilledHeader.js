import React from 'react'
import { Header} from "@washingtonpost/site-components/core";
import leftNavData from '../../staticData/leftNavData'
import rightNavData from '../../staticData/rightNavData'
export default function FilledHeader(props) {
    return (
        <Header isAuthenticated={true} logOutUrl="https://washingtonpost.com/logout" loginUrl="https://washingtonpost.com/login" locationData="article" rightNavData={rightNavData} leftNavData={leftNavData} userName={props.userName}/>
    )
}
