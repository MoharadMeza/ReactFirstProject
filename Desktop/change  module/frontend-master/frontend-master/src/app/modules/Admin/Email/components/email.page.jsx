import React from "react";
import { ModuleLoadingDialog } from "./loading-dialog/email-dialog.component";
import { ModuleCard } from "./email-card.component";
import { EmailUIProvider } from "./email-ui.context";

export function ModulePage({ history }) {
  const moduleUIEvents = {
    newButtonClick: () => {
      history.push("/admin/email/new");
    },
    openViewPage: id => {
      history.push(`/admin/email/${id}/view`);
    },
  };

  return (
    <EmailUIProvider moduleUIEvents={moduleUIEvents}>
      <ModuleLoadingDialog />
      <ModuleCard />
    </EmailUIProvider>
  );
}
