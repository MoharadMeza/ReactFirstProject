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
import * as actions from "../../_redux/email.actions";
import { ModuleViewForm } from "./email-view-form.component";

/* change module */
const initRecord = {
  id: undefined,
  to: "",
  subject: "",
  body: "",
};

export function ModuleView({
  history,
  match: {
    params: { id },
  },
}) {
  // Subheader
  const suhbeader = useSubheader();
  const [error, setError] = useState(false);
  const [prevData, setPrevData] = useState({});
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  // const layoutDispatch = useContext(LayoutContext.Dispatch);
  const { actionsLoading, moduleForEdit } = useSelector(
    (state) => ({
      actionsLoading: state.email.actionsLoading /* change module */,
      moduleForEdit: state.email.moduleForEdit /* change module */,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(actions.fetchRecord(id));
  }, [id, dispatch]);

  useEffect(() => {
    let _title = id ? "" : "New Email";
    if (moduleForEdit && id) {
      _title = `view Email '${moduleForEdit.to}'`;
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
    history.push(`/admin/email`);
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
          {!id ? (
            <button
              type="submit"
              className="btn btn-primary ml-2"
              onClick={saveRecordClick}
            >
              {actionsLoading && !id && "Saving..."}{" "}
              {!actionsLoading && !id && "Save"}
            </button>
          ) : (
            ""
          )}
        </CardHeaderToolbar>
      </CardHeader>

      <CardBody>
        {id && !actionsLoading && !error ? (
          <ModuleViewForm
            actionsLoading={actionsLoading}
            record={moduleForEdit || initRecord}
            btnRef={btnRef}
            saveRecord={saveRecord}
          />
        ) : (
          ""
        )}

        {!id ? (
          <ModuleViewForm
            actionsLoading={actionsLoading}
            record={initRecord}
            btnRef={btnRef}
            saveRecord={saveRecord}
          />
        ) : (
          ""
        )}
        {id && error && !actionsLoading ? (
          <ModuleViewForm
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
