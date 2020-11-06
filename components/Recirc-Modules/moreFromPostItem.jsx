import React from 'react'

export default function moreFromPostItem(props) {
    const data=props.data;
    return (
        <li className={`cb cb pt-md pb-md ${props.useBorder?'b bt':''}  flex-column`}>
            <div className="flex">
                <div className="w-100 clearfix">
                    <a href="#" class="bg-gray-lightest dib fr ml-sm ml-lg-ns w-33-s" style={{ width: '200px', height: '150px' }}>
                        <div style={{ opacity: 1, transition: 'opacity 500ms ease-in-out 0s' }}>
                            <figure class=" overflow-hidden relative hide-for-print">
                                <img width="200" height="150" src={data.image} class="mw-100" />
                            </figure>
                        </div>
                    </a>
                    <a href="#"  >
                        <h2 class="gray-darkest hover-blue mb-xs font--headline bold font-md3 w-66">{data.h2}</h2>
                    </a>
                </div>
            </div>
        </li>
    )
}
