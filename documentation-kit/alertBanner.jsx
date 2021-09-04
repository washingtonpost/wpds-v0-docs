import React from 'react'
import { Banner } from "@washingtonpost/site-components/core/banner";
import { Alert16 } from "@washingtonpost/site-components/core/icon/alert/16";
import { Check16 } from "@washingtonpost/site-components/core/icon/check/16";
import { Info16 } from "@washingtonpost/site-components/core/icon/info/16";

export default function alertBanner(props) {
     const{type}=props;
     let styles={background:"",fill:"",textColor:""}

     switch (type) {
         case 'informative':
             styles={background:"bg-blue-pale",fill:"blue-dark",textColor:"blue-dark"}
             break;
        case 'warning':
            styles={background:"bg-orange-pale",fill:"orange-dark",textColor:"orange-dark"}
            break;
        case 'error':
            styles={background:"bg-red-pale",fill:"red-dark",textColor:"red-dark"}
            break;
        case 'success':
            styles={background:"bg-green-pale",fill:"green-dark",textColor:"green-dark"}
            break;
         default:
            styles={background:"bg-blue-pale",fill:"blue-dark",textColor:"blue-dark"}
             break;
     }
    return (
        <Banner renderCloseButton={props.dismissable} className={`${styles.background} brad-4  ${props.className} w-100`}>
            <p className="flex"> 
                {type=='informative'&&<Info16 className={`fill-${styles.fill} mr-xs`} />}
                {type=='warning'&&<Alert16 className={`fill-${styles.fill} mr-xs`} />}
                {type=='success'&&<Check16s className={`fill-${styles.fill} mr-xs`} />}

                <span className={`${styles.textColor}`}>{props.children}</span>
            </p>
        </Banner>
    )
}
