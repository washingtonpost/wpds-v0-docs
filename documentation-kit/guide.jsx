import React from 'react'
import { Close16 } from "@washingtonpost/site-components/core/icon/close/16";
import { Check16 } from "@washingtonpost/site-components/core/icon/check/16";
import { Alert16 } from "@washingtonpost/site-components/core/icon/alert/16";

export default function Guide(props) {
    const { guidance } = props;

    const Do = { border: 'green', classes: 'bg-green-pale bc-green', icon: Check16 };
    const Dont = { border: 'red', classes: 'bg-red-pale bc-red', icon: Close16 };
    const Caution = { border: 'orange', classes: 'bg-orange-pale bc-orange', icon: Alert16 }


    return (
        <div className={`${props.className} relative example flex items-center justify-center pt-xxl pb-xxl bg-gray-lightest`}>
            <div className="absolute top-0 w-100">
                {guidance == 'do' &&
                    <>
                        <hr style={{ borderColor: Do.border }} />
                        <div className={`h-sm w-sm brad-50 ml-xs b flex items-center justify-center ${Do.classes} `}>
                            <Check16 fill="green" />
                        </div>
                    </>
                }
                {guidance == "don't" &&
                    <>
                        <hr style={{ borderColor: Dont.border }} />
                        <div className={`h-sm w-sm brad-50 ml-xs b flex items-center justify-center ${Dont.classes} `}>
                            <Close16 fill="red" />
                        </div>
                    </>
                }
                {guidance == "caution" &&
                    <>
                        <hr style={{ borderColor: Caution.border }} />
                        <div className={`h-sm w-sm brad-50 ml-xs b flex items-center justify-center ${Caution.classes} `}>
                            <Alert16 fill="orange" />
                        </div>
                    </>
                }
            </div>
                {props.children}
            <div className="absolute italic gray-dark center bottom-0">
                {props.Caption}
            </div>
        </div>
    )
}
