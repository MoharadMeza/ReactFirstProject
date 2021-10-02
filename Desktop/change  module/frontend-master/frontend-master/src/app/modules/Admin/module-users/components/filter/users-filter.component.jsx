import React, { useMemo } from "react";
import { Formik } from "formik";
import isEqual from "lodash/isEqual";
/* change module */
import { useUIContext } from "../users-ui.context";
import CustomSelect from "../../../../../shared/components/custom-select/custom-select.component"
import { usersStatusForFilter, usersRoleForFilter, usersAccountStatusForFilter } from "../users-ui.helpers";
import { searchWithDebounce } from "../../../../../helpers/searchWithDebounce";


const prepareFilter = (queryParams, values) => {
  /* change module */
  const { status, role, accountStatus, searchText } = values;
  const newQueryParams = { ...queryParams };

  const filter = {};
  // Filter by status
  /* change module */
  filter.status = status !== "" ? status : undefined;
  // Filter by type
  /* change module */
  filter.role = role !== "" ? role : undefined;

  filter.accountStatus = accountStatus !== "" ? accountStatus : undefined;

  if (searchText) {
    const profile = {
      telephoneNumber: searchText,
      email: searchText
    }
    filter.profile = profile;
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
          accountStatus: "",
          role: "",
          locationSettings: { country: "" },
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
          handleChange,
          setFieldValue
        }) => (
          <form onSubmit={handleSubmit} className="form form-label-right">
            <div className="form-group row">
              <div className="col-lg-3 mb-md-0 mb-5">
                <CustomSelect
                  value=""
                  name="status"
                  options={usersStatusForFilter}
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

              <div className="col-lg-3  mb-md-0 mb-5">
                <CustomSelect
                  value=""
                  name="accountStatus"
                  options={usersAccountStatusForFilter}
                  customStyles={{ lineHeight: "20px" }}
                  onChange={(value) => {
                    setFieldValue("accountStatus", value.value)
                    handleSubmit()
                  }}
                />
                <small className="form-text text-muted">
                  <b>Filter</b> by Account Status
                </small>
              </div>
              <div className="col-lg-3 mb-md-0 mb-5">
                <CustomSelect
                  value=""
                  name="role"
                  options={usersRoleForFilter}
                  customStyles={{ lineHeight: "20px" }}
                  onChange={(value) => {
                    setFieldValue("role", value.value)
                    handleSubmit();
                  }}
                />
                <small className="form-text text-muted">
                  <b>Filter</b> by Role
                </small>
              </div>
              <div className="col-lg-3 mb-md-0 mb-5">
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
                  <b>Search</b> in Telephone and Email
                </small>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}
