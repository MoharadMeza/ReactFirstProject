import React, { useMemo } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar
} from "../../../../../_metronic/_partials/controls";
/* change module */
import { ModuleFilter } from "./filter/black-list-ip-filter.component";
import { ModuleTable } from "./table/black-list-ip.table";
import { ModuleGrouping } from "./grouping/black-list-ip-grouping.component";
import { useUIContext } from "./black-list-ip-ui.context";

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
      <CardHeader title="Black list Ip">
        <CardHeaderToolbar>
          <button
            type="button"
            className="btn btn-primary"
            onClick={UIProps.newButtonClick}
          >
            New Black list Ip
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
