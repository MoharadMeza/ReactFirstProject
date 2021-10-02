import React, { useMemo } from "react";
/* change module */
import { useUIContext } from "../custom-rate-ui.context";

export function ModuleGrouping() {
  const UIContext = useUIContext();
  const UIProps = useMemo(() => {
    return {
      ids: UIContext.ids,
      setIds: UIContext.setIds,
      openDeleteRecordDialog: UIContext.openDeleteRecordDialog,
    };
  }, [UIContext]);

  return (
    <div className="form">
      <div className="row align-items-center form-group-actions margin-top-20 margin-bottom-20">
        <div className="col-xl-12">
          <div className="form-group form-group-inline">
            <div className="form-label form-label-no-wrap">
              <label className="-font-bold font-danger-">
                <span>
                  Selected records count: <b>{UIProps.ids.length}</b>
                </span>
              </label>
            </div>
            {/* <div>
              <button
                type="button"
                className="btn btn-danger font-weight-bolder font-size-sm"
                onClick={UIProps.openDeleteProductsDialog}
              >
                <i className="fa fa-trash"></i> Delete All
              </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
