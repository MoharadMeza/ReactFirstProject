import React, { useMemo } from "react";
import { Formik } from "formik";
import isEqual from "lodash/isEqual";
import { searchWithDebounce } from '../../../../../helpers/searchWithDebounce';
/* change module */
import { useUIContext } from "../custom-rate-ui.context";
const prepareFilter = (queryParams, values) => {
  /* change module */
  const { searchText,searchNumber} = values;
  const newQueryParams = { ...queryParams };
  
  const filter = {};
  // Filter by status
  /* change module */

  if (searchText) {
    filter.to = searchText;
    filter.from = searchText;
  }
  if (searchNumber) {
    filter.rate=searchNumber;
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
          from:"",
          to:"",
          searchText: "",
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
                  <b>Search</b> in currency
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
                  <b>Search</b> in rate
                </small>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}
