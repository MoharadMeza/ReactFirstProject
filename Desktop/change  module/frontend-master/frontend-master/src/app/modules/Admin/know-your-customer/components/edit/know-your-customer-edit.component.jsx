/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../../../../_metronic/_partials/controls";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
/* change module */
import * as actions from "../../_redux/know-your-customer.actions";
import { ModuleEditForm } from "./know-your-customer-edit-form.component";

/* change module */
const initRecord = {
  id: undefined,
  firstName: "",
  lastName: "",
  middleName: "",
  gender: "",
  nationality: "",

  address: "",
  city: "",
  postalCode: "",
  state: "",
  email: "",
  country: "",
  addressProofType: "",
  addressProofFile: "",
  businessCountryCode: "",
  phoneCountryCode: "",
  homeTelephone: "",
  businessTelephone: "",

  occupationType: "",
  occupationDetails: "",
  organizationName: "",
  organizationPosition: "",
  organizationAddress: "",
  organizationCity: "",
  organizationPostalCode: "",
  organizationState: "",
  organizationWebsite: "",
  organizationCountry: "",

  idType: "",
  idNumber: "",
  birthDate: "",
  idFile: "",
  status: "",
  denyReason: "",
  expirationDate: ""
};

export function ModuleEdit({
  history,
  match: {
    params: { id },
  },
}) {

  // Tabs
  const [tab, setTab] = useState("general");
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [prevData, setPrevData] = useState({});
  // const layoutDispatch = useContext(LayoutContext.Dispatch);
  const { actionsLoading, moduleForEdit } = useSelector(
    (state) => ({
      actionsLoading: state.kycAdmin.actionsLoading /* change module */,
      moduleForEdit: state.kycAdmin.moduleForEdit /* change module */,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(actions.fetchRecord(id));
  }, [id, dispatch]);


  const saveRecord = (values) => {
    setPrevData(values);
    if (values.status === "confirm") {
      let confirmObject = {
        status: "confirm",
        expirationDate: values.expirationDate
      }
      dispatch(actions.confirmRecord(values.id, confirmObject)).then(() => backToModuleList()).catch(() => setError(true))
        .finally(() => {
          if (btnRef.current) btnRef.current.disabled = false;
        });
    } else if (values.status === "reject") {
      let rejectObject = {
        status: "reject",
        denyReason: values.denyReason
      }
      dispatch(actions.rejectRecord(values.id, rejectObject)).then(() => backToModuleList()).catch(() => setError(true))
        .finally(() => {
          if (btnRef.current) btnRef.current.disabled = false;
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
    history.push(`/admin/kyc`);
  };

  return (
    <Card>
      {actionsLoading && <ModalProgressBar />}
      <CardHeader title="KYC submission">
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
          <li className="nav-item" onClick={() => setTab("general")}>
            <a
              className={`nav-link ${tab === "general" && "active"}`}
              data-toggle="tab"
              role="tab"
              aria-selected={(tab === "general").toString()}
            >
              General information
            </a>
          </li>
          <li className="nav-item" onClick={() => setTab("permanent")}>
            <a
              className={`nav-link ${tab === "permanent" && "active"}`}
              data-toggle="tab"
              role="tab"
              aria-selected={(tab === "permanent").toString()}
            >
              Permanent address of residence
            </a>
          </li>
          <li className="nav-item" onClick={() => setTab("activity")}>
            <a
              className={`nav-link ${tab === "activity" && "active"}`}
              data-toggle="tab"
              role="tab"
              aria-selected={(tab === "activity").toString()}
            >
              Activity & purpose
            </a>
          </li>
          <li className="nav-item" onClick={() => setTab("identification")}>
            <a
              className={`nav-link ${tab === "identification" && "active"}`}
              data-toggle="tab"
              role="tab"
              aria-selected={(tab === "identification").toString()}
            >
              Identification
            </a>
          </li>
          <li className="nav-item" onClick={() => setTab("changeStatus")}>
            <a
              className={`nav-link ${tab === "changeStatus" && "active"}`}
              data-toggle="tab"
              role="tab"
              aria-selected={(tab === "changeStatus").toString()}
            >
              Change status
            </a>
          </li>

        </ul>

        <div className="mt-5">
          {
            !actionsLoading && !error ?
              <ModuleEditForm
                actionsLoading={actionsLoading}
                record={moduleForEdit || initRecord}
                btnRef={btnRef}
                saveRecord={saveRecord}
                tab={tab}
              /> : ""}

          {
            error && !actionsLoading ?
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
