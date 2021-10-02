import React from "react"
import SVG from "react-inlinesvg"
import { toAbsoluteUrl } from "../../../../../../_metronic/_helpers"
import * as actions from "../../_redux/monitoring.actions"

export function LogsColumnFormatter(cellContent, row , rowIndex , {dispatch}) {

    function getLogs(type){
        const obj = {
            system : row.name,
            logType : type
        }
        dispatch(actions.fetchRecord(obj))
    }

    return (
        <div className="row">
            <div className="col col-sm-12 col-md-6">
                <button onClick={() => getLogs("all")} className="btn">
                    <span className="svg-icon icon-secondary">
                        <SVG src={toAbsoluteUrl("/media/svg/icons/Code/Question-circle.svg")} />
                    </span>
                </button>
            </div>
            <div className="col col-sm-12 col-md-6">
                <button onClick={() => getLogs("error")} className="btn">
                    <span className="svg-icon icon-secondary">
                        <SVG src={toAbsoluteUrl("/media/svg/icons/Code/Question-circle.svg")} />
                    </span>
                </button>
            </div>
        </div>
    )
}