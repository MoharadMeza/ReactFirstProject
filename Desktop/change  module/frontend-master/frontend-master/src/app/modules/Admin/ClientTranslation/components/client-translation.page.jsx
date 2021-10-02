import React from "react";
import { Route } from "react-router-dom";
import { ModuleLoadingDialog } from "./loading-dialog/global-message-dialog.component";
import { ModuleDeleteDialog } from "./delete-dialog/global-message-delete-dialog.component";
import { ModuleDeleteRecordsDialog } from "./delete-records-dialog/global-message-delete-records-dialog.component";
import { ModuleCard } from "./global-message-card.component";
import { GlobalMessageUIProvider } from "./global-message-ui.context";

export function ModulePage({ history }) {
  const moduleUIEvents = {
    newButtonClick: () => {
      history.push("/admin/client-translation/new");
    },
    openEditPage: id => {
      history.push(`/admin/client-translation/${id}/edit`);
    },
    openDeleteRecordDialog: id => {
      history.push(`/admin/client-translation/${id}/delete`);
    },
    openDeleteRecordsDialog: () => {
      history.push(`/admin/client-translation/deleteRecords`);
    },
  };

  return (
    <GlobalMessageUIProvider moduleUIEvents={moduleUIEvents}>
      <ModuleLoadingDialog />

      <Route path="/admin/client-translation/deleteRecords">
        {({ history, match }) => (
          <ModuleDeleteRecordsDialog
            show={match != null}
            onHide={() => {
              history.push("/admin/client-translation");
            }}
          />
        )}
      </Route>

      <Route path="/admin/client-translation/:id/delete">
        {({ history, match }) => (
          <ModuleDeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/admin/client-translation");
            }}
          />
        )}
      </Route>

      <ModuleCard />
    </GlobalMessageUIProvider>
  );
}
