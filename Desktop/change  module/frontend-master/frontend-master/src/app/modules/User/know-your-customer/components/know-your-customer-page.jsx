import React from "react";
import { Route } from "react-router-dom";
import { ModuleLoadingDialog } from "./loading-dialog/know-your-customer-status-loading-dialog.component";
import { ModuleDeleteDialog } from "./delete-dialog/know-your-customer-delete-dialog.component";
import { ModuleDeleteRecordsDialog } from "./delete-records-dialog/know-your-customer-dialog.component";
import { ModuleCard } from "./know-your-customer-card.component";
import { KycUIProvider } from "./know-your-customer-ui.context";

export function ModulePage({ history }) {
  const moduleUIEvents = {
    newButtonClick: () => {
      history.push("/user/kyc/new");
    },
    openEditPage: id => {
      history.push(`/user/kyc/${id}/edit`);
    },
    openDeleteRecordDialog: id => {
      history.push(`/user/kyc/${id}/delete`);
    },
    openDeleteRecordsDialog: () => {
      history.push(`/user/kyc/deleteRecords`);
    },
  };

  return (
    <KycUIProvider moduleUIEvents={moduleUIEvents}>
      <ModuleLoadingDialog />

      <Route path="/user/kyc/deleteRecords">
        {({ history, match }) => (
          <ModuleDeleteRecordsDialog
            show={match != null}
            onHide={() => {
              history.push("/user/kyc");
            }}
          />
        )}
      </Route>

      <Route path="/user/kyc/:id/delete">
        {({ history, match }) => (
          <ModuleDeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/user/kyc");
            }}
          />
        )}
      </Route>

      <ModuleCard />
    </KycUIProvider>
  );
}
