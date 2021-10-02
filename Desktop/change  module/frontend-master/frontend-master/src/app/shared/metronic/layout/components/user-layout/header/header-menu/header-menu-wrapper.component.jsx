import React, { useMemo } from "react";
import objectPath from "object-path";
import { Link } from "react-router-dom";
import { useHtmlClassService } from "../../../../../../../../_metronic/layout";
import { CustomHeaderMenu } from "./header-menu.component";
import logo from "../../../../../../../assets/images/logo.png"

export function CustomHeaderMenuWrapper() {
    const uiService = useHtmlClassService();
    const layoutProps = useMemo(() => {
        return {
            config: uiService.config,
            ktMenuClasses: uiService.getClasses("header_menu", true),
            rootArrowEnabled: objectPath.get(
                uiService.config,
                "header.menu.self.root-arrow"
            ),
            menuDesktopToggle: objectPath.get(uiService.config, "header.menu.desktop.toggle"),
            headerMenuAttributes: uiService.getAttributes("header_menu"),
            headerSelfTheme: objectPath.get(uiService.config, "header.self.theme"),
            ulClasses: uiService.getClasses("header_menu_nav", true),
            disabledAsideSelfDisplay:
                objectPath.get(uiService.config, "aside.self.display") === false
        };
    }, [uiService]);

    return <>
        {/*begin::Header Menu Wrapper*/}
        <div className="d-lg-flex header-menu-wrapper header-menu-wrapper-right" id="kt_header_menu_wrapper">
            {/*begin::Header Logo*/}
            <div className="header-logo d-lg-flex d-sm-none align-items-center">
                <Link to="/">
                    <img className="img-fluid w-lg-50" alt="logo" src={logo} />
                </Link>
            </div>
            {/*end::Header Logo*/}
            {/*begin::Header Menu*/}
            <CustomHeaderMenu layoutProps={layoutProps} />
            {/*end::Header Menu*/}
        </div>
        {/*Header Menu Wrapper*/}
    </>
}
