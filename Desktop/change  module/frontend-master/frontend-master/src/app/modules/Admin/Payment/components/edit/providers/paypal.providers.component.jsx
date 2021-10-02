import React from "react"

export const PayPal = ({ record }) => {

    return (
        <>
            <div className="mp-5">
                <p>
                    {`GivenName : ${record.Paypal.payer.name.given_name}`}
                </p>
            </div>

            <div className="mp-5">
                <p>
                    {`SurName : ${record.Paypal.payer.name.surname}`}
                </p>
            </div>
            <div className="mp-5">
                <p>
                    {`CountryCode : ${record.Paypal.payer.address.country_code}`}
                </p>
            </div>
            <div className="mp-5">
                <p>
                    {`Email : ${record.Paypal.payer.email_address}`}
                </p>
            </div>
            <div className="mp-5">
                <p>
                    {`ID : ${record.Paypal.payer.payer_id}`}
                </p>
            </div>

            <div className="mp-5">
                <p>
                    {`Description : ${record.Paypal.description}`}
                </p>
            </div>
            <div className="mp-5">
                <p>
                    {`ProductName : ${record.Paypal.productName}`}
                </p>
            </div>
            <div className="mp-5">
                <p>
                    {`Details : ${record.Paypal.details}`}
                </p>
            </div>
            <div className="col-lg-2">
                <p>
                    {`Amount : ${record.Paypal.amount}`}
                </p>
            </div>
            <div className="col-lg-2">
                <p>
                    {`HandlingFee : ${record.Paypal.handlingFee}`}
                </p>
            </div>
        </>
    )
}