import React, { useMemo } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar
} from "../../../../../_metronic/_partials/controls";
/* change module */
import { ModuleFilter } from "./filter/know-your-customer-filter.component";
import { ModuleTable } from "./table/know-your-customer.table";
import { ModuleGrouping } from "./grouping/know-your-customer-grouping.component";
import { useUIContext } from "./know-your-customer-ui.context";

export function ModuleCard() {
  const UIContext = useUIContext();
  const UIProps = useMemo(() => {
    return {
      ids: UIContext.ids,
      queryParams: UIContext.queryParams,
      setQueryParams: UIContext.setQueryParams,
      newButtonClick: UIContext.newButtonClick,
      openDeleteRecordsDialog: UIContext.openDeleteRecordsDialog,
      openEditPage: UIContext.openEditPage,
    };
  }, [UIContext]);
  return (
    <Card>
   
      <CardHeader >
      <p className="display-4 py-5 mt-5">KYC submissions</p>
      <CardHeaderToolbar>
          <button
            type="button"
            className="btn btn-primary mt-5"
            onClick={UIProps.newButtonClick}
          >
            Add/Update KYC information
          </button>
        </CardHeaderToolbar>
      </CardHeader>

      <CardBody>
        <ModuleFilter />

        {UIProps.ids.length > 0 && (
          <>
            <ModuleGrouping />
          </>
        )}

        <ModuleTable />
      </CardBody>
    </Card>

  );
}
