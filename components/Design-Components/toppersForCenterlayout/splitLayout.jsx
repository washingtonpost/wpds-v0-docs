import React from 'react'

export default function splitLayout(props) {
    return (
        <section className="topper">
            {props.left?<>
                <div className="image">
                </div>
                <div className="info">
                    <div className="font--subhead hide-for-print kicker mb-md " data-qa="kicker">
                        <a href="#" className={`font-bold link ${props.dark ? 'white' : 'blue'}`}>
                            {props.label} <span className="font-light gray-light"> {props.transparency != 'News' ? '•' : ''} </span>
                            <span className={`b b-dotted bw-thin bc-gray ${props.dark ? 'gray-light' : 'gray'} font-light bb`}> {props.transparency != 'News' ? props.transparency : ''}</span></a>
                    </div>
                    <h1 className="font--headline">
                        {props.headline}
                    </h1>
                </div>
            </>:<>
                <div className="info">
                    <div className="font--subhead hide-for-print kicker mb-md " data-qa="kicker">
                        <a href="#" className={`font-bold link ${props.dark ? 'white' : 'blue'}`}>
                            {props.label} <span className="font-light gray-light"> {props.transparency != 'News' ? '•' : ''} </span>
                            <span className={`b b-dotted bw-thin bc-gray ${props.dark ? 'gray-light' : 'gray'} font-light bb`}> {props.transparency != 'News' ? props.transparency : ''}</span></a>
                    </div>
                    <h1 className="font--headline font-light mb-sm">
                        {props.headline}
                    </h1>
                    <h2 className="font--subhead font-light">
                    {props.subhead}
                    </h2>
                </div>
                <div className="image">
                    <img width="100%" height="auto" src={props.image} alt="" srcset=""/>
                </div>
            </>}

            <style jsx>{`
            .topper{
                background-color:${props.dark?'black':''};
                display:grid;
                grid-template-columns:${props.left?'45% 55%':'55% 45%'};
            }
            .topper .info{
                background-color:${props.dark?'black':''};
                color:${props.dark?'white':''};
                display:flex;
                width:92%;
                max-width:800px;
                flex-direction:column;
                text-align:center;
                padding:0 48px;
                margin:0 auto;
                align-items:center;
                justify-content:center;
            }
            .topper .image{
                min-height:600px;
                height:100%;
                widht:100%;
            }
            `}</style>
        </section>
    )
}
