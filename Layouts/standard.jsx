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

export default function Standard(props) {
    const info = props.data;
    return (
        <>
            {console.log(props.data)}
            <Navigation userName="JohnDoe@gmail.com" />
            <div className="relative">
                <main className="grid mr-auto ml-auto print-mt-none">
                    {/* Top section of Article */}
                    <header className="grid-item grid-item--cols-sm-12 grid-item--cols-md-12 b-l bb-l grid-item--cols-lg-12">
                        <SecondaryNav alignment="left" className=" w-100" />
                        <div className="mt-md mt-lg-ns">
                            <div className="font--subhead hide-for-print kicker mb-xs " data-qa="kicker">
                                <a href="#" className="font-bold link blue">
                                    {info.label.basic.text} <span className="font-light gray-dark"> • </span> 
                                    <span className="b b-dotted bw-thin bc-gray gray-dark font-light bb"> {info.label.transparency.text != 'News' ? info.label.transparency.text : ''}</span></a>
                            </div>
                        </div>
                        <h1 className="font--headline gray-darkest pb-sm">{info.headlines.basic}</h1>
                        {/* <h2 className="font--subhead font-light gray-dark mb-sm">{info.headlines.meta_title}</h2> */}
                    </header>

                    {/* Article Body */}
                    <article className="grid-item grid-item--cols-sm-12 grid-item--cols-md-12 b-l br-l mb-xxl-ns mt-xxs mt-md-l grid-item--cols-lg-8 pr-lg-lg">
                        
                        {/* Lede Art */}
                        <figure className="center mb-md ml-neg-gutter mr-neg-gutter ml-auto-ns mr-auto-ns  overflow-hidden relative hide-for-print">
                            <img src={`${info.additional_properties.lead_art.additional_properties.originalUrl}`} alt={""}
                                className="w-100 mw-100 h-auto" width="600" height="461" />
                            <figcaption className="left ml-gutter mr-gutter mr-auto-ns ml-auto-ns gray-dark font--subhead font-xxxs mt-xs mb-sm" aria-hidden="true">
                                {info.additional_properties.lead_art.subtitle}
                            </figcaption>
                        </figure>
                        {/* End of Lede Art */}

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
