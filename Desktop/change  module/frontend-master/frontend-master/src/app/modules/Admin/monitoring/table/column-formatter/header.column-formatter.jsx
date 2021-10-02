import React from "react"

export function HeaderFormatter(column) {
    return (
        <div className="container-fluid px-0">
            <div className="row justify-content-center mb-3">{column.text}</div>
            {column.text === "logs" ?
                <div className="row">
                    <div className="col">All</div>
                    <div className="col">Errors</div>
                </div>
                :
                <div className="row">
                    <div className="col col-sm-12 col-md-4">Required</div>
                    <div className="col col-sm-12 col-md-4">Used</div>
                    <div className="col col-sm-12 col-md-4">Available</div>
                </div>
            }
        </div>
    )
}