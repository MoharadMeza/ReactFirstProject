import React, { useMemo } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar
} from "../../../../../_metronic/_partials/controls";
/* change module */
import { ModuleFilter } from "./filter/global-message-filter.component";
import { ModuleTable } from "./table/global-message.table";
import { ModuleGrouping } from "./grouping/global-message-grouping.component";
import { useUIContext } from "./client-translation-ui.context";

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
      <CardHeader title="Global Message">
        <CardHeaderToolbar>
          <button
            type="button"
            className="btn btn-primary"
            onClick={UIProps.newButtonClick}
          >
            New Client Translation
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
