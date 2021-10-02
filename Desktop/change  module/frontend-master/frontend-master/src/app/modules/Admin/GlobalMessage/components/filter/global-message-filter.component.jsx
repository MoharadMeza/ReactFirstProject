import React, { useMemo } from "react";
import { Formik } from "formik";
import isEqual from "lodash/isEqual";
/* change module */
import { useUIContext } from "../global-message-ui.context";
import { searchWithDebounce } from "../../../../../helpers/searchWithDebounce";
import CustomSelect from "../../../../../shared/components/custom-select/custom-select.component";
import { statusTitlesForFilter, typeTitlesForFilter } from "../global-message-ui.helpers";

const prepareFilter = (queryParams, values) => {
  /* change module */
  const { status, type, searchText } = values;
  const newQueryParams = { ...queryParams };

  const filter = {};
  // Filter by status
  /* change module */
  filter.status = status !== "" ? status : undefined;
  // Filter by type
  /* change module */
  filter.type = type !== "" ? type : undefined;

  if (searchText) {
    filter.title = searchText;
    filter.text = searchText;
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
          type: "",
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
              <div className="col-lg-2">
                <CustomSelect
                  value=""
                  name="status"
                  customStyles={{ lineHeight: "20px" }}
                  options={statusTitlesForFilter}
                  onChange={(value) => {
                    setFieldValue("status", value.value)
                    handleSubmit()
                  }}
                />
                <small className="form-text text-muted">
                  <b>Filter</b> by Status
                </small>
              </div>
              <div className="col-lg-2">
                <CustomSelect
                  value=""
                  name="status"
                  customStyles={{ lineHeight: "20px" }}
                  options={typeTitlesForFilter}
                  onChange={(value) => {
                    setFieldValue("type", value.value)
                    handleSubmit()
                  }}
                />
                <small className="form-text text-muted">
                  <b>Filter</b> by Type
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
                    searchWithDebounce(handleSubmit)
                  }}
                />
                <small className="form-text text-muted">
                  <b>Search</b> in title and text
                </small>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}
