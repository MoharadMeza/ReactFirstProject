// Form is based on Formik
// Data validation is based on Yup
// Please, be familiar with article first:
// https://hackernoon.com/react-form-validation-with-formik-and-yup-8b76bda62e10
import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Input } from "../../../../../../_metronic/_partials/controls";
/* change module */
import CustomSelect from "../../../../../shared/components/custom-select/custom-select.component";
import { allCurrency } from "../../../../../helpers/currency";
import {
  paymentTypeOptions,
  enabledOptions,
  statusOptions,
} from "./available-payment-edit.enum";
import { UploadFile } from "../../../../../shared/components/upload-file/upload-file";
import { uploadFile } from "../../../../../shared/components/upload-file/upload-file.api";
import { CardImage } from "../../../../../shared/components/upload-file/card-image";
// Validation schema
/* change module */
const handlingFeeRegx = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/;
const ModuleEditSchema = Yup.object().shape({
  currencySupport: Yup.string().required("CurrencySupport is required"),
  handlingFee: Yup.string()
    .matches(handlingFeeRegx, "handlingFee in correct")
    .required("Please enter your handlingFee"),
  status: Yup.string().required("Color is required"),
  amount: Yup.string().required("amount is required"),
  profit: Yup.string().required("profit is required"),
  enabled: Yup.string().required("enabled is required"),
  name: Yup.string().required("name is required"),
  paymentType: Yup.string().required("paymentType is required"),
});

export function ModuleEditForm({ record, btnRef, saveRecord }) {
  const [files, setFiles] = useState("");
  const [disable, setDisable] = useState(false);
  useEffect(() => {
    if (record.icon) {
      setFiles(record.icon);
    }
    if (
      (record.handlingFee !== "") &
      (record.amount !== "") &
      (record.profit !== "") &
      (record.paymentType !== "") &
      (record.currencySupport !== "")
    ) {
      console.log(record.currencySupport);
      setDisable(true);
    }
  }, [record]);
  const [loading, setLoading] = useState(false);

  const onFileUpload = async (event, setNewValue) => {
    setLoading(true);
    const data = new FormData();
    data.append("file", event.target.files[0]);
    data.append("module", "available-payment-methods");
    btnRef.current.disabled = true;
    const responseUplode = await uploadFile(data);
    btnRef.current.disabled = false;
    if (responseUplode?.data?.success) {
      setFiles(responseUplode.data.data.fileAddress);
      setLoading(false);
      setNewValue("icon", responseUplode.data.data.fileAddress);
    }
  };

  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={record}
        validationSchema={ModuleEditSchema}
        onSubmit={(values) => {
          saveRecord(values);
        }}
      >
        {({ handleSubmit, setFieldValue, values }) => (
          <>
            <Form className="form form-label-right">
              <div className="form-group row">
                <div className="col-lg-4">
                  <Field
                    name="name"
                    component={Input}
                    placeholder="Name"
                    label="Name"
                  />
                </div>
                <div className="col-lg-4">
                  <Field
                    type="number"
                    name="amount"
                    min={1}
                    component={Input}
                    placeholder="Amount"
                    label="Amount"
                    disabled={disable}
                  />
                </div>
                <div className="col-lg-4">
                  <Field
                    type="number"
                    name="handlingFee"
                    component={Input}
                    placeholder="HandlingFee"
                    min={1}
                    label="HandlingFee"
                    disabled={disable}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-lg-4">
                  <label>Status</label>
                  <CustomSelect
                    options={statusOptions}
                    customStyles={{ lineHeight: "30px" }}
                    value={values.status}
                    onChange={(value) => {
                      setFieldValue("status", value.value);
                    }}
                    placeholder="select status"
                    id="status"
                    name="status"
                  />
                </div>
                <div className="col-lg-4">
                  <label>Enable</label>
                  <CustomSelect
                    options={enabledOptions}
                    customStyles={{ lineHeight: "30px" }}
                    value={values.enabled}
                    onChange={(value) => {
                      setFieldValue("enabled", value.value);
                    }}
                    placeholder="select enable"
                    id="enabled"
                    name="enabled"
                  />
                </div>
                <div className="col-lg-4">
                  <Field
                    type="number"
                    name="profit"
                    min={1}
                    component={Input}
                    placeholder="Profit"
                    label="Profit"
                    disabled={disable}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-lg-4">
                  <label>CurrencySupport</label>
                  <CustomSelect
                    options={allCurrency}
                    customStyles={{ lineHeight: "30px" }}
                    value={values.currencySupport}
                    onChange={(value) => {
                      setFieldValue("currencySupport", value.value);
                    }}
                    placeholder="select currencySupport"
                    id="currencySupport"
                    name="currencySupport"
                    isDisabled={disable}
                  />
                </div>
                <div className="col-lg-4">
                  <label>PaymentType</label>
                  <CustomSelect
                    options={paymentTypeOptions}
                    customStyles={{ lineHeight: "30px" }}
                    value={values.paymentType}
                    onChange={(value) => {
                      setFieldValue("paymentType", value.value);
                    }}
                    placeholder="select paymentType"
                    id="paymentType"
                    name="paymentType"
                    isDisabled={disable}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>description</label>
                <Field
                  name="description"
                  as="textarea"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>icon</label>
                <div className="col-lg-4">
                  <Field
                    loading={loading}
                    hidden
                    type="file"
                    name="uploadFile"
                    component={UploadFile}
                    onChange={(event) => {
                      event.target.files.length &&
                        onFileUpload(event, setFieldValue);
                    }}
                  />
                </div>
              </div>
              {files && (
                <div className="row mb-5">
                  <div className="col-3">
                    <CardImage
                      image={files}
                      removeFile={() => {
                        setFieldValue("icon", null);
                        setFiles("");
                      }}
                    />
                  </div>
                </div>
              )}
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
