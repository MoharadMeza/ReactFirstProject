/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import useWindowDimensions from '../../../../../../components/window-dimension/window-dimension.component'
import { checkIsActive } from "../../../../../../../../_metronic/_helpers";
import AsideMobileWidget from "../../../../../../components/aside/aside-mobile-widget.component";

export function CustomHeaderMenu({ layoutProps }) {

    const location = useLocation();
    const { width } = useWindowDimensions();
    const getMenuItemActive = (url) => {
        return checkIsActive(location, url) ? "menu-item-active" : "";
    }
    return <div
        id="kt_header_menu"
        className={`header-menu header-menu-mobile ${layoutProps.ktMenuClasses}`}
        {...layoutProps.headerMenuAttributes}
    >
        {/*begin::Header Nav*/}
        <ul
            className={`menu-nav pt-0 ${layoutProps.ulClasses}`}>
            
            {/*begin::1 Level*/}
            <li className={`menu-item menu-item-rel ${getMenuItemActive('/dashboard')}`}>
                <NavLink className="menu-link" to="/setting-profile">
                    <span className="menu-text">Home</span>
                </NavLink>
            </li>

            <li className={`menu-item menu-item-rel ${getMenuItemActive('/instructions')}`}>
                <NavLink className="menu-link" to="/instructions">
                    <span className="menu-text">Instructions</span>
                </NavLink>
            </li>
            <li className={`menu-item menu-item-rel ${getMenuItemActive('/user/supports')}`}>
                <NavLink className="menu-link" to="/user/supports">
                    <span className="menu-text">Support</span>
                </NavLink>
            </li>
            <li className={`menu-item menu-item-rel ${getMenuItemActive('/rates')}`}>
                <NavLink className="menu-link" to="/rates">
                    <span className="menu-text">Rates</span>
                </NavLink>
            </li>
            <li className={`menu-item menu-item-rel ${getMenuItemActive('/setting-profile')}`}>
                <NavLink className="menu-link" to="/setting-profile">
                    <span className="menu-text">Profile</span>
                </NavLink>
            </li>
            {/*end::1 Level*/}

            {
                width < 990 ?
                    <li>
                        <AsideMobileWidget />
                    </li>
                    : null
            }

        </ul>
        {/*end::Header Nav*/}
    </div>;
}
