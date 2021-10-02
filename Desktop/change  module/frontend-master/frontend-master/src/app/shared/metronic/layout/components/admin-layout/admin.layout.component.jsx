/// metronic layout


import React, { useMemo } from "react";
import objectPath from "object-path";
// LayoutContext
import { useHtmlClassService } from "../../../../../../_metronic/layout/_core/MetronicLayout";
// Import Layout components
import { HeaderMobile } from "./header-mobile/HeaderMobile";
import { Aside } from "./aside/Aside"; 
import { LayoutInit } from "../../../../../../_metronic/layout/components/LayoutInit";
import { QuickPanel } from "../../../../../../_metronic/layout/components/extras/offcanvas/QuickPanel";
import { QuickUser } from "../../../../../../_metronic/layout/components/extras/offcanvas/QuickUser";
import { ScrollTop } from "../../../../../../_metronic/layout/components/extras/ScrollTop";
import { HeaderAdmin } from "./header-admin/header.component";

export function AdminLayout({ children }) {
    const uiService = useHtmlClassService();
    // Layout settings (cssClasses/cssAttributes)
    const layoutProps = useMemo(() => {
        return {
            layoutConfig: uiService.config,
            selfLayout: objectPath.get(uiService.config, "self.layout"),
            asideDisplay: objectPath.get(uiService.config, "aside.self.display"),
            subheaderDisplay: objectPath.get(uiService.config, "subheader.display"),
            desktopHeaderDisplay: objectPath.get(
                uiService.config,
                "header.self.fixed.desktop"
            ),
            contentCssClasses: uiService.getClasses("content", true),
            contentContainerClasses: uiService.getClasses("content_container", true),
            contentExtended: objectPath.get(uiService.config, "content.extended")
        };
    }, [uiService]);

    return layoutProps.selfLayout !== "blank" ? (
        <>
            {/*begin::Main*/}
            <HeaderMobile />
            <div className="d-flex flex-column flex-root">
                {/*begin::Page*/}
                <div className="d-flex flex-row flex-column-fluid page">
                    {<Aside/>}
                    
                    {/*begin::Wrapper*/}
                    <div className="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
                        <HeaderAdmin />
                        {/*begin::Content*/}
                        <div
                            id="kt_content"
                            className={`content ${layoutProps.contentCssClasses} d-flex flex-column flex-column`}
                        >
                            {/*begin::Entry*/}
                            {!layoutProps.contentExtended && (
                                <div className="d-flex flex-column-fluid">
                                    {/*begin::Container*/}
                                    <div className={layoutProps.contentContainerClasses}>
                                        {children}
                                    </div>
                                    {/*end::Container*/}
                                </div>
                            )}

                            {layoutProps.contentExtended && { children }}
                            {/*end::Entry*/}
                        </div>
                        {/*end::Content*/}
                        {/* <Footer /> */}
                    </div>
                    {/* <CustomAside/> */}
                    {/*end::Wrapper*/}
                </div>
                {/*end::Page*/}
            </div>
            <QuickUser />
            <QuickPanel />
            <ScrollTop />
            {/*end::Main*/}
            <LayoutInit />
        </>
    ) : (
        // BLANK LAYOUT
        <div className="d-flex flex-column flex-root">{children}</div>
    );
}
