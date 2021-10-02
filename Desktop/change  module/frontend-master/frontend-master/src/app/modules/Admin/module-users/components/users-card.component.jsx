import React, { useMemo } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar
} from "../../../../../_metronic/_partials/controls";
/* change module */
import { ModuleFilter } from "./filter/users-filter.component";
import { ModuleTable } from "./table/users.table";
import { ModuleGrouping } from "./grouping/users-grouping.component";
import { useUIContext } from "./users-ui.context";

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
      <CardHeader title="Users">
        <CardHeaderToolbar>
          <button
            type="button"
            className="btn btn-primary"
            onClick={UIProps.newButtonClick}
          >
            New User
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
