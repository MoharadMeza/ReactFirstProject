/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar
} from "../../../../../../_metronic/_partials/controls";
import { useSubheader } from "../../../../../../_metronic/layout";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
/* change module */
import * as actions from "../../_redux/support.actions";
import { ModuleEditForm } from "./support-edit-form.component";

/* change module */
const initRecord = {
  id: undefined,
  email: "",
  text: "",
  typeOfSupport: "success",
  message: "",
  contactHour: "",
  contactCountry: "",
  contactPhone: "",
  files: [],
  status: "active",
};

export function ModuleEdit({
  history,
  match: {
    params: { id }
  }
}) {
  // Subheader
  const suhbeader = useSubheader();

  // Tabs
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  // const layoutDispatch = useContext(LayoutContext.Dispatch);
  const { actionsLoading, moduleForEdit } = useSelector(
    state => ({
      actionsLoading: state.adminSupports.actionsLoading, /* change module */
      moduleForEdit: state.adminSupports.moduleForEdit /* change module */
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(actions.fetchRecord(id));
  }, [id, dispatch]);

  useEffect(() => {
    let _title = id ? "" : "New Support";
    if (moduleForEdit && id) {
      _title = `Edit Support`;
    }

    setTitle(_title);
    suhbeader.setTitle(_title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moduleForEdit, id]);

  const saveRecord = values => {
    if (!id) {
      dispatch(actions.createRecord(values)).then(() => backToModuleList());
    } else {
      dispatch(actions.updateRecord(values)).then(() => backToModuleList());
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
    history.push(`/admin/supports`);
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
            Save
          </button>
        </CardHeaderToolbar>
      </CardHeader>

      <CardBody>

        <div className="mt-5">
          {
            !actionsLoading ?
              <ModuleEditForm
                actionsLoading={actionsLoading}
                record={moduleForEdit || initRecord}
                btnRef={btnRef}
                saveRecord={saveRecord}
              />
              : <span>loading....</span>
          }
        </div>
      </CardBody>
    </Card>
  );
}
