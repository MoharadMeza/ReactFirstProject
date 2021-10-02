// Form is based on Formik
// Data validation is based on Yup
// Please, be familiar with article first:
// https://hackernoon.com/react-form-validation-with-formik-and-yup-8b76bda62e10
import React  from "react";
import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";
import CustomSelect from "../../../../../shared/components/custom-select/custom-select.component";
import { Input } from "../../../../../shared/metronic/_partials/controls/forms/Input"
/* change module */
import {
  adminSupportStatus,
} from "../support-ui.helpers";
import { datoToLocal } from "../../../../../helpers/date";


export function ModuleEditForm({ record, btnRef, saveRecord }) {

  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={record}
        onSubmit={values => {
          saveRecord(values);
        }}
      >
        {({ handleSubmit, setFieldValue , values }) => (
          <>
            <Form className="form form-label-right">
              <div className="form-group row">
                <div className="col-lg-4">
                  <Field
                    disabled
                    name="email"
                    component={Input}
                    placeholder="Email"
                    label="Email"
                  />
                </div>
                <div className="col-lg-4">
                  <Field
                    disabled
                    name="contactPhone"
                    component={Input}
                    placeholder="Phone"
                    label="Contact Phone"
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-lg-4">
                  <Field
                    disabled
                    name="contactHour"
                    component={Input}
                    placeholder="Contact Hour"
                    label="Contact Hour"
                  />
                </div>
                <div className="col-lg-4">
                  <Field
                    disabled
                    name="countryCode"
                    component={Input}
                    placeholder="Contact Country"
                    label="Contact Country"
                  />
                </div>
                <div className="col-lg-4">
                  <Field
                    disabled
                    name="createdAt"
                    value={datoToLocal(values.createdAt)}
                    component={Input}
                    placeholder="Created at"
                    label="Created at"
                  />
                </div>
              </div>

              <div className="form-group row">
                <div className="col-lg-4">
                  <label htmlFor="">Choose Status of Support</label>
                  <CustomSelect name="status" options={adminSupportStatus} customStyles={{ lineHeight: "20px" }} value={record.status}
                    onChange={(value) => setFieldValue("status", value.value)}>
                  </CustomSelect>
                </div>
                <div className="col-lg-4">
                  <Field name="typeOfSupport" disabled component={Input} label="Type of Support" />
                </div>
              </div>
              <label htmlFor=""> Files :</label>
              <div className="row mb-3">
                {
                  record.uploadFile && record.uploadFile.map((item) => {
                    return (
                      <div className="col col-6 mt-5">
                        <img src={`${process.env.REACT_APP_API_UPLOAD}/${item}`} alt="" width="100%" />
                      </div>
                    )
                  })
                }
              </div>
              <div className="form-group">
                <label>Message</label>
                <Field
                  disabled
                  name="message"
                  as="textarea"
                  className="form-control"
                  readOnly
                />
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
