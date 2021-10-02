import React, { useMemo } from "react";
import {
  Card,
  CardBody,
  CardHeader,
} from "../../../../../_metronic/_partials/controls";
/* change module */
import { ModuleFilter } from "./filter/support-filter.component";
import { ModuleTable } from "./table/support.table";
import { ModuleGrouping } from "./grouping/support-grouping.component";
import { useUIContext } from "./support-ui.context";

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
      <CardHeader title="Support">

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
