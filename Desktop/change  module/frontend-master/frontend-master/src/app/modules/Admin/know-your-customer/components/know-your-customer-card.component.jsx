import React, { useMemo } from "react";
import {
  Card,
  CardBody,
  CardHeader,
} from "../../../../../_metronic/_partials/controls";
/* change module */
import { ModuleFilter } from "./filter/know-your-customer-filter.component";
import { ModuleTable } from "./table/know-your-customer.table";
import { ModuleGrouping } from "./grouping/global-message-grouping.component";
import { useUIContext } from "./know-your-customer-ui.context";

export function ModuleCard() {
  const UIContext = useUIContext();
  const UIProps = useMemo(() => {
    return {
      ids: UIContext.ids,
      queryParams: UIContext.queryParams,
      setQueryParams: UIContext.setQueryParams,
      newButtonClick: UIContext.newButtonClick,
      openChangeStatusDialog:UIContext.openChangeStatusDialog
    };
  }, [UIContext]);

  return (
    <Card>
   
      <CardHeader>
      <p className="display-4 py-5 mt-5">KYC submissions</p>
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
