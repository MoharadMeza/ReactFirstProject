import React, { useMemo } from "react";
import { Formik , Field} from "formik";
import isEqual from "lodash/isEqual";
import { Input } from "../../../../../../_metronic/_partials/controls";
import { useUIContext } from "../black-list-ip-ui.context";
import { format } from "date-fns";
import { searchWithDebounce } from "../../../../../helpers/searchWithDebounce";

const prepareFilter = (queryParams, values) => {
  /* change module */

  const { searchText, searchDateCreate, searchDateUpadte} = values;
  const newQueryParams = { ...queryParams };
  const filter = {};

  if (searchText) {
    filter.ip = searchText;
  }
  if (searchDateCreate) {
    filter.createdAt = format(new Date(searchDateCreate),"yyyy-MM-dd'T'HH:mm:ss");

  }
  
  if (searchDateUpadte) {
    filter.updatedAt = format(new Date(searchDateUpadte),"yyyy-MM-dd'T'HH:mm:ss");

  }
  newQueryParams.filter = filter;
  return newQueryParams;
};

export function ModuleFilter({ listLoading }) {
  const UIContext = useUIContext();
  const UIProps = useMemo(() => {
    return {
      setQueryParams: UIContext.setQueryParams,
      queryParams: UIContext.queryParams,
    };
  }, [UIContext]);

  const applyFilter = (values) => {
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
          searchText: "",
          searchDateCreate: "",
          searchDateUpadte:""
        }}
        onSubmit={(values) => {
          applyFilter(values);
        }}
      >
        {({ values, handleSubmit, setFieldValue }) => (
          <form onSubmit={handleSubmit} className="form form-label-right">
            <div className="form-group row">
              <div className="col-lg-3">
                <input
                  type="text"
                  className="form-control"
                  name="searchText"
                  placeholder="Search"
                  value={values.searchText}
                  onChange={(e) => {
                    setFieldValue("searchText", e.target.value);
                    searchWithDebounce(handleSubmit);
                  }}
                />
                <small className="form-text text-muted">
                  <b>Search</b> in ip
                </small>
              </div>
              <div className="col-lg-4">
              <Field
                    id="createdAt"
                    name="createdAt"
                    type="datetime-local"
                    step="1"
                    component={Input}
                    value={values.searchDateCreate}
                    onChange={(e) => {
                    setFieldValue("searchDateCreate", e.target.value);
                    searchWithDebounce(handleSubmit);
                  }}
                  />
                <small className="form-text text-muted">
                  <b>Search</b> in createdAt
                </small>
              </div>
              <div className="col-lg-4">
              <Field
                  id="updatedAt"
                  name="updatedAt"
                  type="datetime-local"
                  step="1"
                  component={Input}
                  value={values.searchDateUpadte}
                  onChange={(e) => {
                  setFieldValue("searchDateUpadte", e.target.value);
                  searchWithDebounce(handleSubmit);
                  }}
               />
                <small className="form-text text-muted">
                  <b>Search</b> in updatedAt
                </small>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}
