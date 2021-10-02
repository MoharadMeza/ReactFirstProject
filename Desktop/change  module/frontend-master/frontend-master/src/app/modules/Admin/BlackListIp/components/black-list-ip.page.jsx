import React from "react";
import { Route } from "react-router-dom";
import { ModuleLoadingDialog } from "./loading-dialog/black-list-ip-dialog.component";
import { ModuleDeleteDialog } from "./delete-dialog/black-list-ip-delete-dialog.component";
import { ModuleDeleteRecordsDialog } from "./delete-records-dialog/black-list-ip-delete-records-dialog.component";
import { ModuleCard } from "./black-list-ip-card.component";
import { BlackListIpUIProvider } from "./black-list-ip-ui.context";
// import {ModuleGrouping} from "./grouping/black-list-ip-grouping.component"
export function ModulePage({ history }) {
  const moduleUIEvents = {
    newButtonClick: () => {
      history.push("/admin/black-list-ip/new");
    },
    openEditPage: id => {
      history.push(`/admin/black-list-ip/${id}/edit`);
    },
    openDeleteRecordDialog: id => {
      history.push(`/admin/black-list-ip/${id}/delete`);
    },
    openDeleteRecordsDialog: () => {
      history.push(`/admin/black-list-ip/deleteRecords`);
    },
  };

  return (
    <BlackListIpUIProvider moduleUIEvents={moduleUIEvents}>
      <ModuleLoadingDialog />

      <Route path="/admin/black-list-ip/deleteRecords">
        {({ history, match }) => (
          <ModuleDeleteRecordsDialog
            show={match != null}
            onHide={() => {
              history.push("/admin/black-list-ip");
            }}
          />
        )}
      </Route>

      <Route path="/admin/black-list-ip/:id/delete">
        {({ history, match }) => (
          <ModuleDeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/admin/black-list-ip");
            }}
          />
        )}
      </Route>
      {/* <Route path="/admin/black-list-ip/deleteRecords">
        {({ history, match }) => (
          <ModuleGrouping
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/admin/black-list-ip");
            }}
          />
        )}
      </Route> */}

      <ModuleCard />
    </BlackListIpUIProvider>
  );
}
