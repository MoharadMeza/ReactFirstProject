import React from "react";
import { Route } from "react-router-dom";
import { ModuleLoadingDialog } from "./loading-dialog/available-payment-dialog.component";
import { ModuleDeleteDialog } from "./delete-dialog/available-payment-delete-dialog.component";
import { ModuleDeleteRecordsDialog } from "./delete-records-dialog/available-payment-delete-records-dialog.component";
import { ModuleCard } from "./available-payment-card.component";
import { AvailablePaymentMethodsUIProvider } from "./available-payment-ui.context";

export function ModulePage({ history }) {
  const moduleUIEvents = {
    newButtonClick: () => {
      history.push("/admin/available-payment-methods/new");
    },
    openEditPage: id => {
      history.push(`/admin/available-payment-methods/${id}/edit`);
    },
    openDeleteRecordDialog: id => {
      history.push(`/admin/available-payment-methods/${id}/delete`);
    },
    openDeleteRecordsDialog: () => {
      history.push(`/admin/available-payment-methods/deleteRecords`);
    },
  };

  return (
    <AvailablePaymentMethodsUIProvider moduleUIEvents={moduleUIEvents}>
      <ModuleLoadingDialog />
      <Route path="/admin/available-payment-methods/deleteRecords">
        {({ history, match }) => (
          <ModuleDeleteRecordsDialog
            show={match != null}
            onHide={() => {
              history.push("/admin/available-payment-methods");
            }}
          />
        )}
      </Route>

      <Route path="/admin/available-payment-methods/:id/delete">
        {({ history, match }) => (
          <ModuleDeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/admin/available-payment-methods");
            }}
          />
        )}
      </Route>

      <ModuleCard />
    </AvailablePaymentMethodsUIProvider>
  );
}
