import React from "react"
import SVG from "react-inlinesvg"
import { toAbsoluteUrl } from "../../../../../_metronic/_helpers";
import Accordions from "../../../../shared/components/accordion/accordion.component"
import { AccordionSummary, AccordionDetails, Accordion } from "../../../../shared/components/accordion/accordion.style"
import './text.scss'

export default function InstructionsAccordion() {

    return (
        <Accordions className="accordion">
            <Accordion>
                <AccordionSummary>
                    <span className="svg-icon svg-icon-primary mr-3 arrow-svg">
                        <SVG src={toAbsoluteUrl("/media/svg/icons/Navigation/Angle-double-right.svg")} />
                    </span>
                    How may i create a new account?
                </AccordionSummary>
                <AccordionDetails  className="pl-5">
                    <ol>
                        <li className="text">Enter the 7 service center</li>
                        <li className="text">Fill in a simple form with your desired username, password and your email address.</li>
                        <li className="text">Check your email address and verify your new 007VoIP.com account by clicking on the verification link</li>
                        <li className="text">Check your details and click for creating your new account</li>
                    </ol>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary>
                    <span className="svg-icon svg-icon-primary mr-3 arrow-svg">
                        <SVG src={toAbsoluteUrl("/media/svg/icons/Navigation/Angle-double-right.svg")} />
                    </span>
                    Why I cannot login on the Voip software or on my smartphone device?
                </AccordionSummary>
                <AccordionDetails>
                    <p className="pl-7">
                        Remember that for logging inside the Voip software you must use your software login username which is:your_username*opmsecurity. You should type in all the same, including the star (*) character and opmsecurity. For example, if your web login is marcowen your software login username is:marcowen*opmsecurity. Please type and check the correct spelling. You also may use the software login username for the web login.
                    </p>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary>
                    <span className="svg-icon svg-icon-primary mr-3 arrow-svg">
                        <SVG src={toAbsoluteUrl("/media/svg/icons/Navigation/Angle-double-right.svg")} />
                    </span>
                    Why I cannot login on the Voip software or on my smartphone device?
                </AccordionSummary>
                <AccordionDetails>
                    <p className="pl-7">
                        Remember that for logging inside the Voip software you must use your software login username which is:your_username*opmsecurity. You should type in all the same, including the star (*) character and opmsecurity. For example, if your web login is marcowen your software login username is:marcowen*opmsecurity. Please type and check the correct spelling. You also may use the software login username for the web login.
                    </p>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary>
                    <span className="svg-icon svg-icon-primary mr-3 arrow-svg">
                        <SVG src={toAbsoluteUrl("/media/svg/icons/Navigation/Angle-double-right.svg")} />
                    </span>
                    I cannot register because the register form does not accept my inserted password
                </AccordionSummary>
                <AccordionDetails className="pl-15">
                    We got a strict password restriction, all for protecting your new account. Please follow the instructions for creating a secure password:
                    <ul className="pl-7">
                        <li className="text">Do not set a password similar or equal your username.</li>
                        <li className="text">Do not set easy or common word strings like abc or peter.</li>
                        <li className="text">Do not set repeated character strings like abc or qwe or zxcvbn</li>
                        <li className="text">Set a password between 6 and 39 of character length</li>
                        <li className="text">Do not set a password which is too easy to guess like password2015</li>
                    </ul>
                    Please remember that this kind of password will not accepted by our system during account creation. You may use the automatic password creation tool, just hit the bottom right to the password field and our system will automatically create a secure password for your new account.
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary>
                    <span className="svg-icon svg-icon-primary mr-3 arrow-svg">
                        <SVG src={toAbsoluteUrl("/media/svg/icons/Navigation/Angle-double-right.svg")} />
                    </span>
                    Why we charge a “handling fee” in some payment options?
                </AccordionSummary>
                <AccordionDetails>
                    <p className="text pl-7">
                        In some cases, new accounts got an account recharge limitation for a certain time and amount, reaching this limit no farther recharge is possible with the same payment option. Please use another payment option or verify your account for avoid limitations.
                    </p>
                    <ul>
                        <li className="text">Please do not recharge twice at a time, wait a certain time for recharging again, you may check the time remaining inside your 007VoIP.com service center.</li>
                        <li className="text">Restrictions will apply on other possible accounts.</li>
                    </ul>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary>
                    <span className="svg-icon svg-icon-primary mr-3 arrow-svg">
                        <SVG src={toAbsoluteUrl("/media/svg/icons/Navigation/Angle-double-right.svg")} />
                    </span>
                    Is it possible to avoid payment processing fees?
                </AccordionSummary>
                <AccordionDetails>
                    <p className="text pl-7">
                        Some payment options are charging us a very high processing and currency exchange fee which me must pass to our customers. Our Company is very low profit orientated and to continue operate and offer the lowest calling and SMS rates on the market we cannot pay for processing and currency exchange fees of some payment types or countries with a very high processing fee.
                    </p>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary>
                    <span className="svg-icon svg-icon-primary mr-3 arrow-svg">
                        <SVG src={toAbsoluteUrl("/media/svg/icons/Navigation/Angle-double-right.svg")} />
                    </span>
                    How may I use the service?
                </AccordionSummary>
                <AccordionDetails className="ml-15">
                    <b>Smartphones:</b>
                    <p className="text">Following Operating systems are supported: Android, Windows Phone or iOS (iPhone, iPod, iPad).</p>
                    <b>Computer:</b>
                    <p className="text">For specific details of each version, you can go to the download section and download the specific application for your phone. You can also try a generic VoIP software, like Bria or Zoiper.</p>
                    <b>Landline:</b>
                    <p className="text">Using local access numbers: The system is similar to a prepaid calling card system; first dial the local access number in your country, followed by the destination number but including the international country code. For a list of countries where you can use our access numbers, log in on the website – settings and check the country list “Local access number configuration” last option on the setting page. There you may also read all necessary instructions regarding. LOG IN HERE</p>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary>
                    <span className="svg-icon svg-icon-primary mr-3 arrow-svg">
                        <SVG src={toAbsoluteUrl("/media/svg/icons/Navigation/Angle-double-right.svg")} />
                    </span>
                    Can I use my smartphone with this service?
                </AccordionSummary>
                <AccordionDetails>
                    <p className="pl-7">
                        Yes. Supported operating systems are Android, Windows Phone and iOS. Enter our download section to download the necessary software that allows you to call with VOIP through your smartphone.
                    </p>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary>
                    <span className="svg-icon svg-icon-primary mr-3 arrow-svg mb-7">
                        <SVG src={toAbsoluteUrl("/media/svg/icons/Navigation/Angle-double-right.svg")} />
                    </span>
                    Why I cannot login on the Voip software or on my smartphone device?
                </AccordionSummary>
                <AccordionDetails className="pl-15">
                    The SIP configuration may be found in the download page, along with the guidelines for configuring devices.
                </AccordionDetails>
            </Accordion>
        </Accordions>
    )
}