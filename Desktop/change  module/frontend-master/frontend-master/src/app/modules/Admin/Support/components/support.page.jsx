import React from "react";
import { Route } from "react-router-dom";
import { ModuleLoadingDialog } from "./loading-dialog/support-dialog.component";
import { ModuleDeleteDialog } from "./delete-dialog/support-delete-dialog.component";
import { ModuleDeleteRecordsDialog } from "./delete-records-dialog/support-delete-records-dialog.component";
import { ModuleMarkAsReadDialog } from "./confirm-read/support-confirm-read.component";
import { ModuleCard } from "./support-card.component";
import { SupportsUIProvider } from "./support-ui.context";

export function ModulePage({ history }) {
  const moduleUIEvents = {
    openEditPage: id => {
      history.push(`/admin/supports/${id}/edit`);
    },
    openDeleteRecordDialog: id => {
      history.push(`/admin/supports/${id}/delete`);
    },
    openDeleteRecordsDialog: () => {
      history.push(`/admin/supports/deleteRecords`);
    },
    openMarkAsReadDialog: id =>{
      history.push(`/admin/supports/${id}/read`)
    }
  };

  return (
    <SupportsUIProvider moduleUIEvents={moduleUIEvents}>
      <ModuleLoadingDialog />

      <Route path="/admin/supports/deleteRecords">
        {({ history, match }) => (
          <ModuleDeleteRecordsDialog
            show={match != null}
            onHide={() => {
              history.push("/admin/supports");
            }}
          />
        )}
      </Route>

      <Route path="/admin/supports/:id/delete">
        {({ history, match }) => (
          <ModuleDeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/admin/supports");
            }}
          />
        )}
      </Route>

      <Route path="/admin/supports/:id/read">
        {({ history, match }) => (
          <ModuleMarkAsReadDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/admin/supports");
            }}
          />
        )}
      </Route>

      <ModuleCard />
    </SupportsUIProvider>
  );
}
