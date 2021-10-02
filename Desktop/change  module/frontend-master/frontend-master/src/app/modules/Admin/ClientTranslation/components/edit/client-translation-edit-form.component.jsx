// Form is based on Formik
// Data validation is based on Yup
// Please, be familiar with article first:
// https://hackernoon.com/react-form-validation-with-formik-and-yup-8b76bda62e10
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Input, Select } from "../../../../../../_metronic/_partials/controls";

/* change module */
import { StatusTitles, TypeTitles } from "../client-translation-ui.helpers";

// Validation schema
/* change module */
const ModuleEditSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  text: Yup.string().required("Text is required"),
  expirationDate: Yup.string().required("Expiration Date is required"),
  status: Yup.string().required("Color is required"),
  type: Yup.string().required("Type is required"),
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
        {({ handleSubmit }) => (
          <>
            
            <Form className="form form-label-right">
              <div className="form-group row">
                <div className="col-lg-4">
                  <Field
                    name="title"
                    component={Input}
                    placeholder="Title"
                    label="Title"
                  />
                </div>

                <div className="col-lg-4">
                  <Field
                    name="expirationDate"
                    component={Input}
                    placeholder="Expiration Date"
                    label="Expiration"
                  />
                </div>

                <div className="col-lg-4">
                  <Select name="status" label="Status">
                    {StatusTitles.map((status, index) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </Select>
                </div>
              </div>

              <div className="form-group row">
                <div className="col-lg-4">
                  <Select name="type" label="Type">
                    {TypeTitles.map((type, index) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </Select>
                </div>
              </div>

              <div className="form-group">
                <label>Text</label>
                <Field name="text" as="textarea" className="form-control" />
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
