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
import * as actions from "../../_redux/users.actions";
import { ModuleEditForm } from "./users-edit-form.component";
import { ModuleCreateForm } from "../create/users-create.component"
/* change module */
const initRecord = {
  id: undefined,
  profile: {
    name: "",
    picture: "",
  },
  role: "",
  email: "",
  password: ""
};

export function ModuleEdit({
  history,
  match: {
    params: { id }
  }
}) {
  // Subheader
  const suhbeader = useSubheader();
  const [error, setError] = useState(false)
  const [prevData, setPrevData] = useState(null)

  // Tabs
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  // const layoutDispatch = useContext(LayoutContext.Dispatch);
  const { actionsLoading, moduleForEdit } = useSelector(
    state => ({
      actionsLoading: state.users.actionsLoading, /* change module */
      moduleForEdit: state.users.moduleForEdit /* change module */
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(actions.fetchRecord(id));
  }, [id, dispatch]);

  useEffect(() => {
    let _title = id ? "" : "New Users";
    if (moduleForEdit && id) {
      _title = `Edit User '${moduleForEdit.profile.name}'`;
    }

    setTitle(_title);
    suhbeader.setTitle(_title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moduleForEdit, id]);

  const saveRecord = values => {
    setPrevData(values)
    if (!id) {
      dispatch(actions.createRecord(values))
        .then(() => backToModuleList())
        .catch(() => setError(true))
        .finally(() => { if (btnRef.current) btnRef.current.disabled = false })
    } else {
      dispatch(actions.updateRecord(values))
        .then(() => backToModuleList())
        .catch(() => setError(true))
        .finally(() => { if (btnRef.current) btnRef.current.disabled = false })
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
    history.push(`/admin/users`);
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
            {id && actionsLoading && "Updating..."}
            {!id && actionsLoading && "Saving..."}
            {id && !actionsLoading && "Update"}
            {!id && !actionsLoading && "Save"}
          </button>
        </CardHeaderToolbar>
      </CardHeader>

      <CardBody>

        <div className="mt-5">
          {!actionsLoading && id && (
            <ModuleEditForm
              actionsLoading={actionsLoading}
              record={error && prevData ? prevData : moduleForEdit}
              btnRef={btnRef}
              saveRecord={saveRecord}
            />
          )}
          {!id && <ModuleCreateForm
            record={error && prevData ? prevData : initRecord}
            btnRef={btnRef}
            saveRecord={saveRecord}
          />
          }
        </div>
      </CardBody>
    </Card>
  );
}
