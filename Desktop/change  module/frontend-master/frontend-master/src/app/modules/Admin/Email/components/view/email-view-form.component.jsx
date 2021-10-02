// Form is based on Formik
// Data validation is based on Yup
// Please, be familiar with article first:
// https://hackernoon.com/react-form-validation-with-formik-and-yup-8b76bda62e10
import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Input } from "../../../../../../_metronic/_partials/controls";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
/* change module */

// Validation schema
/* change module */
const regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const ModuleEditSchema = Yup.object().shape({
  to: Yup.string()
    .matches(regEmail, "Email in correct")
    .required("Please enter your email"),
  subject: Yup.string().required("subject is required"),
  body: Yup.string().required("Body is required"),
});

export function ModuleViewForm({ record, btnRef, saveRecord }) {
  const [readOnly, setReadOnly] = useState(false);
  useEffect(() => {
    if ((record.to !== "") & (record.subject !== "") & (record.body !== "")) {
      setReadOnly(true);
    }
  }, [record]);
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
                    type="email"
                    name="to"
                    component={Input}
                    placeholder="name@example.com"
                    label="Email"
                    readOnly={readOnly}
                  />
                </div>
                <div className="col-lg-4">
                  <Field
                    type="text"
                    name="subject"
                    component={Input}
                    placeholder="Subject"
                    label="Subject"
                    readOnly={readOnly}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>body</label>
                <CKEditor
                  editor={ClassicEditor}
                  data={values.body}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    return setFieldValue("body", data);
                  }}
                  disabled={readOnly}
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
