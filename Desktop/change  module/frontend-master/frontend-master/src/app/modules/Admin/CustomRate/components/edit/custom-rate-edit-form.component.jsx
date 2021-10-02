// Form is based on Formik
// Data validation is based on Yup
// Please, be familiar with article first:
// https://hackernoon.com/react-form-validation-with-formik-and-yup-8b76bda62e10
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {format} from 'date-fns';
import { Input } from "../../../../../../_metronic/_partials/controls";
import CustomSelect from "../../../../../shared/components/custom-select/custom-select.component"
import { allCurrency } from "../../../../../helpers/currency"
// Validation schema
/* change module */
const ModuleEditSchema = Yup.object().shape({
  rate: Yup.string().required("This field is required"),
  from: Yup.string().required("This field is required"),
  to: Yup.string().required("This field is required"),
});

export function ModuleEditForm({ record, btnRef, saveRecord }) {
  const expireDate = record['expireDate'] ? format(new Date(record['expireDate']),"yyyy-MM-dd'T'HH:mm:ss") : record['expireDate'];
  const recordForEdit = Object.assign({}, record, { expireDate });

  const prepareData=(value)=>{
    if(!value['expireDate'])
    {
      value['expireDate']=null; 
    }
   saveRecord(value);
  }
  const setToday = () => {
		let today = new Date();
		let dd = today.getDate();
		let mm = today.getMonth() + 1; //January is 0!
		let yyyy = today.getFullYear();
		if (dd < 10) {
			dd = '0' + dd
		}
		if (mm < 10) {
			mm = '0' + mm
		}

		today = yyyy + '-' + mm + '-' + dd;
    return today;
	}

  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={recordForEdit}
        validationSchema={ModuleEditSchema}
        onSubmit={values => {
          btnRef.current.disabled=true;
          prepareData(values)
        }}
      >
        {({ handleSubmit, setFieldValue, values, touched, errors }) => (
          <>
            <Form className="form form-label-right">
              <div className="form-group row">
                <div className="col-lg-4">
                  <label>currency</label>
                  <CustomSelect
                    options={allCurrency}
                    value={values.from}
                    customStyles={{ lineHeight: "30px" }}
                    onChange={(value) => {
                      setFieldValue("from", value.value)

                    }
                    }
                    placeholder="select from currency"
                    id="from"
                    name="from"

                  />
                  {touched.from && errors.from ? (
                    <div className="fv-plugins-message-container">
                      <div className="fv-help-block">
                        {errors.from}
                      </div>
                    </div>
                  ) : null}

                </div>

                <div className="col-lg-4 mt-2 mt-lg-0">
                  <label>currency</label>
                  <CustomSelect
                    options={allCurrency}
                    value={values.to}
                    customStyles={{ lineHeight: "30px" }}
                    onChange={(value) => {
                      setFieldValue("to", value.value)

                    }
                    }
                    placeholder="select to currency"
                    id="to"
                    name="to"

                  />
                  {touched.to && errors.to ? (
                    <div className="fv-plugins-message-container">
                      <div className="fv-help-block">
                        {errors.to}
                      </div>
                    </div>
                  ) : null}
                </div>

                <div className="col-lg-4 mt-2 mt-lg-0">
                  <Field
                    name="rate"
                    component={Input}
                    placeholder="Rate"
                    label="Rate"
                  />
                </div>


              </div>

              <div className="form-group row">
                <div className="col-lg-12">
                  <label>Expire Date</label>
                </div>
                <div className="col-lg-5">

                  <Field
                    id="expireDate"
                    name="expireDate"
                    type="datetime-local"
                    min={`${setToday()}T00:00`}
                   
                    component={Input}
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
