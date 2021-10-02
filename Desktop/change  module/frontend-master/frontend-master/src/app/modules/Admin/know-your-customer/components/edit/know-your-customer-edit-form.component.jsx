// Form is based on Formik
// Data validation is based on Yup
// Please, be familiar with article first:
// https://hackernoon.com/react-form-validation-with-formik-and-yup-8b76bda62e10
import React from "react";
import { Formik, Form} from "formik";
import {format} from 'date-fns';
import CustomSelect from '../../../../../shared/components/custom-select/custom-select.component'
import {statusPrefixOptions} from './status.enum'
// Validation schema
/* change module */
export function ModuleEditForm({ record, btnRef, saveRecord,tab }) {
  
  const birthDate = record['birthDate'] ? format(new Date(record['birthDate']),'yyyy-MM-dd') : record['birthDate'];
  const expirationDate = record['expirationDate'] ? format(new Date(record['expirationDate']),'yyyy-MM-dd') : record['expirationDate'];
  const recordForEdit = Object.assign({}, record, { birthDate,expirationDate });
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
        onSubmit={(values) => {
          btnRef.current.disabled=true;
          saveRecord(values);
        }}
      >
        {({ handleSubmit,getFieldProps,values,setFieldValue }) => (
          <>
            <Form className="form form-label-right mt-5">

              {tab === "general" ? <>
                <div className="form-group row">
                  <div className="col-lg-4">
                    <label>First Name</label>
                    <input type="text" className="form-control"
                      {...getFieldProps("firstName")} readOnly />
                  </div>

                  <div className="col-lg-4 mt-5 mt-lg-0">
                    <label>Last Name</label>
                    <input type="text" className="form-control"
                      {...getFieldProps("lastName")} readOnly />
                  </div>

                  <div className="col-lg-4 mt-5 mt-lg-0">
                    <label>Middle Name</label>
                    <input type="text" className="form-control"
                      {...getFieldProps("middleName")} readOnly />
                  </div>


                </div>
                <div className="form-group row">
                  <div className="col-lg-6">
                    <label>gender</label>
                    <input type="text" className="form-control"
                      {...getFieldProps("gender")} readOnly />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-lg-6">
                    <label>nationality</label>
                    <input type="text" className="form-control"
                      {...getFieldProps("nationality")} readOnly />
                  </div>
                </div>
              </> : ""}

              {tab === "permanent" ? <>
                <div className="form-group row">
                  <div className="col-lg-4">
                    <label>Country</label>
                    <input type="text" className="form-control"
                      {...getFieldProps("country")} readOnly />
                  </div>

                  <div className="col-lg-4 mt-5 mt-lg-0">
                    <label>City</label>
                    <input type="text" className="form-control"
                      {...getFieldProps("city")} readOnly />
                  </div>

                  <div className="col-lg-4 mt-5 mt-lg-0">
                    <label>Address</label>
                    <textarea type="text" className="form-control" rows="2"
                      {...getFieldProps("address")} readOnly />
                  </div>


                </div>
                <div className="form-group row">
                  <div className="col-lg-6">
                    <label>Postal code</label>
                    <input type="text" className="form-control"
                      {...getFieldProps("postalCode")} readOnly />
                  </div>
                  <div className="col-lg-6 mt-5 mt-lg-0">
                    <label>State</label>
                    <input type="text" className="form-control"
                      {...getFieldProps("state")} readOnly />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-lg-6">
                    <label>Address proof type</label>
                    <textarea type="text" className="form-control" rows="2"
                      {...getFieldProps("addressProofType")} readOnly />
                  </div>
                  <div className="col-lg-6 mt-5 mt-lg-0">
                    <label>Address proof file</label>
                    <input type="text" className="form-control"
                      {...getFieldProps("addressProofFile")} readOnly />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-lg-6">
                    <label>Business telephone</label>
                    <input type="text" className="form-control"
                      {...getFieldProps("businessTelephone")} readOnly />
                  </div>
                  <div className="col-lg-6 mt-5 mt-lg-0">
                    <label>Home telephone</label>
                    <input type="text" className="form-control"
                      {...getFieldProps("homeTelephone")} readOnly />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-lg-6">
                    <label>Email</label>
                    <input type="text" className="form-control"
                      {...getFieldProps("email")} readOnly />
                  </div>
                </div>

              </> : ""}

              {tab === "activity" ? <>
                <div className="form-group row">
                  <div className="col-lg-6">
                    <label>Occupation type</label>
                    <input type="text" className="form-control"
                      {...getFieldProps("occupationType")} readOnly />
                  </div>

                  <div className="col-lg-6 mt-5 mt-lg-0">
                    <label>Occupation details</label>
                    <input type="text" className="form-control"
                      {...getFieldProps("occupationDetails")} readOnly />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-lg-4">
                    <label>Organization country</label>
                    <input type="text" className="form-control"
                      {...getFieldProps("organizationCountry")} readOnly />
                  </div>
                  <div className="col-lg-4 mt-5 mt-lg-0">
                    <label>Organization city</label>
                    <input type="text" className="form-control"
                      {...getFieldProps("organizationCity")} readOnly />
                  </div>
                  <div className="col-lg-4 mt-5 mt-lg-0">
                    <label>Organization address</label>
                    <textarea type="text" className="form-control" rows="2"
                      {...getFieldProps("organizationAddress")} readOnly />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-lg-6">
                    <label>Organization name</label>
                    <input type="text" className="form-control"
                      {...getFieldProps("organizationName")} readOnly />
                  </div>
                  <div className="col-lg-6 mt-5 mt-lg-0">
                    <label>Organization website</label>
                    <input type="text" className="form-control"
                      {...getFieldProps("organizationWebsite")} readOnly />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-lg-6">
                    <label>Business telephone</label>
                    <input type="text" className="form-control"
                      {...getFieldProps("businessTelephone")} readOnly />
                  </div>
                  <div className="col-lg-6 mt-5 mt-lg-0">
                    <label>Home telephone</label>
                    <input type="text" className="form-control"
                      {...getFieldProps("homeTelephone")} readOnly />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-lg-4">
                    <label>Organization position</label>
                    <input type="text" className="form-control"
                      {...getFieldProps("organizationPosition")} readOnly />
                  </div>
                  <div className="col-lg-4 mt-5 mt-lg-0">
                    <label>Organization postal code</label>
                    <input type="text" className="form-control"
                      {...getFieldProps("organizationPostalCode")} readOnly />
                  </div>
                  <div className="col-lg-4 mt-5 mt-lg-0">
                    <label>Organization state</label>
                    <input type="text" className="form-control"
                      {...getFieldProps("organizationState")} readOnly />
                  </div>
                </div>

              </> : ""}

              {tab === "identification" ? <>
                <div className="form-group row">
                  <div className="col-lg-6">
                    <label>Id type</label>
                    <input type="text" className="form-control"
                      {...getFieldProps("idType")} readOnly />
                  </div>

                  <div className="col-lg-6 mt-5 mt-lg-0">
                    <label>Id number</label>
                    <input type="text" className="form-control"
                      {...getFieldProps("idNumber")} readOnly />
                  </div>




                </div>
                <div className="form-group row">
                  <div className="col-lg-6">
                    <label>Id file</label>
                    <input type="text" className="form-control"
                      {...getFieldProps("idFile")} readOnly />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-lg-6">
                    <label>Birth date</label>
                    <input type="text" className="form-control"
                      {...getFieldProps("birthDate")} readOnly />
                  </div>
                </div>
              </> : ""}

              {tab === "changeStatus" ? <>
                <div className="form-group row">

                  <div className="col-lg-6">
                    <label>Status</label>
                    <CustomSelect
                      options={statusPrefixOptions}
                      customStyles={{ lineHeight: "27px" }}
                      value={values.status}
                      onChange={(value) => {

                        setFieldValue("status", value.value)

                      }
                      }
                      placeholder="select status"
                      // defaultValue={statusPrefixOptions[0]}

                      id="status"
                      name="sattus"

                    />


                  </div>

                </div>
                <div className="form-group row">

                  <div className="col-lg-6">
                    <label>Deny Reason</label>

                    <textarea className="form-control" id="denyReason" name="denyReason" rows="5"
                      {...getFieldProps("denyReason")}></textarea>
                  </div>

                </div>
                <div className="form-group row">

                  <div className="col-lg-6">
                    <label>Expiration date</label>
                    <input type="date" className="form-control" id="expirationDate" name="expirationDate"
                     min={setToday()} {...getFieldProps("expirationDate")}
                    />
                  </div>

                </div>

              </> : ""}
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
