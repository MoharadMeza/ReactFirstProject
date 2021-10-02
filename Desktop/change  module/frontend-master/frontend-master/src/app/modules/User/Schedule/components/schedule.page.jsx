import React from "react";
import { Route } from "react-router-dom";
import { ModuleLoadingDialog } from "./loading-dialog/schedule-dialog.component";
import { ModuleDeleteDialog } from "./delete-dialog/schedule-delete-dialog.component";
import { ModuleDeleteRecordsDialog } from "./delete-records-dialog/schedule-delete-records-dialog.component";
import { ModuleCard } from "./schedule-card.component";
import { GlobalMessageUIProvider } from "./schedule-ui.context";

export function ModulePage({ history }) {
  const moduleUIEvents = {
    newButtonClick: () => {
      history.push("/user/schedule/new");
    },
    openEditPage: id => {
      history.push(`/user/schedule/${id}/edit`);
    },
    openDeleteRecordDialog: id => {
      history.push(`/user/schedule/${id}/delete`);
    },
    openDeleteRecordsDialog: () => {
      history.push(`/user/schedule/deleteRecords`);
    },
  };

  return (
    <GlobalMessageUIProvider moduleUIEvents={moduleUIEvents}>
      <ModuleLoadingDialog />

      <Route path="/user/schedule/deleteRecords">
        {({ history, match }) => (
          <ModuleDeleteRecordsDialog
            show={match != null}
            onHide={() => {
              history.push("/user/schedule");
            }}
          />
        )}
      </Route>

      <Route path="/user/schedule/:id/delete">
        {({ history, match }) => (
          <ModuleDeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/user/schedule");
            }}
          />
        )}
      </Route>

      <ModuleCard />
    </GlobalMessageUIProvider>
  );
}
