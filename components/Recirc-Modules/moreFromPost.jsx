import React from 'react'
import PostItem from './moreFromPostItem';
export default function moreFromPost(props) {
    const staticItems = [
        {
            h2: 'Coronavirus updates:Trum suggest he will fire Fauci after election',
            image: 'https://picsum.photos/id/237/200/150'
        },
        {
            h2: 'George Conway:A presidency fueled by lies finishes the worst of them all',
            image: 'https://picsum.photos/id/289/200/150'
        },
        {
            h2: 'Judges in two states reject Trump campaign lawsuits as the president continues to press unsubstantiated claims of fraud',
            image: 'https://picsum.photos/id/409/200/150'
        },
        {
            h2: 'USPS processed 150,000 ballots after Election Day, jeopardizing thousands of votes',
            image: 'https://picsum.photos/id/429/200/150'
        },
        {
            h2: 'What time polls close in your state — and what to expect next',
            image: 'https://picsum.photos/id/429/200/150'
        }

    ]
    return (
        <div className="headline-list hide-for-print w-100 pb-sm mb-lg-mod b bt pt-lgmod">
            <div className="font--subhead font-sm bold gray-darkest">More from The Post</div>
            <ul className="list-unstyled mt-xs">
                {staticItems.map((d,i)=>{
                    return(<PostItem useBorder={i>0?true:false} data={d}key={i}/>)
                })}
            </ul>
        </div>
    )
}
