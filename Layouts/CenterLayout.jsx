import React from 'react'
import Footer from '../components/Prefilled-Site-Components/FilledFooter';
import Navigation from "../components/Prefilled-Site-Components/FilledHeader";
import SecondaryNav from "../components/Prefilled-Site-Components/FilledSecondaryNav";
import { Timestamp } from "@washingtonpost/site-components/core/timestamp";
import Byline from '../components/Prefilled-Site-Components/FilledByline';
import { Icon } from "@washingtonpost/site-components/core/icon";
import Bio from '../components/Prefilled-Site-Components/FilledBio';
import MoreFromPost from '../components/Recirc-Modules/moreFromPost'
import FilledNewsLetter from '../components/Prefilled-Site-Components/FilledNewsLetter'
import parser from 'react-html-parser'

import SplitLayout from '../components/Design-Components/toppersForCenterlayout/splitLayout'
export default function Standard(props) {
    const info = props.data;
    return (
        <>
            {console.log(props.data)}
            <Navigation userName="JohnDoe@gmail.com" />
            <div className="relative">
                        {/* <SecondaryNav alignment="center" className=" w-100" /> */}
                        {/* <SplitLayout label={info.label.basic&&info.label.basic.text} transparency={info.label.transparency.text} dark={false} headline={info.headlines.basic} image={info.additional_properties.lead_art.additional_properties.originalUrl}/> */}
                        <SplitLayout dark={true} label={info.label.basic&&info.label.basic.text} transparency={info.label.transparency.text} headline="Can High Fashion Change?" subhead={info.subheadlines.basic} image={info.content_elements[0].url}/>
                <main className="grid mr-auto ml-auto print-mt-none">
                    {/* Top section of Article */}


                    {/* Article Body */}
                    <article style={{maxWidth:'700px'}} className="grid-item grid-item--cols-sm-12 grid-item--cols-md-12  mb-xxl-ns mt-xxs mt-md-l grid-item--cols-lg-12 pr-lg-lg ma-auto">
                        


                        {/* Byline + Timestamp + Add to list */}
                        <div className="flex">
                            <div className="items-center">
                                {/* ByLine */}
                                <div className="byline flex mb-sm">
                                <Byline data={info}/>
                                </div>
                                {/* Timestamp */}
                               
                                <div className="mb-md gray-dark font--subhead font-xxs">
                                    <div className="display-date">
                                    <Timestamp as="span" date={info.display_date} format="FullDateWithTimezone" />
                                    </div>
                                </div>
                                {/* Add to list */}
                            </div>
                        </div>
                        {/* End of Byline + Timestamp + Add to list */}
                        {/* Article body */}
                        <div className="article-body">
                            <div className="remainder-content">
                                {/* Content Block */}
                                {info.content_elements.map((element,i)=>{
                                    if(i>1){
                                        return(
                                        <p className="font--body font-copy gray-darkest ma-0 pb-md">
                                            {parser(element.content)}
                                        </p>)
                                    }
                                })}
                               
                            </div>
                        </div>
                        {/* End of Article Body */}
                        {/* Comment Button */}
                        <div class="pb-lgmod" data-qa="comments-btn" data-sc-v="3.12.1" data-sc-c="commentcountbutton">
                            <div class="comments btn btn-white db hide-for-print" data-sc-v="3.12.1" data-sc-c="commentcountbutton">
                                <a href="#comments-wrapper" data-qa="comments-btn-link" class="gray-darkest hover-inherit db" data-sc-v="3.12.1" data-sc-c="commentcountbutton">
                                    <Icon className="content-box fill-gray-darkest mr-xs va-m" name="comment-solid" />131 Comments
                                </a>
                            </div>
                        </div>
                        {/* Author Bio */}
                        <Bio info={info} />

                        {/* More from the post */}
                        <MoreFromPost/>
                        {/* News Letter */}
                        <FilledNewsLetter/>
                    </article>
                </main>
            </div>
            {/* Footer of article */}
            <Footer className="w-100 pb-xl" />
        </>
    )
}
