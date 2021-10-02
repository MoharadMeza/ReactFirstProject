import React from "react"
import BootstrapTable from "react-bootstrap-table-next"
import { useDispatch } from "react-redux";
import {
    Card,
    CardBody,
    CardHeader,
} from "../../../../../_metronic/_partials/controls";
import {columns} from "./columns"


export default function MonitoringTable({ data }) {

    const dispatch = useDispatch()

    const rowStyle = (row) => {
        const style = {}
        if (row.system_status === false)
            style.color = 'red'
        return style
    }
    
    return (
        <Card>
            <CardHeader title="Monitoring" />
            <CardBody>
                    <BootstrapTable
                        wrapperClasses="table-responsive"
                        classes="table table-head-custom table-vertical-center overflow-hidden justify-content-center"
                        remote
                        keyField="name"
                        bootstrap4
                        bordered={false}
                        columns={columns(data , dispatch)}
                        data={data}
                        rowStyle={rowStyle}
                    >
                    </BootstrapTable>
            </CardBody>
        </Card>
    )
}