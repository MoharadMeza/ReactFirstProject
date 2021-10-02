import React, { useMemo } from "react";
import { Formik } from "formik";
import isEqual from "lodash/isEqual";
/* change module */
import { useUIContext } from "../payment-ui.context";
import CustomSelect from "../../../../../shared/components/custom-select/custom-select.component"
import SelectFlag from "../../../../../shared/components/select-with-flag/select-with-flag.component";
import { paymentStatus } from "../payment-ui.helpers";
import { countriesCurrency } from "../../../../../helpers/countries"
import { Charged } from "./payment-filter.enum";

const prepareFilter = (queryParams, values) => {
  /* change module */
  const { status, charged, currency } = values;
  const newQueryParams = { ...queryParams };

  const filter = {};
  // Filter by status
  /* change module */
  filter.status = status !== "" ? status : undefined;
  // Filter by type
  /* change module */
  filter.currency = currency !== "" ? currency : undefined
  filter.charged = charged !== "" ? charged : undefined
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
          paymentType: "",
          searchText: "",
          charged: ""
        }}
        onSubmit={values => {
          applyFilter(values);
        }}
      >
        {({
          values,
          handleSubmit,
          handleBlur,
          setFieldValue
        }) => (
          <form onSubmit={handleSubmit} className="form form-label-right">
            <div className="form-group row">
              <div className="col-lg-3 mb-md-0 mb-5">
                <CustomSelect
                  value=""
                  name="status"
                  options={paymentStatus}
                  customStyles={{ lineHeight: "20px" }}
                  onChange={(value) => {
                    setFieldValue("status", value.value)
                    handleSubmit()
                  }}
                />
                <small className="form-text text-muted">
                  <b>Filter</b> by Status
                </small>
              </div>
              <div className="col-lg-3 mb-md-0 mb-5">
                <CustomSelect
                  value=""
                  name="paymentType"
                  options={Charged}
                  customStyles={{ lineHeight: "20px" }}
                  onChange={(value) => {
                    setFieldValue("charged", value.value)
                    handleSubmit()
                  }}
                />
                <small className="form-text text-muted">
                  <b>Filter</b> by Charged
                </small>
              </div>
              <div className="col-lg-3 mb-md-0 mb-5">
                <SelectFlag
                  isClearable={true}
                  placeholder="All"
                  name="currency"
                  options={countriesCurrency}
                  customStyles={{ lineHeight: "20px" }}
                  onChange={(value) => {
                    if (!value)
                      setFieldValue("currency", "")
                    else
                      setFieldValue("currency", value.value)
                    handleSubmit()
                  }}
                />
                <small className="form-text text-muted">
                  <b>Filter</b> by Currency
                </small>
              </div>

            </div>
          </form>
        )}
      </Formik>
    </>
  );
}
