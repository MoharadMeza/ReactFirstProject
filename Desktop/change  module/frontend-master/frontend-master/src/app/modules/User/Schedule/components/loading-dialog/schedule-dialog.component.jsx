import React, { useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { LoadingDialog } from "../../../../../../_metronic/_partials/controls";

export function ModuleLoadingDialog() {
  const { isLoading } = useSelector(
    state => ({ isLoading: state.scheduleUser.listLoading }), /* change module */
    shallowEqual
  );

  useEffect(() => {}, [isLoading]);
  
  return <LoadingDialog isLoading={isLoading} text="Loading ..." />;
}
