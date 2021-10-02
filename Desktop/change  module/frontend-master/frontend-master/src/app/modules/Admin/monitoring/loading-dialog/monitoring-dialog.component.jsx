import React from "react";
import { LoadingDialog } from "../../../../../_metronic/_partials/controls";

export function ModuleLoadingDialog({loading}) {
  return <LoadingDialog isLoading={loading} text="Loading ..." />;
}
