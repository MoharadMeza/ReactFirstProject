/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import {
  toAbsoluteUrl,
  checkIsActive
} from "../../../../../../../../_metronic/_helpers";

export function AsideMenuList({ layoutProps }) {
  const location = useLocation();
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
      ? ` ${!hasSubmenu &&
          "menu-item-active"} menu-item-open menu-item-not-hightlighted`
      : "";
  };

  return (
    <>
      {/* begin::Menu Nav */}
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive("/dashboard", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/dashboard">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")} />
            </span>
            <span className="menu-text">Dashboard</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive(
            "/admin/available-payment-methods",
            false
          )}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/admin/available-payment-methods">
            <span className="svg-icon menu-icon">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/Shopping/Wallet.svg")}
              />
            </span>
            <span className="menu-text">Available Peyment Methods</span>
          </NavLink>
        </li>
        <li
          className={`menu-item ${getMenuItemActive(
            "/admin/black-list-ip",
            false
          )}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/admin/black-list-ip">
            <span className="svg-icon menu-icon">
              <SVG
                src={toAbsoluteUrl(
                  "/media/svg/icons/General/Shield-protected.svg"
                )}
              />
            </span>
            <span className="menu-text">Black List IP</span>
          </NavLink>
        </li>
        <li
          className={`menu-item ${getMenuItemActive("/admin/email", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/admin/email">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Mailbox.svg")} />
            </span>
            <span className="menu-text">Email</span>
          </NavLink>
        </li>
        <li
          className={`menu-item ${getMenuItemActive(
            "/admin/global-message",
            false
          )}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/admin/global-messages">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Library.svg")} />
            </span>
            <span className="menu-text">Global Message</span>
          </NavLink>
        </li>
        <li
          className={`menu-item ${getMenuItemActive("/admin/kyc", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/admin/kyc">
            <span className="svg-icon menu-icon">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/General/Binocular.svg")}
              />
            </span>
            <span className="menu-text">Know Your Customer</span>
          </NavLink>
        </li>
        <li
          className={`menu-item ${getMenuItemActive("/admin/users", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/admin/users">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/General/User.svg")} />
            </span>
            <span className="menu-text">Users</span>
          </NavLink>
        </li>
        <li
          className={`menu-item ${getMenuItemActive(
            "/admin/monitoring",
            false
          )}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/admin/monitoring">
            <span className="svg-icon menu-icon">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/General/Visible.svg")}
              />
            </span>
            <span className="menu-text">Monitoring</span>
          </NavLink>
        </li>
        <li
          className={`menu-item ${getMenuItemActive("/admin/schedule", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/admin/schedule">
            <span className="svg-icon menu-icon">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/Code/Time-schedule.svg")}
              />
            </span>
            <span className="menu-text">Schedule</span>
          </NavLink>
        </li>
        <li
          className={`menu-item ${getMenuItemActive("/admin/supports", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/admin/supports">
            <span className="svg-icon menu-icon">
              <SVG
                src={toAbsoluteUrl(
                  "/media/svg/icons/General/Notifications1.svg"
                )}
              />
            </span>
            <span className="menu-text">Supports</span>
          </NavLink>
        </li>
        <li
          className={`menu-item ${getMenuItemActive(
            "/admin/custom-rate",
            false
          )}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/admin/custom-rate">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/General/Star.svg")} />
            </span>
            <span className="menu-text">Custom Rate</span>
          </NavLink>
        </li>
        <li
          className={`menu-item ${getMenuItemActive("/admin/payment", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/admin/payment">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Money.svg")} />
            </span>
            <span className="menu-text">Payment</span>
          </NavLink>
        </li>

        {/*begin::2 Level*/}

        {/*end::1 Level*/}
      </ul>

      {/* end::Menu Nav */}
    </>
  );
}
