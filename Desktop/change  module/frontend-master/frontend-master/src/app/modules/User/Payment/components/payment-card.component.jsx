import React from "react";
import {
  Card,
  CardBody,
} from "../../../../../_metronic/_partials/controls";
/* change module */
import { ModuleFilter } from "./filter/payment-filter.component";
import { ModuleTable } from "./table/payment.table";

export function ModuleCard() {
  return (
    <Card>
      <CardBody>
        <ModuleFilter />
        <ModuleTable />
      </CardBody>
    </Card>
  );
}
