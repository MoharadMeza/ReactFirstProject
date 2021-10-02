import React from "react"
import { Paper, Typography } from "@material-ui/core";
import SVG from "react-inlinesvg"
import { toAbsoluteUrl } from "../../../../_metronic/_helpers"
const VirtualNumbersWidget = () => {
    return (
        <div className="card card-custom bg-light-100 mt-5">
            <div className="card-header w-100">
                <h1 className="card-title">
                    Virtual Numbers
                </h1>
                <div className="card-info align-self-center">
                    <button className="btn p-0">
                        <span className="svg-icon svg-icon-2x m-0">
                            <SVG src={toAbsoluteUrl("/media/svg/icons/Code/Info-circle.svg")} />
                        </span>
                    </button>
                </div>
            </div>
            <div className="card-body">
                <div className="card">
                    <div className="card-body bg-gray-100">
                        <Paper className="p-5" style={{ backgroundColor: "#FFE2E5" }}>
                            <div className="row">
                                <div className="col-auto">
                                    <span className="svg-icon svg-icon-danger">
                                        <SVG src={toAbsoluteUrl("/media/svg/icons/Communication/Group-chat.svg")} />
                                    </span>
                                </div>
                                <div className="col">
                                    <Typography>
                                        You have 2 vitual numbers pending of payment please pay items now to avoid service suspension
                                    </Typography>
                                </div>
                            </div>
                        </Paper>
                        <button className="btn text-light w-100 py-3 mt-5" style={{ backgroundColor: "#0071A9" }}>
                            Pay
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default VirtualNumbersWidget;