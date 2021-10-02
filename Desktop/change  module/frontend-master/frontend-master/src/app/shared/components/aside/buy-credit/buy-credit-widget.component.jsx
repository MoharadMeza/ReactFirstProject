import React from "react"
import {Link} from "react-router-dom"
import { toAbsoluteUrl } from "../../../../../_metronic/_helpers"
import { payOptions } from "./buy-credit-widget.enum";
import SVG from "react-inlinesvg";
import Select from "react-select"
const BuyCreditWidget = () => {

    return (
        <div className="card card-custom gutter-b bg-light-100">
            <div className="card-header">
                <h1 className="card-title">
                    Buy Credit
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
                <div className="card card-inventory bg-gray-100 mb-5">
                    <div className="card-body text-center flex-column">
                        <div className="card-wallet mb-5">
                            <span className="svg-icon svg-icon-primary svg-icon-4x d-block">
                                <SVG size="lg" src={toAbsoluteUrl("/media/svg/icons/Shopping/Wallet.svg")} />
                            </span>
                            <h1 className="wallet-invetory">$4.91</h1>
                        </div>
                        <span className="svg-icon svg-icon-primary d-block mb-5">
                            <SVG size="lg" src={toAbsoluteUrl("/media/svg/icons/Navigation/Arrow-down.svg")} />
                        </span>
                        <div className="wallet-inventory-to d-flex justify-content-center">
                            <span className="svg-icon">
                                <SVG size="lg" src={toAbsoluteUrl("/media/svg/flags/136-iran.svg")} />
                            </span>
                            <h5 className="align-self-end m-0 ml-3">1235/5</h5>
                        </div>
                    </div>
                </div>
                <div className="card card-pay bg-gray-100 mb-5">
                    <div className="card-body">
                        <label htmlFor="">Available Balance</label>
                        <Select
                            options={payOptions}
                            defaultValue={payOptions[0]}
                            components={{
                                IndicatorSeparator: () => null
                            }}
                        />
                        <button className="btn w-100 py-3 mt-5 text-light" style={{ backgroundColor: "#0071A9" }}>
                            Pay
                        </button>
                    </div>
                </div>
                <div className="card card-steps bg-gray-100">
                    <div className="card-body d-flex flex-column">
                        <div className="checkbox-list">
                            <div className="mb-3">
                                <label className="checkbox checkbox-outline checkbox-success">
                                    <input type="checkbox" name="Checkboxes1" />
                                    <span></span>
                                    Trancaction history
                                </label>
                            </div>
                            <div className="mb-3">
                                <label className="checkbox checkbox-outline checkbox-success">
                                    <input type="checkbox" name="Checkboxes1" />
                                    <span></span>
                                    <Link to="/user/kyc">KYC status</Link>
                                </label>
                            </div>
                            <div className="mb-3">
                                <label className="checkbox checkbox-outline checkbox-success">
                                    <input type="checkbox" name="Checkboxes12" />
                                    <span></span>
                                    Account verifiction request
                                </label>
                            </div>
                            <div className="mb-3">
                                <label className="checkbox checkbox-outline checkbox-success">
                                    <input type="checkbox" name="Checkboxes3" />
                                    <span></span>
                                    <Link to="/user/supports">Request verifiction appointment</Link>
                                </label>
                            </div>
                            <div>
                                <label className="checkbox checkbox-outline checkbox-success">
                                    <input type="checkbox" name="Checkboxes4" />
                                    <span></span>
                                    <Link to="/user/schedule">My installation appointment</Link>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BuyCreditWidget