
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, { useMemo, useEffect } from "react";
import SVG from "react-inlinesvg";
import objectPath from "object-path";
import { toAbsoluteUrl } from "../../../../../../_metronic/_helpers";
import { useHtmlClassService } from "../../../../../../_metronic/layout";
export function MixedWidget({ className }) {
  const uiService = useHtmlClassService();

  const layoutProps = useMemo(() => {
    return {
      colorsGrayGray500: objectPath.get(
        uiService.config,
        "js.colors.gray.gray500"
      ),
      colorsGrayGray200: objectPath.get(
        uiService.config,
        "js.colors.gray.gray200"
      ),
      colorsGrayGray300: objectPath.get(
        uiService.config,
        "js.colors.gray.gray300"
      ),
      colorsThemeBaseDanger: objectPath.get(
        uiService.config,
        "js.colors.theme.base.primary"
      ),
      fontFamily: objectPath.get(uiService.config, "js.fontFamily")
    };
  }, [uiService]);

  useEffect(() => {
    const element = document.getElementById("kt_mixed_widget_1_chart");
    if (!element) {
      return;
    }
  }, [layoutProps]);

  return (
    <div className="card card-custom bg-light-100 mb-5">
      {/* Header */}
      {/* Body */}
      <div className="card-body p-0 position-relative overflow-hidden">
        {/* Chart */}
        <div
          id="kt_mixed_widget_1_chart"
          className="card-rounded"
          style={{ height: "200px", backgroundColor: "#0071A9" }}
        ></div>

        {/* Stat */}
        <div className="card-spacer mt-n25">
          <div className="row m-0 text-center">
            <div className="col bg-light px-4 py-8 rounded-xl mr-7 mb-7">
              <a
                href="#"
                className="text-dark font-weight-bold font-size-h6"
              >
                <span className="svg-icon svg-icon-3x svg-icon-primary d-block my-2">
                  <SVG
                    src={toAbsoluteUrl("/media/svg/icons/Communication/Mail.svg")}
                  ></SVG>
                </span>
                Send SMS
              </a>
            </div>
            <div className="col bg-light px-6 py-8 rounded-xl mb-7">
              <a
                href="#"
                className="text-dark font-weight-bold font-size-h6 mt-2"
              >
                <span className="svg-icon svg-icon-3x svg-icon-warning d-block my-2">
                  <SVG
                    src={toAbsoluteUrl("/media/svg/icons/Devices/Phone.svg")}
                  ></SVG>
                </span>
                Top up Mobile
              </a>
            </div>
          </div>
          <div className="row m-0 text-center">
            <div className="col bg-light px-6 py-8 rounded-xl mr-7">
              <a
                href="#"
                className="text-dark font-weight-bold font-size-h6 mt-2"
              >
                <span className="svg-icon svg-icon-3x svg-icon-danger d-block my-2">
                  <SVG
                    src={toAbsoluteUrl("/media/svg/icons/Code/Compiling.svg")}
                  ></SVG>
                </span>
                Bulk SMS
              </a>
            </div>
            <div className="col bg-light px-6 py-8 rounded-xl">
              <a
                href="#"
                className="text-dark font-weight-bold font-size-h6 mt-2"
              >
                <span className="svg-icon svg-icon-3x svg-icon-success d-block my-2">
                  <SVG
                    src={toAbsoluteUrl("/media/svg/icons/Communication/Urgent-mail.svg")}
                  ></SVG>
                </span>
                Send Fax
              </a>
            </div>
          </div>
        </div>

        {/* Resize */}
      </div>
    </div>
  );
}
