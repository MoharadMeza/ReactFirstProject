import React, { useEffect } from 'react'
import SVG from 'react-inlinesvg'
import { toAbsoluteUrl } from '../../../../../_metronic/_helpers'
import KTWizard from "../../../../../_metronic/_assets/js/components/wizard"
import InstructionAccordion from './instructions-accordion.component'
import './instructions-form.scss'
import './text.scss'
import paypal from "../../../../assets/images/PayPal.svg"
import opennode from "../../../../assets/images/opennode.svg"

export default function InstructionsForm() {
    useEffect(() => {
        new KTWizard('kt_wizard', {
            startStep: 1, // Initial active step number
            clickableSteps: true,  // Allow step clicking
        })
    }, [])
    return (
        <div className="bg-light-white px-5 py-10 rounded instruction" dir="ltr">
            <h1 className="pl-7">
                Instructions
            </h1>
            <p className="text-light-dark pl-9">
                How to use 007.voip.com
            </p>
            <div className="card card-custom shadow-none card-transparent mt-10">
                <div className="card-body p-0">
                    <div className="wizard wizard-4" id="kt_wizard" data-wizard-state="step-first" data-wizard-clickable="true">
                        <div className="wizard-nav">
                            <div className="wizard-steps">
                                <div className="wizard-step" data-wizard-type="step" data-wizard-state="current">
                                    <div className="wizard-wrapper p-5 py-10 px-lg-3">
                                        <div className="wizard-label d-flex">
                                            <div className="wizard-title">
                                                <span className="svg-icon mr-3">
                                                    <SVG src={toAbsoluteUrl("/media/svg/icons/Devices/phone.svg")} />
                                                </span>
                                                SmartPhone
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="wizard-step" data-wizard-type="step">
                                    <div className="wizard-wrapper p-5 py-10 px-lg-3">
                                        <div className="wizard-label">
                                            <div className="wizard-title">
                                                <span className="svg-icon mr-3">
                                                    <SVG src={toAbsoluteUrl("/media/svg/icons/Devices/Laptop.svg")} />
                                                </span>
                                                Computer
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="wizard-step" data-wizard-type="step">
                                    <div className="wizard-wrapper p-5 py-10 px-lg-3">
                                        <div className="wizard-label">
                                            <div className="wizard-title">
                                                <span className="svg-icon mr-3">
                                                    <SVG src={toAbsoluteUrl("/media/svg/icons/Communication/Call.svg")} />
                                                </span>
                                                Landline
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="wizard-step" data-wizard-type="step">
                                    <div className="wizard-wrapper p-5 py-10 px-lg-3">
                                        <div className="wizard-label">
                                            <div className="wizard-title">
                                                <span className="svg-icon mr-3">
                                                    <SVG src={toAbsoluteUrl("/media/svg/icons/Devices/phone.svg")} />
                                                </span>
                                                Mobile Recharge
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="wizard-step" data-wizard-type="step">
                                    <div className="wizard-wrapper p-5 py-10 px-lg-3">
                                        <div className="wizard-label">
                                            <div className="wizard-title">
                                                <span className="svg-icon mr-3">
                                                    <SVG src={toAbsoluteUrl("/media/svg/icons/Devices/phone.svg")} />
                                                </span>
                                                Fax
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card card-custom card-shadowless rounded-top-0">
                            <div className="card-body p-0 bg-light">
                                <div className="row justify-content-center py-8 px-8 py-lg-10 px-lg-10">

                                    <form className="form mt-0 mt-lg-10" id="kt_form">
                                        <div className="mb-5" data-wizard-type="step-content" data-wizard-state="current">
                                            <div className="card-body bg-light-white rounded mb-15">
                                                <b>Use our service with your Smartphone and try the following options by:</b>
                                                <ul className="list-style mt-3">
                                                    <li className="text">Installing a softphone in your smartphone (Login on our website and get yours in the download section)</li>
                                                    <li className="text">Using a local access number. The Access number works like a calling card; you need to call first our access number and after your destination number including the country code. By calling this number, you get charged like a local call from your telephone operator and we charge you the destination call according our cheap rate list.</li>
                                                    <li className="text">Using a generic SIP software and adding your sip credential. You find the SIP credential and configuration method inside theweb login panel.</li>
                                                </ul>
                                            </div>
                                            <div className="card-body bg-light-white rounded mb-15">
                                                <h2 className="text">
                                                    How to pay or recharge my prepaid VoIP-account?
                                                </h2>
                                                <p className="text pl-2">
                                                    We offer a lot of different payment options. By logging into your Web-Login you will find your preferred recharge options:
                                                </p>
                                                <div className="payment">

                                                    <span className="mr-10">
                                                        <SVG src={opennode} />
                                                    </span>
                                                    <span>
                                                        <SVG src={paypal} />
                                                    </span>
                                                </div>
                                            </div>
                                            <h3 className="text-primary mb-7">Frequently asked questions</h3>
                                            <div className="bg-light-white rounded mt-10">
                                                <InstructionAccordion />
                                            </div>
                                        </div>
                                        <div className="mb-5" data-wizard-type="step-content">
                                            <div className="card-body bg-light-white rounded mb-15">
                                                <b>
                                                    Use our service with your Computer and try the following options by:
                                                </b>
                                                <ul className="list-style mt-3">
                                                    <li className="text">Using our VoIP Softphone for your Computer (downloadable inside the web login panel)</li>
                                                    <li className="text">Downloading a generic SIP software and adding your sip credential. You find the SIP credential and configuration method inside theweb login panel.</li>
                                                </ul>
                                            </div>
                                            <div className="card-body bg-light-white rounded mb-15">
                                                <h2 className="text">
                                                    How to pay or recharge my prepaid VoIP-account?
                                                </h2>
                                                <p className="text ml-2">
                                                    We offer a lot of different payment options. By logging into your Web-Login you will find your preferred recharge options:
                                                </p>
                                                <div className="payment">
                                                    <span className="mr-10 mb-sm-0 mb-5">
                                                        <SVG src={opennode} />
                                                    </span>
                                                    <span>
                                                        <SVG src={paypal} />
                                                    </span>
                                                </div>
                                            </div>
                                            <h3 className="text-primary mb-7">Frequently asked questions</h3>
                                            <div className="bg-light-white rounded mt-5">
                                                <InstructionAccordion />
                                            </div>
                                        </div>
                                        <div className="mb-5" data-wizard-type="step-content">
                                            <div className="card-body bg-light-white rounded mb-15">
                                                <b>
                                                    Use our service with your Landline Phone and try the following options by:
                                                </b>
                                                <ul className="list-style mt-3">
                                                    <li className="text">Calling with your Landline a local access number. The Access number works like a calling card; you need to call first our access number and after your destination number including the country code. By calling this number, you get charged like a local call from your mobile operator and we charge you the destination call according our cheap rate list.</li>
                                                    <li className="text">Calling with an IP Phone (like a Siemens Gigaset C610a IP), we set up for you this IP Phone remotely using TeamViewer – takes not more than 5 minutes of configuration time, you just buy the phone on your preferred store or online.</li>
                                                </ul>
                                            </div>
                                            <div className="card-body bg-light-white rounded mb-15">
                                                <h2 className="text">
                                                    How to pay or recharge my prepaid VoIP-account?
                                                </h2>
                                                <p className="text ml-2">
                                                    We offer a lot of different payment options. By logging into your Web-Login you will find your preferred recharge options:
                                                </p>
                                                <div className="payment">
                                                    <span className="mr-10 mb-sm-0 mb-5">
                                                        <SVG src={opennode} />
                                                    </span>
                                                    <span>
                                                        <SVG src={paypal} />
                                                    </span>
                                                </div>
                                            </div>
                                            <h3 className="text-primary mb-7">Frequently asked questions</h3>
                                            <div className="bg-light-white rounded mt-5">
                                                <InstructionAccordion />
                                            </div>
                                        </div>
                                        <div className="mb-5" data-wizard-type="step-content">
                                            <div className="card-body bg-light-white rounded mb-15">
                                                <b>
                                                    Recharge your mobile phone or the one of your friends or family, wherever they are, using our mobile recharge service.
                                                </b>
                                                <ul className="list-style mt-3">
                                                    <li className="text">Log into the 007VoIP.com Web panel.Inside there you will find a button for “mobile recharge” and you may recharge any mobile number anywhere in the world.</li>
                                                    <li className="text">First enter mobile number in international format, select the amount you want to top-up, and after a few seconds the destination cellphone will receive the recharge. That Simple! Please remember to check from time to time our mobile recharge offers.</li>
                                                </ul>

                                            </div>
                                            <div className="card-body bg-light-white rounded mb-15">
                                                <h2 className="text">
                                                    How to pay or recharge my prepaid VoIP-account?
                                                </h2>
                                                <p className="text ml-2">
                                                    We offer a lot of different payment options. By logging into your Web-Login you will find your preferred recharge options:
                                                </p>
                                                <div className="payment">
                                                    <span className="mr-10 mb-sm-0 mb-5">
                                                        <SVG src={opennode} />
                                                    </span>
                                                    <span>
                                                        <SVG src={paypal} />
                                                    </span>
                                                </div>
                                            </div>
                                            <h3 className="text-primary mb-7">Frequently asked questions</h3>
                                            <div className="bg-light-white rounded mt-5">
                                                <InstructionAccordion />
                                            </div>

                                        </div>
                                        <div className="mb-5" data-wizard-type="step-content">
                                            <div className="card-body bg-light-white rounded mb-15">
                                                <b>
                                                    THE EASIEST WAY OF SENDING FAX ONLINE
                                                </b>
                                                <ul className="list-style mt-3">
                                                    <li className="text">It was never so easy sending a FAX, simple upload your documents in JPEG or PDF Format, insert the destination Fax number and and hit the send FAX button. Our system does the rest and you, you may come back later for checking the sending status of our easy online fax delivery system.</li>
                                                </ul>
                                            </div>
                                            <div className="card-body bg-light-white rounded mb-15">
                                                <h2 className="text">
                                                    How to pay or recharge my prepaid VoIP-account?
                                                </h2>
                                                <p className="text ml-2">
                                                    We offer a lot of different payment options. By logging into your Web-Login you will find your preferred recharge options:
                                                </p>
                                                <div className="payment">
                                                    <span className="mr-10 mb-sm-0 mb-5">
                                                        <SVG src={opennode} />
                                                    </span>
                                                    <span>
                                                        <SVG src={paypal} />
                                                    </span>
                                                </div>
                                            </div>
                                            <h3 className="text-primary mb-7">Frequently asked questions</h3>
                                            <div className="bg-light-white rounded mt-5">
                                                <InstructionAccordion />
                                            </div>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}