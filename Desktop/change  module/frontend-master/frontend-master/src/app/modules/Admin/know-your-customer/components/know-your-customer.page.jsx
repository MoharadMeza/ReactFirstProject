import React from "react";
import { ModuleLoadingDialog } from "./loading-dialog/know-your-customer-dialog.component";
import { ModuleCard } from "./know-your-customer-card.component";
import { KycUIProvider } from "./know-your-customer-ui.context";

export function ModulePage({ history }) {
  const moduleUIEvents = {
    openEditPage: id => {
      history.push(`/admin/kyc/${id}/edit`);
    },
    openDeleteRecordDialog: id => {
      history.push(`/admin/kyc/${id}/delete`);
    },
    openDeleteRecordsDialog: () => {
      history.push(`/admin/kyc/deleteRecords`);
    },
    openChangeStatusDialog:id=>{
      history.push(`/admin/kyc/${id}/change-status`);
    }
  };
  return (
    <KycUIProvider moduleUIEvents={moduleUIEvents}>
      <ModuleLoadingDialog />
      <ModuleCard />
    </KycUIProvider>
  
  );
}
