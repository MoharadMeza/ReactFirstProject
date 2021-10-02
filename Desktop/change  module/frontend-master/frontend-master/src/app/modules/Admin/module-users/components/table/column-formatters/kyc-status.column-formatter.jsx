import React from "react"
import SVG from "react-inlinesvg"
import { toAbsoluteUrl } from "../../../../../../../_metronic/_helpers";

export function KycStatusColumnFormatter(props) {
    return (
        <div className="conatiner">
            <div className="row justify-content-center">
                <div className="col col-sm-12 col-md-4">
                    {props ?
                        <span className="svg-icon svg-icon-success">
                            <SVG src={toAbsoluteUrl("/media/svg/icons/Code/Done-circle.svg")} />
                        </span>
                        :
                        <span className="svg-icon svg-icon-danger">
                            <SVG src={toAbsoluteUrl("/media/svg/icons/Code/Error-circle.svg")} />
                        </span>
                    }
                </div>
            </div>
        </div>
    )
}