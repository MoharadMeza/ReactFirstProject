import React, { useMemo } from "react";
import { Formik } from "formik";
import isEqual from "lodash/isEqual";
/* change module */
import CustomSelect from "../../../../../shared/components/custom-select/custom-select.component";
import { useUIContext } from "../support-ui.context";
import { supportStatus, supportType } from "../support-ui.helpers";
import { searchWithDebounce } from '../../../../../helpers/searchWithDebounce';


const prepareFilter = (queryParams, values) => {
  /* change module */
  const { status, typeOfSupport, searchText } = values;
  const newQueryParams = { ...queryParams };

  const filter = {};
  // Filter by status
  /* change module */
  filter.status = status !== "" ? status : undefined;
  // Filter by type
  /* change module */
  filter.typeOfSupport = typeOfSupport !== "" ? typeOfSupport : undefined;

  if (searchText) {
    filter.email = searchText;
    filter.contactPhone = searchText;
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
          typeOfSupport: "",
          searchText: ""
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
              <div className="col-lg-3 mb-lg-0 mb-3">
                <CustomSelect
                  customStyles={{ lineHeight: "20px" }}
                  options={supportStatus}
                  name="status"
                  onChange={value => {
                    setFieldValue("status", value.value);
                    handleSubmit();
                  }}
                  defaultValue={supportStatus[0]}
                >
                </CustomSelect>
                <small className="form-text text-muted">
                  <b>Filter</b> by Status
                </small>
              </div>
              <div className="col-lg-3 mb-md-0 mb-3">
                <CustomSelect
                  customStyles={{ lineHeight: "20px" }}
                  name="typeOfSupport"
                  options={supportType}
                  onChange={value => {
                    setFieldValue("typeOfSupport", value.value);
                    handleSubmit();
                  }}
                  defaultValue={supportType[0]}
                >
                </CustomSelect>
                <small className="form-text text-muted">
                  <b>Filter</b> by Support Type
                </small>
              </div>
              <div className="col-lg-3 mb-md-0 mb-3">
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
                  <b>Search</b> in Email and Phone
                </small>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}
