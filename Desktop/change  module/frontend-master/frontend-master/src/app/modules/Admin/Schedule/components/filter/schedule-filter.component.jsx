import React, { useMemo } from "react";
import { Formik } from "formik";
import isEqual from "lodash/isEqual";
/* change module */
import { useUIContext } from "../schedule-ui.context";
import { searchWithDebounce } from '../../../../../helpers/searchWithDebounce';

const prepareFilter = (queryParams, values) => {
  /* change module */
  const { status, searchText ,typeOfDevice,searchNumber} = values;
  const newQueryParams = { ...queryParams };
  
  const filter = {};
  // Filter by status
  /* change module */
  filter.scheduleStatus = status !== "" ? status : undefined;
  filter.typeOfDevice=typeOfDevice!==""?typeOfDevice:undefined

  if (searchText) {
    filter.email=searchText;
  }
  if (searchNumber) {
    filter.phoneNumber=searchNumber;
  }
  newQueryParams.filter = filter;
  return newQueryParams;
};

export function ModuleFilter({ listLoading }) {
  const UIContext = useUIContext();
  const UIProps = useMemo(() => {
    return {
      setQueryParams: UIContext.setQueryParams,
      queryParams: UIContext.queryParams
    };
  }, [UIContext]);

  const applyFilter = values => {
    const newQueryParams = prepareFilter(UIProps.queryParams, values);
    if (!isEqual(newQueryParams, UIProps.queryParams)) {
      newQueryParams.pageNumber = 1;
      UIProps.setQueryParams(newQueryParams);
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          status: "",
          searchText: "",
          typeOfDevice:"",
          searchNumber:""
        }}
        onSubmit={values => {
          applyFilter(values);
        }}
      >
        {({
          values,
          handleSubmit,
          handleBlur,
          handleChange,
          setFieldValue
        }) => (
          <form onSubmit={handleSubmit} className="form form-label-right">
            <div className="form-group row">
              <div className="col-lg-2">
                <select
                  className="form-control"
                  name="status"
                  placeholder="Filter by Status"
                  onChange={e => {
                    setFieldValue("status", e.target.value);
                    handleSubmit();
                  }}
                  onBlur={handleBlur}
                  value={values.status}
                >
                  <option value="">All</option>
                  <option value="active">active</option>
                  <option value="deActive">deActive</option>
                  <option value="remove">remove</option>
                </select>
                <small className="form-text text-muted">
                  <b>Filter</b> by Status
                </small>
              </div>
              <div className="col-lg-2">
                <select
                  className="form-control"
                  name="status"
                  placeholder="Filter by Device"
                  onChange={e => {
                    setFieldValue("typeOfDevice", e.target.value);
                    handleSubmit();
                  }}
                  onBlur={handleBlur}
                  value={values.typeOfDevice}
                >
                  <option value="">All</option>
                  <option value="desktop">desktop</option>
                  <option value="androidSmartPhone">androidSmartPhone</option>
                  <option value="windowsSmartPhone">windowsSmartPhone</option>
                  <option value="iosSmartPhone">iosSmartPhone</option>
                  <option value="gigasetDevice">gigasetDevice</option>
                  <option value="otherIpDevice">otherIpDevice</option>
                </select>
                <small className="form-text text-muted">
                  <b>Filter</b> by type of device
                </small>
              </div>
              
              <div className="col-lg-2">
                <input
                  type="text"
                  className="form-control"
                  name="searchText"
                  placeholder="Search"
                  onBlur={handleBlur}
                  value={values.searchText}
                  onChange={e => {
                    setFieldValue("searchText", e.target.value);
                    searchWithDebounce(handleSubmit);
                  }}
                />
                <small className="form-text text-muted">
                  <b>Search</b> in email
                </small>
              </div>
              <div className="col-lg-2">
                <input
                  type="text"
                  className="form-control"
                  name="searchNumber"
                  placeholder="Search"
                  onBlur={handleBlur}
                  value={values.searchNumber}
                  onChange={e => {
                    setFieldValue("searchNumber", e.target.value);
                    searchWithDebounce(handleSubmit);
                  }}
                />
                <small className="form-text text-muted">
                  <b>Search</b> in Phone
                </small>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}
