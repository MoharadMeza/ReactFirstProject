import React from "react"
import { toAbsoluteUrl } from "../../../../_metronic/_helpers"
import SVG from "react-inlinesvg"
const OutGoingCallsWidget = () => {
    return (
        <div className="card card-custom bg-light-100 mt-5">
            <div className="card-header w-100">
                <h1 className="card-title">
                    Outgoing calls
                </h1>
                <div className="card-info align-self-center">
                    <button className="btn p-0">
                        <span className="svg-icon svg-icon-2x m-0">
                            <SVG src={toAbsoluteUrl("/media/svg/icons/Code/Info-circle.svg")} />
                        </span>
                    </button>
                </div>
            </div>
            <div className="card-body d-flex flex-column">
                <div className="card bg-gray-100">
                    <div className="card-body">
                        <div className="checkbox-list">
                            <div className="mb-3">
                                <label className="checkbox checkbox-outline checkbox-success">
                                    <input type="checkbox" name="Checkboxes1" />
                                    <span></span>
                                    What is a virtual number?
                                </label>
                            </div>
                            <div className="mb-3">
                                <label className="checkbox checkbox-outline checkbox-success">
                                    <input type="checkbox" name="Checkboxes12" />
                                    <span></span>
                                    Add a virtual number
                                </label>
                            </div>
                            <div className="mb-3">
                                <label className="checkbox checkbox-outline checkbox-success">
                                    <input type="checkbox" name="Checkboxes3" />
                                    <span></span>
                                    My virtual numbers
                                </label>
                            </div>
                            <div>
                                <label className="checkbox checkbox-outline checkbox-success">
                                    <input type="checkbox" name="Checkboxes4" />
                                    <span></span>
                                    Extensions online
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OutGoingCallsWidget;