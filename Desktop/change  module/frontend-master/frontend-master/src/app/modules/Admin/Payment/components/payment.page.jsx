import React from "react";
import { Route } from "react-router-dom";
import { ModuleLoadingDialog } from "./loading-dialog/payment-dialog.component";
import { ModuleDeleteDialog } from "./delete-dialog/payment-delete-dialog.component";
import { ModuleDeleteRecordsDialog } from "./delete-records-dialog/payment-delete-records-dialog.component";
import { ModuleCard } from "./payment-card.component";
import { PaymentUIProvider } from "./payment-ui.context";

export function ModulePage({ history }) {
  const moduleUIEvents = {
    newButtonClick: () => {
      history.push("/admin/payment/new");
    },
    openEditPage: id => {
      history.push(`/admin/payment/${id}/edit`);
    },
    openDeleteRecordDialog: id => {
      history.push(`/admin/payment/${id}/delete`);
    },
    openDeleteRecordsDialog: () => {
      history.push(`/admin/payment/deleteRecords`);
    },
  };

  return (
    <PaymentUIProvider moduleUIEvents={moduleUIEvents}>
      <ModuleLoadingDialog />

      <Route path="/admin/payment/deleteRecords">
        {({ history, match }) => (
          <ModuleDeleteRecordsDialog
            show={match != null}
            onHide={() => {
              history.push("/admin/payment");
            }}
          />
        )}
      </Route>

      <Route path="/admin/payment/:id/delete">
        {({ history, match }) => (
          <ModuleDeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/admin/payment");
            }}
          />
        )}
      </Route>

      <ModuleCard />
    </PaymentUIProvider>
  );
}
