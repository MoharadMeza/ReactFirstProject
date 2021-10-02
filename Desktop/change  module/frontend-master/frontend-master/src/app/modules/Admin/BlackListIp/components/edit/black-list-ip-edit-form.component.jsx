// Form is based on Formik
// Data validation is based on Yup
// Please, be familiar with article first:
// https://hackernoon.com/react-form-validation-with-formik-and-yup-8b76bda62e10
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Input } from "../../../../../../_metronic/_partials/controls";

/* change module */

// Validation schema
/* change module */
const ipRegEx = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
const ModuleEditSchema = Yup.object({
  ip: Yup.string()
    .matches(ipRegEx, "ip in correct,you should enter number between 0 at 255")
    .required("Please enter your ip"),
});
export function ModuleEditForm({ record, btnRef, saveRecord }) {
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
        {(formik) => {
          const { handleSubmit } = formik;
          return (
            <>
              <Form className="form form-label-right">
                <div className="form-group row">
                  <div className="col-lg-6">
                    <Field
                      name="ip"
                      component={Input}
                      placeholder="xxx.xxx.xxx.xxx"
                      label="ip"
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
          );
        }}
      </Formik>
    </>
  );
}
