import React from "react";
import { Route } from "react-router-dom";
import { ModuleLoadingDialog } from "./loading-dialog/users-dialog.component";
import { ModuleDeleteDialog } from "./delete-dialog/users-delete-dialog.component";
import { ModuleDeleteRecordsDialog } from "./delete-records-dialog/users-delete-records-dialog.component";
import { ModuleCard } from "./users-card.component";
import { GlobalMessageUIProvider } from "./users-ui.context";

export function ModulePage({ history }) {
  const moduleUIEvents = {
    newButtonClick: () => {
      history.push("/admin/users/new");
    },
    openEditPage: id => {
      history.push(`/admin/users/${id}/edit`);
    },
    openDeleteRecordDialog: id => {
      history.push(`/admin/users/${id}/delete`);
    },
    openDeleteRecordsDialog: () => {
      history.push(`/admin/users/deleteRecords`);
    },
  };

  return (
    <GlobalMessageUIProvider moduleUIEvents={moduleUIEvents}>
      <ModuleLoadingDialog/>

      <Route path="/admin/users/deleteRecords">
        {({ history, match }) => (
          <ModuleDeleteRecordsDialog
            show={match != null}
            onHide={() => {
              history.push("/admin/users");
            }}
          />
        )}
      </Route>

      <Route path="/admin/users/:id/delete">
        {({ history, match }) => (
          <ModuleDeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/admin/users");
            }}
          />
        )}
      </Route>

      <ModuleCard />
    </GlobalMessageUIProvider>
  );
}
