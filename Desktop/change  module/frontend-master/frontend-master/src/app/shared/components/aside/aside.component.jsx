import React from "react"
import { MixedWidget } from "../../metronic/_partials/widgets/mixed/mixed-widget.component"
import BuyCreditWidget from "./buy-credit/buy-credit-widget.component"
import OutGoingCallsWidget from "./out-going-calls-widget.component"
import VirtualNumbers from "./virtual-numbers-widget.component"
import './aside.scss'
const CustomAside = () => {
    return (
        <div className="aside-right">
            <MixedWidget />
            <BuyCreditWidget />
            <VirtualNumbers />
            <OutGoingCallsWidget />
        </div>
    )
}
export default CustomAside