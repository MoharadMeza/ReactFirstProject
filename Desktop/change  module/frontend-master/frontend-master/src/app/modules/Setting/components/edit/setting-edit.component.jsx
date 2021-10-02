/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useRef,useState } from "react";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar
} from "../../../../../_metronic/_partials/controls";
import { ModalProgressBar } from "../../../../../_metronic/_partials/controls";
/* change module */
import * as actions from "../../_redux/setting.actions";
import ModuleEditForm from "./setting-edit-form.component";

/* change module */
const initRecord = {
  profile: {
    name: "",
    countryCode: "",
    telephoneNumber: "",
    language: "",
  },
  locationSettings: {
    timeZone: "",
    country: "",
  },
  currencySettings: {
    currency: "",
    restoreToEUR: true,
  },
  billing: {
    companyName: "",
    registerNumber: "",
    taxNumber: "",
    address: "",
  },
  emailSettings: {
    promotionalEmails: true,
  },
  privacySettings: {
    trackingHistory: true,
  },

  email: "",
  deleteSmsCheck: "",
  newPassword: "",
  retypeNewPassword: "",
  billingTabCheck: "",
  countryLocalAccess: "",
  phoneNumber: ""
};

export function ModuleEdit({
  history,
  match: {
    params: { id }
  }
}) {
  // Subheader
  const dispatch = useDispatch();
  const [error,setError]=useState(false);
  const [prevData,setPrevData]=useState({});
  const[tab,setTab]=useState(1)
  // const layoutDispatch = useContext(LayoutContext.Dispatch);
  const { actionsLoading, moduleForEdit } = useSelector(
    state => ({
      actionsLoading: state.setting.actionsLoading, /* change module */
      moduleForEdit: state.setting.moduleForEdit /* change module */
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(actions.fetchRecord());
  }, [dispatch]);

  //   useEffect(() => {
  //     let _title = id ? "" : "New Schedule";
  //     if (moduleForEdit && id) {
  //       _title = "Edit Schedule";
  //     }

  //     setTitle(_title);
  //     suhbeader.setTitle(_title);
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [moduleForEdit, id]);

  const saveRecord = (values, currentTab)=> {
    setPrevData(values);
    setTab(currentTab)
    dispatch(actions.updateRecord(values)).catch(()=>setError(true))/*.then(() => backToModuleList())*/;
  };
  const changePassword = (values,currentTab )=> {
    setPrevData(moduleForEdit);
    setTab(currentTab)
    dispatch(actions.changePassword(values));
  };

  const btnRef = useRef();

  /* change module */
  const backToModuleList = () => {
    history.push(`dashboard`);
    // history.push(`/user/setting`);
  };

  return (
    <Card>
      {actionsLoading && <ModalProgressBar />}
      <CardHeader title="">
        <CardHeaderToolbar>
          <button
            type="button"
            onClick={backToModuleList}
            className="btn btn-light"
          >
            <i className="fa fa-arrow-left"></i>
            Back
          </button>
        </CardHeaderToolbar>
      </CardHeader>

      <CardBody>

        <div className="mt-0">

          {
            !actionsLoading && !error ? <ModuleEditForm
              actionsLoading={actionsLoading}
              record={moduleForEdit || initRecord}
              btnRef={btnRef}
              saveRecord={saveRecord}
              changePassword={changePassword}
              tab={tab}
            />
              : ""
          }

          {error && !actionsLoading ?
            <ModuleEditForm
              actionsLoading={actionsLoading}
              record={prevData}
              btnRef={btnRef}
              saveRecord={saveRecord}
              tab={tab}
            /> : ""}

        </div>
      </CardBody>
    </Card>
  );
}
