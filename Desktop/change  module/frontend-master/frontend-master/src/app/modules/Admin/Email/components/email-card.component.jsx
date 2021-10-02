import React, { useMemo } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../../../_metronic/_partials/controls";
/* change module */
import { ModuleFilter } from "./filter/email-filter.component";
import { ModuleTable } from "./table/email.table";
import { useUIContext } from "./email-ui.context";

export function ModuleCard() {
  const UIContext = useUIContext();
  const UIProps = useMemo(() => {
    return {
      ids: UIContext.ids,
      queryParams: UIContext.queryParams,
      setQueryParams: UIContext.setQueryParams,
      newButtonClick: UIContext.newButtonClick,
      openViewPage: UIContext.openViewPage,
    };
  }, [UIContext]);

  return (
    <Card>
      <CardHeader title="Email Message">
        <CardHeaderToolbar>
          <button
            type="button"
            className="btn btn-primary"
            onClick={UIProps.newButtonClick}
          >
            New Email
          </button>
        </CardHeaderToolbar>
      </CardHeader>

      <CardBody>
        <ModuleFilter />
        <ModuleTable />
      </CardBody>
    </Card>
  );
}
