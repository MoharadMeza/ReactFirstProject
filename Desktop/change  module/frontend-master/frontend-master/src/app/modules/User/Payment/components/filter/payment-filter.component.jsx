import React, { useMemo } from "react";
import { Formik } from "formik";
import isEqual from "lodash/isEqual";
/* change module */
import { useUIContext } from "../payment-ui.context";
import { searchWithDebounce } from "../../../../../helpers/searchWithDebounce";
const prepareFilter = (queryParams, values) => {
  /* change module */
  const { status, currency,searchText } = values;
  const newQueryParams = { ...queryParams };

  const filter = {};
  /* change module */
  filter.status = status !== "" ? status : undefined;
  filter.currency = currency !== "" ? currency : undefined;
  if (searchText) {
    filter.amount = searchText;
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
          status: "",
          currency: "",
        }}
        onSubmit={(values) => {
          applyFilter(values);
        }}
      >
        {({
          values,
          handleSubmit,
          handleBlur,
          handleChange,
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit} className="form form-label-right">
            <div className="form-group row">
              <div className="col-lg-2">
                <select
                  className="form-control"
                  name="status"
                  placeholder="Filter by Status"
                  onChange={(e) => {
                    setFieldValue("status", e.target.value);
                    handleSubmit();
                  }}
                  onBlur={handleBlur}
                  value={values.status}
                >
                  <option value="">All</option>
                  <option value="PENDING">PENDING</option>
                  <option value="PENDING">APPROVED</option>
                  <option value="PENDING">DECLINED</option>
                </select>
                <small className="form-text text-muted">
                  <b>Filter</b> by Status
                </small>
              </div>
              <div className="col-lg-2">
                <select
                  className="form-control"
                  name="currency"
                  placeholder="Filter by Currency"
                  onChange={(e) => {
                    setFieldValue("currency", e.target.value);
                    handleSubmit();
                  }}
                  onBlur={handleBlur}
                  value={values.currency}
                >
                  <option value="">All</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="IRR">IRR</option>
                </select>
                <small className="form-text text-muted">
                  <b>Filter</b> by Currency
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
                  onChange={(e) => {
                    setFieldValue("searchText", e.target.value);
                    searchWithDebounce(handleSubmit);
                  }}
                />
                <small className="form-text text-muted">
                  <b>Search</b> in amount
                </small>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}
