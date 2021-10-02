// Form is based on Formik
// Data validation is based on Yup
// Please, be familiar with article first:
// https://hackernoon.com/react-form-validation-with-formik-and-yup-8b76bda62e10
import React from "react";
import { Formik, Form} from "formik";
import {format} from 'date-fns';
import CustomSelect from "../../../../../shared/components/custom-select/custom-select.component"
import {
  scheduleStatusPrefixOptions
} from './schedule.enum'
export function ModuleEditForm({ record, btnRef, saveRecord }) {
  const preferredDay = record['preferredDay'] ? format(new Date(record['preferredDay']),'yyyy-MM-dd') : record['preferredDay'];
  const recordForEdit = Object.assign({}, record, { preferredDay });

  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={recordForEdit}
        onSubmit={values => {
          btnRef.current.disabled=true;
          saveRecord(values);
        }}
      >
      
        {({ handleSubmit, setFieldValue, values,getFieldProps}) => (
          <>
            <Form className="form form-label-right">
              <div className="form-group row">
                <div className="col-lg-9">
                <div className="row">
                  <div className="col-lg-6">
                  <label>Type of device</label>
                  <input type="text" className="form-control" id="typeOfDevice" name="typeOfDevice"
                     {...getFieldProps("typeOfDevice")} readOnly/>
                  </div>
                  <div className="col-lg-6 mt-3 mt-lg-0">
                  <label>Timezone</label>
                  <input type="text" className="form-control" id="timezone" name="timezone"
                     {...getFieldProps("timezone")} readOnly/>
                  </div>
                  </div>
                  <div className="row pt-3 mt-3">
                  <div className="col-lg-6">
                  <label>Email</label>
                  <input type="text" className="form-control" id="email" name="email"
                     {...getFieldProps("email")} readOnly/>
                  </div>
                  <div className="col-lg-6 mt-3 mt-lg-0">
                  <label>Skype user</label>
                  <input type="text" className="form-control" id="skypeUser" name="skypeUser"
                     {...getFieldProps("skypeUser")} readOnly/>
                  </div>
                  </div>
                  <div className="row pt-3 mt-3">
                  <div className="col-lg-6">
                  <label>Home telephone</label>
                  <input type="text" className="form-control" id="phoneNumber" name="phoneNumber"
                     {...getFieldProps("phoneNumber")} readOnly/>
                  </div>
                  <div className="col-lg-6 mt-3 mt-lg-0">
                  <label>Preferred day</label>
                  <input type="text" className="form-control" id="preferredDay" name="preferredDay"
                     {...getFieldProps("preferredDay")} readOnly/>
                  </div>
                  </div>
                  <div className="row pt-3 mt-3">
                  <div className="col-lg-8">
                  <label>Note</label>
                     <textarea  className="form-control" id="note" name="note"
                     {...getFieldProps("note")}  rows="4" readOnly ></textarea>
                  </div>
                  </div>
                 
                
                
                  </div>
                <div className="col-lg-3">
                <label>Change schedule status</label>
                  <CustomSelect
                    options={scheduleStatusPrefixOptions}
                    customStyles={{ lineHeight: "27px" }}
                    value={values.scheduleStatus}
                    onChange={(value) => {

                      setFieldValue("scheduleStatus", value.value)

                    }
                    }
                    placeholder="select status"
                    //  defaultValue={TimeZone[0]}

                    id="scheduleStatus"
                    name="scheduleStatus"

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
