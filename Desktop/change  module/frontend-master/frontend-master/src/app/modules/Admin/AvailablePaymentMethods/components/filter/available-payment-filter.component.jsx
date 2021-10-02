import React, { useMemo } from "react";
import { Formik } from "formik";
import isEqual from "lodash/isEqual";
/* change module */
import { useUIContext } from "../available-payment-ui.context";
import { searchWithDebounce } from '../../../../../helpers/searchWithDebounce';

const prepareFilter = (queryParams, values) => {
  /* change module */
  const {
    status,
    currencySupport,
    paymentType,
    enabled,
    searchText,
    searchAmount,
    searchHandlingFee,
    searchProfit,
  } = values;
  const newQueryParams = { ...queryParams };

  const filter = {};
  // Filter by status
  /* change module */
  filter.status = status !== "" ? status : undefined;
  filter.currencySupport = currencySupport !== "" ? currencySupport : undefined;
  filter.paymentType = paymentType !== "" ? paymentType : undefined;
  filter.enabled = enabled !== "" ? enabled : undefined;

  // Filter by type
  /* change module */

  if (searchText) {
    filter.name = searchText;
  }
  if (searchAmount) {
    filter.amount = searchAmount;
  }
  if (searchHandlingFee) {
    filter.handlingFee = searchHandlingFee;
  }
  if (searchProfit) {
    filter.profit = searchProfit;
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
          status: "",
          paymentType: "",
          currencySupport: "",
          enabled:"",
          searchText: "",
          searchAmount: "",
          searchHandlingFee: "",
          searchProfit: "",
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
                  <option value="active">active</option>
                  <option value="deActive">deActive</option>
                  <option value="removed">removed</option>
                </select>
                <small className="form-text text-muted">
                  <b>Filter</b> by Status
                </small>
              </div>
              <div className="col-lg-2">
                <select
                  className="form-control"
                  placeholder="Filter by Type"
                  name="currencySupport"
                  onBlur={handleBlur}
                  onChange={(e) => {
                    setFieldValue("currencySupport", e.target.value);
                    handleSubmit();
                  }}
                  value={values.currencySupport}
                >
                  <option value="">All</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="IRR">IRR</option>
                </select>
                <small className="form-text text-muted">
                  <b>Filter</b> by currencySupport
                </small>
              </div>
              <div className="col-lg-2">
                <select
                  className="form-control"
                  placeholder="Filter by Type"
                  name="paymentType"
                  onBlur={handleBlur}
                  onChange={(e) => {
                    setFieldValue("paymentType", e.target.value);
                    handleSubmit();
                  }}
                  value={values.paymentType}
                >
                  <option value="">All</option>
                  <option value="OpenNode">OpenNode</option>
                  <option value="Paypal">Paypal</option>
                </select>
                <small className="form-text text-muted">
                  <b>Filter</b> by paymentType
                </small>
              </div>
              <div className="col-lg-2">
                <select
                  className="form-control"
                  name="enabled"
                  placeholder="Filter by Enabled"
                  onChange={(e) => {
                    setFieldValue("enabled", e.target.value);
                    handleSubmit();
                  }}
                  onBlur={handleBlur}
                  value={values.enabled}
                >
                  <option value="">All</option>
                  <option value="false">false</option>
                  <option value="true">true</option>
                </select>
                <small className="form-text text-muted">
                  <b>Filter</b> by Enabled
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
                  <b>Search</b> in name
                </small>
              </div>
              <div className="col-lg-2">
                <input
                  type="text"
                  className="form-control"
                  name="searchProfit"
                  placeholder="Search"
                  onBlur={handleBlur}
                  value={values.searchProfit}
                  onChange={(e) => {
                    setFieldValue("searchProfit", e.target.value);
                    searchWithDebounce(handleSubmit);
                  }}
                />
                <small className="form-text text-muted">
                  <b>Search</b> in Profit
                </small>
              </div>
              <div className="col-lg-2">
                <input
                  type="text"
                  className="form-control"
                  name="searchHandlingFee"
                  placeholder="Search"
                  onBlur={handleBlur}
                  value={values.searchHandlingFee}
                  onChange={(e) => {
                    setFieldValue("searchHandlingFee", e.target.value);
                    searchWithDebounce(handleSubmit);
                  }}
                />
                <small className="form-text text-muted">
                  <b>Search</b> in HandlingFee
                </small>
              </div>
              <div className="col-lg-2">
                <input
                  type="text"
                  className="form-control"
                  name="searchAmount"
                  placeholder="Search"
                  onBlur={handleBlur}
                  value={values.searchAmount}
                  onChange={(e) => {
                    setFieldValue("searchAmount", e.target.value);
                    searchWithDebounce(handleSubmit);
                  }}
                />
                <small className="form-text text-muted">
                  <b>Search</b> in Amount
                </small>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}
