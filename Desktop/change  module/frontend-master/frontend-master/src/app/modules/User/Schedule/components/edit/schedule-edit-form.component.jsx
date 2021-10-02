// Form is based on Formik
// Data validation is based on Yup
// Please, be familiar with article first:
// https://hackernoon.com/react-form-validation-with-formik-and-yup-8b76bda62e10
import React from "react";
import { Formik, Form} from "formik";
import { Link } from "react-router-dom";
import {format} from 'date-fns';
import CustomSelect from "../../../../../shared/components/custom-select/custom-select.component"
import SelectFlag from "../../../../../shared/components/select-with-flag/select-with-flag.component"
import { DataSchemaForm } from "./schedule.validation"
import {
  scheduleTypeDevicePrefixOptions,
  TimeZonePrefixOptions, countryCodePrefixOptions
} from './schedule.enum'

export function ModuleEditForm({ record, btnRef, saveRecord }) {
  // change data record  ------------
  const preferredDay = record['preferredDay'] ? format(new Date(record['preferredDay']),'yyyy-MM-dd') : record['preferredDay'];
  const recordForEdit = Object.assign({}, record, { preferredDay });
  // --------------------------------

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
  
  const getInputClasses = (fieldTouch,fieldError) => {
    if (fieldTouch && fieldError) {
      return "is-invalid";
    }

    if (fieldTouch && !fieldError) {
      return "is-valid";
    }

    return "";
  };
  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={recordForEdit}
        validationSchema={DataSchemaForm}
        onSubmit={values => {
          btnRef.current.disabled=true;
          saveRecord(values);
        }}
      >

        {({ handleSubmit, setFieldValue, values, getFieldProps,touched,errors }) => (
          <>
            <Form className="form form-label-right">
              <div className="row">
                <div className="col-lg-7 py-5" style={{ background: "#f3f6f9" }}>
                  <p>Add us in{` `}
                  <Link
                    to={{ pathname: "https://www.skype.com" }}
                    target="_blank"

                    className="py-5"
                  >
                    Skype
                  </Link>
                  {` `}
                  to assist you in an easy way. Our team is happy to help you.
                  </p> 
                </div>
              </div>
              <div className="form-group mt-5 pt-5 row">
                <div className="col-lg-4">
                  <label>Type of device</label>
                  <CustomSelect
                    options={scheduleTypeDevicePrefixOptions}
                    customStyles={{ lineHeight: "27px" }}
                    value={values.typeOfDevice}
                    onChange={(value) => {

                      setFieldValue("typeOfDevice", value.value)

                    }
                    }
                    placeholder="select type of your device"

                    id="typeOfDevice"
                    name="typeOfDevice"

                  />
                  {touched.typeOfDevice && errors.typeOfDevice ? (
                    <div className="fv-plugins-message-container">
                      <div className="fv-help-block">
                        {errors.typeOfDevice}
                      </div>
                    </div>
                  ) : null}
                </div>

                <div className="col-lg-4 mt-5 mt-lg-0">
                  <label>Timezone</label>
                  <CustomSelect
                    options={TimeZonePrefixOptions}
                    customStyles={{ lineHeight: "27px" }}
                    value={values.timezone}
                    onChange={(value) => {

                      setFieldValue("timezone", value.value)

                    }
                    }
                    placeholder="select timezone"
                    //  defaultValue={TimeZone[0]}

                    id="timezone"
                    name="timezone"

                  />
                  {touched.timezone && errors.timezone ? (
                    <div className="fv-plugins-message-container">
                      <div className="fv-help-block">
                        {errors.timezone}
                      </div>
                    </div>
                  ) : null}
                </div>

              </div>

              <div className="form-group row">
                <div className="col-lg-4">
                  <label >Email</label>
                  <input type="email" className={`form-control ${getInputClasses(
                   touched.email,errors.email 
                  )} `} id="email" name="email"
                    placeholder="Your Email"
                    {...getFieldProps("email")} />
                  {touched.email && errors.email ? (
                    <div className="fv-plugins-message-container">
                      <div className="fv-help-block">
                        {errors.email}
                      </div>
                    </div>
                  ) : null}
                </div>

                <div className="col-lg-4 mt-5 mt-lg-0">
                  <label >Skype user</label>
                  <input type="text" className={`form-control ${getInputClasses(
                   touched.skypeUser,errors.skypeUser
                  )} `} id="skypeUser" name="skypeUser"
                    placeholder="Your Skype User"
                    {...getFieldProps("skypeUser")} />
                  {touched.skypeUser && errors.skypeUser ? (
                    <div className="fv-plugins-message-container">
                      <div className="fv-help-block">
                        {errors.skypeUser}
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="form-group row g-0">
                <div className="col-lg-12">
                  <label >Home telephone</label>
                </div>
                <div className="col-md-3  pr-md-0">
                  <SelectFlag
                    options={countryCodePrefixOptions}
                    value={values.countryCode}
                    customStyles={{ lineHeight: "25px" }}
                    onChange={value => {
                      setFieldValue("countryCode", value.value);


                    }}

                    id="countryCode"
                    name="countryCode" />
                  {touched.countryCode && errors.countryCode ? (
                    <div className="fv-plugins-message-container">
                      <div className="fv-help-block">
                        {errors.countryCode}
                      </div>
                    </div>
                  ) : null}
                </div>

                <div className="col-md-4 pl-md-0">
                  <input type="number" className="form-control" id="phoneNumber" name="phoneNumber"
                    {...getFieldProps("phoneNumber")} />

                  {touched.phoneNumber && errors.phoneNumber ? (
                    <div className="fv-plugins-message-container">
                      <div className="fv-help-block">
                        {errors.phoneNumber}
                      </div>
                    </div>
                  ) : null}
                </div>


              </div>

              <div className="form-group row">

                <div className="col-lg-6">
                  <label>Preferred day</label>
                  <input type="date" className={`form-control ${getInputClasses(
                    touched.preferredDay,errors.preferredDay 
                  )} `} name="preferredDay"
                  min={setToday()}
                    {...getFieldProps("preferredDay")}
                  />
                  {touched.preferredDay && errors.preferredDay ? (
                    <div className="fv-plugins-message-container">
                      <div className="fv-help-block">
                        {errors.preferredDay}
                      </div>
                    </div>
                  ) : null}
                </div>

              </div>
              <div className="form-group">
                <label>Add a note</label>

                <textarea className={`form-control ${getInputClasses(
                 touched.note, errors.note 
                )} `} id="note" name="note" rows="2"
                  {...getFieldProps("note")}></textarea>
                {touched.note && errors.note ? (
                  <div className="fv-plugins-message-container">
                    <div className="fv-help-block">
                      {errors.note}
                    </div>
                  </div>
                ) : null}
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
