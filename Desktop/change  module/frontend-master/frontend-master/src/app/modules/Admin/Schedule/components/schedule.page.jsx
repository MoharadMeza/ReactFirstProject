import React from "react";
import { Route } from "react-router-dom";
import { ModuleLoadingDialog } from "./loading-dialog/schedule-dialog.component";
import { ModuleDeleteDialog } from "./delete-dialog/schedule-delete-dialog.component";
import { ModuleDeleteRecordsDialog } from "./delete-records-dialog/schedule-delete-records-dialog.component";
import { ModuleCard } from "./schedule-card.component";
import { ScheduleUIProvider } from "./schedule-ui.context";

export function ModulePage({ history }) {
  const moduleUIEvents = {
    newButtonClick: () => {
      history.push("/admin/schedule/new");
    },
    openEditPage: id => {
      history.push(`/admin/schedule/${id}/edit`);
    },
    openDeleteRecordDialog: id => {
      history.push(`/admin/schedule/${id}/delete`);
    },
    openDeleteRecordsDialog: () => {
      history.push(`/admin/schedule/deleteRecords`);
    },
  };

  return (
    <ScheduleUIProvider moduleUIEvents={moduleUIEvents}>
      <ModuleLoadingDialog />

      <Route path="/admin/schedule/deleteRecords">
        {({ history, match }) => (
          <ModuleDeleteRecordsDialog
            show={match != null}
            onHide={() => {
              history.push("/admin/schedule");
            }}
          />
        )}
      </Route>

      <Route path="/admin/schedule/:id/delete">
        {({ history, match }) => (
          <ModuleDeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/admin/schedule");
            }}
          />
        )}
      </Route>

      <ModuleCard />
    </ScheduleUIProvider>
  );
}
