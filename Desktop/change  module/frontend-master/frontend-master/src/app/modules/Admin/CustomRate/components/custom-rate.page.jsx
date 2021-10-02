import React from "react";
import { Route } from "react-router-dom";
import { ModuleLoadingDialog } from "./loading-dialog/custom-rate-dialog.component";
import { ModuleDeleteDialog } from "./delete-dialog/custom-rate-delete-dialog.component";
import { ModuleDeleteRecordsDialog } from "./delete-records-dialog/custom-rate-delete-records-dialog.component";
import { ModuleCard } from "./custom-rate-card.component";
import { CustomRateUIProvider } from "./custom-rate-ui.context";

export function ModulePage({ history }) {
  const moduleUIEvents = {
    newButtonClick: () => {
      history.push("/admin/custom-rate/new");
    },
    openEditPage: id => {
      history.push(`/admin/custom-rate/${id}/edit`);
    },
    openDeleteRecordDialog: id => {
      history.push(`/admin/custom-rate/${id}/delete`);
    },
    openDeleteRecordsDialog: () => {
      history.push(`/admin/custom-rate/deleteRecords`);
    },
  };

  return (
    <CustomRateUIProvider moduleUIEvents={moduleUIEvents}>
      <ModuleLoadingDialog />

      <Route path="/admin/custom-rate/deleteRecords">
        {({ history, match }) => (
          <ModuleDeleteRecordsDialog
            show={match != null}
            onHide={() => {
              history.push("/admin/custom-rate");
            }}
          />
        )}
      </Route>

      <Route path="/admin/custom-rate/:id/delete">
        {({ history, match }) => (
          <ModuleDeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/admin/custom-rate");
            }}
          />
        )}
      </Route>

      <ModuleCard />
    </CustomRateUIProvider>
  );
}
