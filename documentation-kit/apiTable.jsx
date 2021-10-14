/* To use component import into MDX and add prop componentName="the name you want to match" */
/* Example <ApiTable componentName="accordion"/> */

import React, { useEffect, useState } from 'react'
import LibData from '@washingtonpost/site-components/dist/component-data.json'
import { Select, SelectOption } from '@washingtonpost/site-components/core/select/index'
// import TDService from 'turndown'; Was experimenting with converting to markdown

export default function apiTable(props) {
    // const tdService=new TDService();
    const { componentName } = props;
    const [Data, setData] = useState(null);
    const [componentProps, setComponentProps] = useState(null);

    //When component mounts cycle through library component-json.data to match name to component name
    useEffect(() => {
        for (let i = 0; i < LibData.length; i++) {
            for (let d = 0; d < LibData[i].length; d++) {
                const component = LibData[i][d];
                const name = component.displayName.toLowerCase();
                if (name == componentName) {
                    setData(component)
                }
            }
        }
    }, []);

    //when data is available handle each prop type
    useEffect(() => {
        if (Data) {
            handleType()
        }
    }, [Data])

    /* Handles component prop types and maps them to an object and pushes to an array*/
    function handleType() {
        let propData = [];
        for (var key in Data.props) {
            if (Data.props.hasOwnProperty(key)) {
                if(Data.props[key].type){
                    let prop = {
                        name: key,
                        description: Data.props[key].description,
                        type: Data.props[key].type?Data.props[key].type.name:'',
                        default: Data.props[key].defaultValue ? Data.props[key].defaultValue.value : "-",
                        enum: Data.props[key].type.name == "enum" && handleEnum(Data.props[key]),
                        required: Data.props[key].required
                    }
                    propData.push(prop);
                }
            }
        }
        setComponentProps(propData);
    }
    /* When an enmum is present maps values to array of options */
    function handleEnum(d) {
        let Options = [];
        for (let v = 0; v < d.type.value.length; v++) {
            Options.push(d.type.value[v].value)
        }
        return Options;
    }


    return Data && (
        <>
            <table className="api-table ">
                <thead>
                    <tr>
                        <td>Property</td>
                        <td>Description</td>
                        <td>Type</td>
                        <td>Default</td>
                        <td>Required</td>
                    </tr>
                </thead>
                <tbody>
                    {componentProps && componentProps.map((prop, i) => {
                        return (
                            <tr key={i}>
                                <td className="font-light font-xxxs">{prop.name}</td>
                                <td className="w-100 font-light font-xxxs">{prop.description}</td>
                                <td className="w-100 font-light font-xxxs"><span className="bg-gray-lighter brad-4 pa-xs">{prop.type}</span></td>
                                <td className="w-100 font-light font-xxxs">{
                                    prop.enum ?
                                        <select name="options">
                                            {prop.enum.map((value, i) => {
                                                return <option className="pl-sm pr-sm" key={i} value={value} selected={value == prop.default}>{value}</option>
                                            })}
                                        </select>
                                        :
                                        prop.default != 'undefined' ? prop.default : '-'
                                }</td>
                                <td className={`w-100 font-light font-xxxs ${prop.required ? 'red-dark' : ''}`}>{prop.required ? 'true' : 'false'}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

