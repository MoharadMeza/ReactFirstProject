import React from "react"
import SVG from "react-inlinesvg"
import { toAbsoluteUrl } from "../../../../../../_metronic/_helpers";

export function ColumnFormatter(props) {
    return (
        props ?
            <div className="conatiner">
                <div className="row">
                    <div className="col col-12 col-md-4">
                        {props.isRequired ?
                            <span className="svg-icon svg-icon-success">
                                <SVG src={toAbsoluteUrl("/media/svg/icons/Code/Done-circle.svg")} />
                            </span>
                            :
                            <span className="svg-icon svg-icon-danger">
                                <SVG src={toAbsoluteUrl("/media/svg/icons/Code/Error-circle.svg")} />
                            </span>
                        }
                    </div>
                    <div className="col col-12 col-md-4">
                        {props.isUsed ?
                            <span className="svg-icon svg-icon-success">
                                <SVG src={toAbsoluteUrl("/media/svg/icons/Code/Done-circle.svg")} />
                            </span>
                            :
                            <span className="svg-icon svg-icon-danger">
                                <SVG src={toAbsoluteUrl("/media/svg/icons/Code/Error-circle.svg")} />
                            </span>} </div>
                    <div className="col col-12 col-md-4">
                        {props.isAvailable ?
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
            : null
    )
}