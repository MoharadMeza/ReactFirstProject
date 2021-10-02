import React from "react";
import { ModuleLoadingDialog } from "./loading-dialog/payment-dialog.component";
import { ModuleCard } from "./payment-card.component";
import {  PayemntProvider } from "./payment-ui.context";

export function ModulePage({history}) {
  // const moduleUIEvents = {
  //   openRefreshPage: id => {
  //     history.push(`/payment/${id}/refresh-charges-status`);
  //   },
  // };
  return (
    < PayemntProvider>
      <ModuleLoadingDialog />
      <ModuleCard />
    </ PayemntProvider>
  );
}
