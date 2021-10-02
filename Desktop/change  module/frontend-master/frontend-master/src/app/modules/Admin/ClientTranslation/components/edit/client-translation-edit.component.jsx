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
import * as actions from "../../_redux/client-translation.actions";
import { ModuleEditForm } from "./client-translation-edit-form.component";

/* change module */
const initRecord = {
  id: undefined,
  title: "",
  text: "",
  type: "success",
  expirationDate: "",
  status: "active",
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
  const [tab, setTab] = useState("basic");
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  // const layoutDispatch = useContext(LayoutContext.Dispatch);
  const { actionsLoading, moduleForEdit } = useSelector(
    (state) => ({
      actionsLoading: state.globalMessages.actionsLoading /* change module */,
      moduleForEdit: state.globalMessages.moduleForEdit /* change module */,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(actions.fetchRecord(id));
  }, [id, dispatch]);

  useEffect(() => {
    let _title = id ? "" : "New Global Message";
    if (moduleForEdit && id) {
      _title = `Edit Global Message '${moduleForEdit.title}'`;
    }

    setTitle(_title);
    suhbeader.setTitle(_title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moduleForEdit, id]);

  const saveRecord = (values) => {
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
    history.push(`/admin/global-messages`);
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
        <ul className="nav nav-tabs nav-tabs-line " role="tablist">
          <li className="nav-item" onClick={() => setTab("basic")}>
            <a
              className={`nav-link ${tab === "basic" && "active"}`}
              data-toggle="tab"
              role="tab"
              aria-selected={(tab === "basic").toString()}
            >
              Basic info
            </a>
          </li>
        </ul>

        <div className="mt-5">
          {tab === "basic" && (
            <ModuleEditForm
              actionsLoading={actionsLoading}
              record={moduleForEdit || initRecord}
              btnRef={btnRef}
              saveRecord={saveRecord}
            />
          )}
        </div>
      </CardBody>
    </Card>
  );
}
