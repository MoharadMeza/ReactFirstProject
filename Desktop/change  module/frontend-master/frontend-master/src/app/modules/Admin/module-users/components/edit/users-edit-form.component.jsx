// Form is based on Formik
// Data validation is based on Yup
// Please, be familiar with article first:
// https://hackernoon.com/react-form-validation-with-formik-and-yup-8b76bda62e10
import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Switch from "@material-ui/core/Switch/Switch"
/* change module */
import {
  usersAccountStatus,
  usersRole,
  usersStatus
} from "../users-ui.helpers";
import CustomSelect from "../../../../../shared/components/custom-select/custom-select.component";
import { UploadFile } from "../../../../../shared/components/upload-file/upload-file";
import { CardImage } from "../../../../../shared/components/upload-file/card-image";
import { uploadFile as Upload } from "../../../../../shared/components/upload-file/upload-file.api";
import SelectFlag from "../../../../../shared/components/select-with-flag/select-with-flag.component";
import { Input } from "../../../../../shared/metronic/_partials/controls/forms/Input"
import { ModuleEditSchema } from "./users-edit-form.schema";
import { timeZones } from "../../../../../helpers/time-zones";
import { countriesCurrency, countriesCode, countriesFlag } from "../../../../../helpers/countries";


export function ModuleEditForm({ record, btnRef, saveRecord }) {
  const [uploadFile, setUploadFile] = useState();
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (record) {
      setUploadFile(record.profile.picture)
    }
  }, [record])

  const onFileUpload = async (event, setFieldValue) => {
    setLoading(true)
    const data = new FormData();
    data.append("file", event.target.files[0]);
    data.append("module", "users");
    btnRef.current.disabled = true
    const responseUplode = await Upload(data);
    btnRef.current.disabled = false
    if (responseUplode?.data?.success) {
      setUploadFile(responseUplode.data.data.fileAddress)
      setFieldValue("profile.picture", responseUplode.data.data.fileAddress)
      setLoading(false)
    }
  };

  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={record}
        validationSchema={ModuleEditSchema}
        onSubmit={values => {
          btnRef.current.disabled = true
          saveRecord(values)
        }}
      >
        {({ handleSubmit, setFieldValue, values }) => (
          <>
            <Form className="container form form-label-right">
              <h3> Profile Info</h3>
              <div className="form-group my-5 row">
                <div className="col-lg-6">
                  <Field
                    name="profile.name"
                    component={Input}
                    placeholder="Name"
                    label="Name"
                  />
                  <ErrorMessage
                    component="div"
                    name="profile.name"
                    className="text-danger"
                  />
                  <div className="my-3">


                    <label htmlFor="">Telephone Number </label>
                    <div className="d-flex">
                      <SelectFlag
                        customStyles={{ lineHeight: "20px", width: "150px" }}
                        options={countriesCode}
                        value={record ? record.profile.countryCode : ""}
                        name="profile.countryCode"
                        placeholder="country code"
                        onChange={(value) => setFieldValue("profile.countryCode", value.value)}
                      />
                      <Field
                        disabled={values && !values.profile.countryCode}
                        type="text"
                        name="profile.telephoneNumber"
                        component={Input}
                        placeholder="TelephoneNumber"
                      />
                    </div>
                    <ErrorMessage
                      component="div"
                      name="profile.telephoneNumber"
                      className="text-danger"
                    />
                  </div>
                  <Field
                    name="profile.language"
                    component={Input}
                    placeholder="Language"
                    label="Language"
                  />
                  <ErrorMessage
                    component="div"
                    name="profile.language"
                    className="text-danger"
                  />
                </div>
                <div className="col-lg-6">
                  <div className="row d-block justify-content-center">
                    <div className="justify-content-center d-flex">
                      <CardImage image={uploadFile} removeFile={() => {
                        setFieldValue("profile.picture", null)
                        setUploadFile(null)
                      }} />
                    </div>

                    <div className="text-center mt-5">
                      <Field
                        loading={loading}
                        component={UploadFile}
                        onChange={(event) => {
                          if (event.target.files.length)
                            onFileUpload(event, setFieldValue)
                        }}
                      />
                    </div>
                  </div>

                </div>
              </div>

              <h3>Location Settings</h3>
              <div className="form-group my-5 row">
                <div className="col-lg-4 mb-md-0 mb-5">
                  <label htmlFor="">Time Zone</label>
                  <CustomSelect
                    name="locationSettings.timeZone"
                    options={timeZones}
                    value={record ? record.locationSettings.timeZone : ""}
                    customStyles={{ lineHeight: "20px" }}
                    onChange={(value) => setFieldValue("locationSettings.timeZone", value.value)}
                  />
                </div>
                <div className="col-lg-4 mb-md-0 mb-5">
                  <label htmlFor="">Country</label>
                  <SelectFlag
                    name="locationSettings.country"
                    options={countriesFlag}
                    value={record ? record.locationSettings.country : ""}
                    customStyles={{ lineHeight: "20px" }}
                    onChange={(value) => setFieldValue("locationSettings.country", value.value)}
                  />
                  <ErrorMessage
                    component="div"
                    name="locationSettings.country"
                    className="text-danger"
                  />
                </div>
              </div>

              <h3>Currency Settings</h3>
              <div className="form-group my-5 row align-items-center">
                <div className="col-lg-4 mb-md-0 mb-5">
                  <label htmlFor="currencySettings.restoreToEUR">Restore To EUR</label>
                  <Switch
                    onChange={(event) => setFieldValue("currencySettings.restoreToEUR", event.target.checked)}
                    name="currencySettings.restoreToEUR"
                    defaultChecked={record ? record.currencySettings.restoreToEUR : false}
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                  />

                </div>
                <div className="col-lg-4 mb-md-0 mb-5">
                  <label htmlFor="">Currency</label>
                  <SelectFlag
                    name="currencySettings.currency"
                    options={countriesCurrency}
                    value={record ? record.currencySettings.currency : ""}
                    customStyles={{ lineHeight: "20px" }}
                    onChange={(value) => setFieldValue("currencySettings.currency", value.value)}
                  />
                </div>
              </div>

              <h3>Billing</h3>
              <div className="form-group my-5 row">
                <div className="col-lg-4 mb-md-0 mb-5">
                  <Field
                    name="billing.companyName"
                    component={Input}
                    placeholder="companyName"
                    label="Company Name"
                  />
                  <ErrorMessage
                    component="div"
                    name="billing.companyName"
                    className="text-danger"
                  />
                </div>
                <div className="col-lg-4 mb-md-0 mb-5">
                  <Field
                    type="number"
                    name="billing.registerNumber"
                    component={Input}
                    placeholder="registerNumber"
                    label="Register Number"
                  />
                </div>
                <div className="col-lg-4 mb-md-0 mb-5">
                  <Field
                    type="number"
                    name="billing.taxNumber"
                    component={Input}
                    placeholder="taxNumber"
                    label="Tax Number"
                  />
                </div>
                <div className="col-lg-12 mt-3">
                  <label htmlFor="">Address</label>
                  <Field
                    name="billing.address"
                    as="textarea"
                    rows="3"
                    className="form-control"
                  />
                  <ErrorMessage
                    component="div"
                    name="billing.address"
                    className="text-danger"
                  />
                </div>
              </div>

              <h3>Email Settings</h3>
              <div className="form-group my-5 row">
                <div className="col-lg-4 mb-md-0 mb-5">
                  <label htmlFor="">Promotional Emails</label>
                  <Switch
                    onChange={(event) => setFieldValue("emailSettings.promotionalEmails", event.target.checked)}
                    defaultChecked={record ? record.emailSettings.promotionalEmails : false}
                    name="emailSettings.promotionalEmails"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                  />
                </div>
              </div>

              <h3>Privacy Settings</h3>
              <div className="form-group my-5 row">
                <div className="col-lg-4 mb-md-0 mb-5">
                  <label htmlFor="">Tracking History</label>
                  <Switch
                    onChange={(event) => setFieldValue("privacySettings.trackingHistory", event.target.checked)}
                    defaultChecked={record ? record.privacySettings.trackingHistory : null}
                    name="privacySettings.trackingHistory"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                  />
                </div>
              </div>

              <h3>Common Info</h3>
              <div className="form-group my-5 row">
                <div className="col-md-2 col-sm-3 col-12 mb-md-0 mb-5">
                  <label htmlFor="">Choose Role</label>
                  <CustomSelect
                    name="role"
                    customStyles={{ lineHeight: '20px' }}
                    value={record ? record.role : ""}
                    options={usersRole}
                    onChange={(value) => setFieldValue("role", value.value)}
                  />
                </div>
                <div className="col-md-2 col-sm-4 col-12 mb-md-0 mb-5" >
                  <label htmlFor="">Choose Status</label>
                  <CustomSelect
                    name="status"
                    customStyles={{ lineHeight: '20px' }}
                    value={record ? record.status : ""}
                    options={usersStatus}
                    onChange={(value) => setFieldValue("status", value.value)}
                  />
                </div>
                <div className="col-lg-4 col-sm-4 col-12 mb-md-0 mb-5">
                  <label htmlFor="">Choose Account Status</label>
                  <CustomSelect
                    name="accountStatus"
                    customStyles={{ lineHeight: '20px' }}
                    value={record ? record.accountStatus : ""}
                    options={usersAccountStatus}
                    onChange={(value) => setFieldValue("accountStatus", value.value)}
                  />
                </div>
                <div className="col-lg-4 mt-md-0 mt-2">
                  <Field
                    name="email"
                    component={Input}
                    placeholder="Email"
                    label="Email"
                  />
                </div>
              </div>

              <button
                type="submit"
                style={{ display: "none" }}
                ref={btnRef}
                onSubmit={() => handleSubmit()}
              ></button>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
}
