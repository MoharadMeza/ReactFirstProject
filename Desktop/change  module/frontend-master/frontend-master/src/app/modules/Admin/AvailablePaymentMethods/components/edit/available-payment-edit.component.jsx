/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../../../../_metronic/_partials/controls";
import { useSubheader } from "../../../../../../_metronic/layout";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
/* change module */
import * as actions from "../../_redux/available-payment.actions";
import { ModuleEditForm } from "./available-payment-edit-form.component";

/* change module */
const initRecord = {
  status: "",
  id: undefined,
  currencySupport: "",
  amount: "",
  handlingFee: "",
  enabled: "",
  profit: "",
  name: "",
  paymentType: "",
  icon: "",
  description: "",
};

export function ModuleEdit({
  history,
  match: {
    params: { id },
  },
}) {
  // Subheader
  const suhbeader = useSubheader();

  // Tabs
  const [title, setTitle] = useState("");
  const [error, setError] = useState(false);
  const [prevData, setPrevData] = useState({});
  const dispatch = useDispatch();
  // const layoutDispatch = useContext(LayoutContext.Dispatch);
  const { actionsLoading, moduleForEdit } = useSelector(
    (state) => ({
      actionsLoading:
        state.AvailablePaymentMethods.actionsLoading /* change module */,
      moduleForEdit:
        state.AvailablePaymentMethods.moduleForEdit /* change module */,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(actions.fetchRecord(id));
  }, [id, dispatch]);

  useEffect(() => {
    let _title = id ? "" : "New Payment Method";
    if (moduleForEdit && id) {
      _title = `Edit Payment Method '${moduleForEdit.name}'`;
    }

    setTitle(_title);
    suhbeader.setTitle(_title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moduleForEdit, id]);

  const saveRecord = (values) => {
    setPrevData(values);
    if (!id) {
      dispatch(actions.createRecord(values))
        .then(() => backToModuleList())
        .finally(() => {
          if (btnRef.current) {
            btnRef.current.disabled = false;
          }
        });
    } else {
      dispatch(actions.updateRecord(values))
        .then(() => backToModuleList())
        .catch(() => setError(true))
        .finally(() => {
          if (btnRef.current) {
            btnRef.current.disabled = false;
          }
        });
    }
  };
  const btnRef = useRef();
  const saveRecordClick = () => {
    if (btnRef && btnRef.current) {
      btnRef.current.click();
    }
  };

  /* change module */
  const backToModuleList = () => {
    history.push(`/admin/available-payment-methods`);
  };
  return (
    <Card>
      {actionsLoading && <ModalProgressBar />}
      <CardHeader title={title}>
        <CardHeaderToolbar>
          <button
            type="button"
            onClick={backToModuleList}
            className="btn btn-light"
          >
            <i className="fa fa-arrow-left"></i>
            Back
          </button>

          <button
            type="submit"
            className="btn btn-primary ml-2"
            onClick={saveRecordClick}
          >
            {actionsLoading && !id && "Saving..."}{" "}
            {!actionsLoading && id && "Update"}
            {actionsLoading && id && "Updating..."}{" "}
            {!actionsLoading && !id && "Save"}
          </button>
        </CardHeaderToolbar>
      </CardHeader>

      <CardBody>
        {id && !actionsLoading && !error ? (
          <ModuleEditForm
            actionsLoading={actionsLoading}
            record={moduleForEdit || initRecord}
            btnRef={btnRef}
            saveRecord={saveRecord}
          />
        ) : (
          ""
        )}

        {!id ? (
          <ModuleEditForm
            actionsLoading={actionsLoading}
            record={initRecord}
            btnRef={btnRef}
            saveRecord={saveRecord}
          />
        ) : (
          ""
        )}
        {id && error && !actionsLoading ? (
          <ModuleEditForm
            actionsLoading={actionsLoading}
            record={prevData}
            btnRef={btnRef}
            saveRecord={saveRecord}
          />
        ) : (
          ""
        )}
      </CardBody>
    </Card>
  );
}
