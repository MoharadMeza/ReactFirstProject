import React, {useMemo} from "react";
import objectPath from "object-path";
import { useHtmlClassService } from "../../../../../../../_metronic/layout";
import { CustomHeaderMenuWrapper } from "./header-menu/header-menu-wrapper.component";
import { AnimateLoading } from "../../../../../../../_metronic/_partials/controls";
import { CustomTopbar } from "./topbar.component";

export function HeaderAdmin() {
  const uiService = useHtmlClassService();

  const layoutProps = useMemo(() => {
    return {
      headerClasses: uiService.getClasses("header", true),
      headerAttributes: uiService.getAttributes("header"),
      headerContainerClasses: uiService.getClasses("header_container", true),
      menuHeaderDisplay: objectPath.get(
        uiService.config,
        "header.menu.self.display"
      )
    };
  }, [uiService]);
  return (
    <>
      {/*begin::Header*/}
      <div
        className={`header header-admin ${layoutProps.headerClasses}`}
        id="kt_header"
      >
        {/*begin::Container*/}
        <div className={` ${layoutProps.headerContainerClasses} d-flex align-items-stretch justify-content-between`}>
          <AnimateLoading />
          {/*begin::Header Menu Wrapper*/}
          {layoutProps.menuHeaderDisplay && <CustomHeaderMenuWrapper />}
          {!layoutProps.menuHeaderDisplay && <div />}
          {/*end::Header Menu Wrapper*/}

          {/*begin::Topbar*/}
          <CustomTopbar />
          {/*end::Topbar*/}
        </div>
        {/*end::Container*/}
      </div>
      {/*end::Header*/}
    </>
  );
}
