import React, { useEffect } from "react"
import { useSelector , useDispatch , shallowEqual } from "react-redux";
import { ModuleLoadingDialog } from "./loading-dialog/monitoring-dialog.component";
import * as actions from "./_redux/monitoring.actions"
import MonitoringTable from "./table/monitoring-table.component";
import { Logs } from "./logs.component";
const queryParams = {
    filter: {
      type: "",
      status: ""
    },
    sortOrder: "desc", // asc||desc
    sortField: "createdAt",
    pageNumber: 1,
    pageSize: 5
  };
export default function MonitoringPage() {

    const { currentState } = useSelector(
        (state) => ({ currentState: state.monitoring }) /* change module */,
        shallowEqual
    );
    const { entities, listLoading , moduleForEdit } = currentState;
    const dispatch = useDispatch();

    useEffect(() => {
        // clear selections list
        // server call by queryParams
        dispatch(actions.fetchRecords(queryParams))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ dispatch]);


    return (
        <>
            <ModuleLoadingDialog loading={listLoading} />
            {entities && <MonitoringTable data={entities} />}
            {moduleForEdit && moduleForEdit.length > 0 ?  <Logs logsData={moduleForEdit} /> : null}
        </>
    )
}