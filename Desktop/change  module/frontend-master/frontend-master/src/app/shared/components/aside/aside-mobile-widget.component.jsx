import React from "react"
import { Paper, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import SVG from "react-inlinesvg"
import { toAbsoluteUrl } from "../../../../_metronic/_helpers"
const AsideMobileWidget = () => {
    return (
        <div className="card card-custom" style={{ backgroundColor: "white" }}>
            <div className="card-header w-100 align-content-end">
                <div className="card-wallet mb-0 mb-lg-5 align-self-center">
                    <span className="svg-icon svg-icon-primary svg-icon-3x d-block">
                        <SVG size="lg" src={toAbsoluteUrl("/media/svg/icons/Shopping/Wallet.svg")} />
                    </span>
                </div>
                <h1 className="wallet-invetory align-self-center">$4.91</h1>
            </div>
            <div className="card-body">
                <Link to="/">
                    <Paper className="mb-3">
                        <div className="container">
                            <div className="row">
                                <div className="col d-flex align-items-center">
                                    <Typography className="align-items-baseline" component="p">
                                        Send SMS
                                    </Typography>
                                </div>
                                <div className="col-auto">
                                    <span className="svg-icon svg-icon-3x svg-icon-primary d-block my-2">
                                        <SVG
                                            src={toAbsoluteUrl("/media/svg/icons/Communication/Mail.svg")}
                                        ></SVG>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Paper>
                </Link>
                <Link to="/">
                    <Paper className="mb-3">
                        <div className="container">
                            <div className="row">
                                <div className="col d-flex align-items-center">
                                    <Typography className="align-items-baseline" component="p">
                                        Top up Mobile
                                    </Typography>
                                </div>
                                <div className="col-auto">
                                    <span className="svg-icon svg-icon-3x svg-icon-warning d-block my-2">
                                        <SVG
                                            src={toAbsoluteUrl("/media/svg/icons/Devices/Phone.svg")}
                                        ></SVG>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Paper>
                </Link>
                <Link to="/">
                    <Paper className="mb-3">
                        <div className="container">
                            <div className="row">
                                <div className="col d-flex align-items-center">
                                    <Typography className="align-items-baseline" component="p">
                                        Bulk SMS
                                    </Typography>
                                </div>
                                <div className="col-auto">
                                    <span className="svg-icon svg-icon-3x svg-icon-danger d-block my-2">
                                        <SVG
                                            src={toAbsoluteUrl("/media/svg/icons/Code/Compiling.svg")}
                                        ></SVG>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Paper>
                </Link>
                <Link to="/">
                    <Paper>
                        <div className="container">
                            <div className="row">
                                <div className="col d-flex align-items-center">
                                    <Typography className="align-items-baseline" component="p">
                                        Send Fax
                                    </Typography>
                                </div>
                                <div className="col-auto">
                                    <span className="svg-icon svg-icon-3x svg-icon-success d-block my-2">
                                        <SVG
                                            src={toAbsoluteUrl("/media/svg/icons/Communication/Urgent-mail.svg")}
                                        ></SVG>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Paper>
                </Link>
            </div>
        </div>
    )
}
export default AsideMobileWidget;