/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useState } from "react";
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
import * as actions from "../../_redux/know-your-customer.actions";
import ModuleEditForm from "./know-your-customer-edit-form.component";
import initRecord from './know-your-customer.init-values'
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
  const [error,setError]=useState(false);
  const [prevData,setPrevData]=useState({});
  // const layoutDispatch = useContext(LayoutContext.Dispatch);
  const { actionsLoading, moduleForEdit } = useSelector(
    state => ({
      actionsLoading: state.kycUser.actionsLoading, /* change module */
      moduleForEdit: state.kycUser.moduleForEdit /* change module */
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(actions.fetchRecord(id));

  }, [id, dispatch]);

  useEffect(() => {
    let _title = id ? "" : "New";

    if (moduleForEdit && id) {
      _title = `Edit Kyc`;
    }
    setTitle(_title);
   
    suhbeader.setTitle(_title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moduleForEdit, id]);

  const saveRecord = values => {
    setPrevData(values);
    if (!id) {
      dispatch(actions.createRecord(values)).then(() => backToModuleList()).catch(()=>setError(true));
    } else {
      dispatch(actions.updateRecord(values)).then(() => backToModuleList()).catch(()=>setError(true));
    }
  };

  /* change module */
  const backToModuleList = () => {
    history.push(`user/kyc`);
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
            Cancel
          </button>
        </CardHeaderToolbar>
      </CardHeader>

      <CardBody>
      { 
           id &&!actionsLoading&&!error ?
           <ModuleEditForm
              actionsLoading={actionsLoading}
              record={moduleForEdit || initRecord}
              saveRecord={saveRecord}
              id={id}
            />:""}
        
        { 
           !id ?
           <ModuleEditForm
              actionsLoading={actionsLoading}
              record={initRecord}
              saveRecord={saveRecord}
              id={id}
            />:""}
             { 
          id&& error &&!actionsLoading ?
           <ModuleEditForm
              actionsLoading={actionsLoading}
              record={prevData}
              saveRecord={saveRecord}
              id={id}
            />:""}
      </CardBody>
    </Card>
  );
}
