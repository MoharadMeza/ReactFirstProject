// Form is based on Formik
// Data validation is based on Yup
// Please, be familiar with article first:
// https://hackernoon.com/react-form-validation-with-formik-and-yup-8b76bda62e10
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import format from "date-fns/format";
import CustomSelect from "../../../../../shared/components/custom-select/custom-select.component"
import { Input } from "../../../../../../_metronic/_partials/controls";
/* change module */
import {typeTitlesForEdit, statusTitlesForEdit } from "../global-message-ui.helpers";

// Validation schema
/* change module */
const ModuleEditSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  text: Yup.string().required("Text is required"),
  expirationDate: Yup.string().required("Expiration Date is required"),
  status: Yup.string().required("Status is required"),
  type: Yup.string().required("Type is required"),
});

export function ModuleEditForm({ record, btnRef, saveRecord }) {

  const expirationDate = record['expirationDate'] ? format(new Date(record['expirationDate']), "yyyy-MM-dd'T'HH:mm:ss") : record['expirationDate']
  const recordForEdit = Object.assign({}, record, { expirationDate })

  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={recordForEdit}
        validationSchema={ModuleEditSchema}
        onSubmit={(values) => {
          saveRecord(values);
        }}
      >
        {({ handleSubmit, setFieldValue }) => (
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
                    type="datetime-local"
                    component={Input}
                    placeholder="Expiration Date"
                    label="Expiration"
                  />
                </div>

                <div className="col-lg-4">
                  <label htmlFor="status">Status</label>
                  <CustomSelect
                    value={record && record.status}
                    name="status"
                    customStyles={{ lineHeight: "20px" }}
                    options={statusTitlesForEdit}
                    onChange={(value) => setFieldValue("status", value.value)}
                  />
                  <ErrorMessage name="status" component="div" className="text-danger"/>
                </div>
              </div>

              <div className="form-group row">
                <div className="col-lg-4">
                  <label htmlFor="status">Type</label>
                  <CustomSelect
                    value={record && record.type}
                    name="type"
                    customStyles={{ lineHeight: "20px" }}
                    options={typeTitlesForEdit}
                    onChange={(value) => setFieldValue("type", value.value)}
                  />
                  <ErrorMessage name="type" component="div" className="text-danger"/>
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
