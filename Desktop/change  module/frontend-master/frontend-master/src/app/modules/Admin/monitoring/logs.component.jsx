import React from "react"
import {
    Card,
    CardBody,
    CardHeader,
    CardHeaderToolbar
} from "../../../../_metronic/_partials/controls";

export const Logs = ({ logsData }) => {

    return (
        <Card>
            <CardHeader title="Logs">
                <CardHeaderToolbar>
                    <button
                        type="button"
                        // onClick={backToModuleList}
                        className="btn btn-light"
                    >
                        <i className="fa fa-times"></i>
                        Close
                    </button>
                </CardHeaderToolbar>
            </CardHeader>
            <CardBody>
                {logsData.map((item) => {
                    return (
                        <p>{item}</p>
                    )
                })}
            </CardBody>
        </Card>
    )
}