import React from "react"

export const OpenNode = ({ record }) => {

    return (
        <>
            <div className="mb-5">
                <p>
                    {`Lightning_invoice :  ${record.OpenNode.lightning_invoice.expires_at}`}
                </p>
            </div>

            <div className="mb-5">
                <p>
                    {`Lightning_invoice :  ${record.OpenNode.lightning_invoice.pay_req}`}
                </p>
            </div>
            <div className="mb-5">
                <p>
                    {`Chain_invoice :  ${record.OpenNode.chain_invoice.address}`}
                </p>
            </div>
            <div className="mb-5">
                <p>
                    {`Description :  ${record.OpenNode.description}`}
                </p>
            </div>
            <div className="mb-5">
                <p>
                    {`Order_id :  ${record.OpenNode.order_id}`}
                </p>
            </div>

            <div className="mb-5">
                <p>
                    {`Source_fiat_value :  ${record.OpenNode.source_fiat_value}`}
                </p>
            </div>
            <div className="mb-5">
                <p>
                    {`Fiat_value :  ${record.OpenNode.fiat_value}`}
                </p>
            </div>
            <div className="mb-5">
                <p>
                    {`Auto_settle :  ${record.OpenNode.auto_settle}`}
                </p>
            </div>
            <div className="mb-5">
                <p>
                    {`Amount :  ${record.OpenNode.amount}`}
                </p>
            </div>
            <div className="mb-5">
                <p>
                    {`HandlingFee :  ${record.OpenNode.handlingFee}`}
                </p>
            </div>
            <div className="mb-5">
                <p>
                    {`Uri :  ${record.OpenNode.uri}`}
                </p>
            </div>
            <div className="mb-5">
                <p>
                    {`ApproveLink :  ${record.OpenNode.approveLink}`}
                </p>
            </div>
        </>
    )
}