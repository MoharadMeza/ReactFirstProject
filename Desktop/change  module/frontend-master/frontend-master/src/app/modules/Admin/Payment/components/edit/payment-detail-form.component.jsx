// Form is based on Formik
// Data validation is based on Yup
// Please, be familiar with article first:
// https://hackernoon.com/react-form-validation-with-formik-and-yup-8b76bda62e10
import React from "react";
import { OpenNode } from "./providers/open-node.providers.component";
import { PayPal } from "./providers/paypal.providers.component";
/* change module */

// Validation schema
/* change module */
export function ModuleEditForm({ record, btnRef, saveRecord }) {

  return (
    <>
      {
        record && record.Paypal ?
          <PayPal record={record} />
          : <OpenNode record={record} />
      }

      <div className="mb-5">
        <p>
          {`FinalizationIp : ${record.finalizationIp}`}
        </p>
      </div>
      <div className="mb-5">
        <p>
          {`Status : ${record.status}`}
        </p>
      </div>
      <div className="mb-5">
        <p>
          {`OrderId : ${record.orderId}`}
        </p>
      </div>
      <div className="mb-5">
        <p>
          {`Amount : ${record.amount}`}
        </p>
      </div>
      <div className="mb-5">
        <p>
          {`Currency : ${record.currency}`}
        </p>
      </div>
      <div className="mb-5">
        <p>
          {`InitiationIP : ${record.initiationIP}`}
        </p>
      </div>
      <div className="mb-5">
        <p>
          {`PaymentType : ${record.paymentType}`}
        </p>
      </div>
      <div className="mb-5">
        <p>
          {`HasSuccessUrlPage : ${record.hasSuccessUrlPage}`}
        </p>
      </div>
      <div className="mb-5">
        <p>
          {`PayUrl : ${record.payUrl}`}
        </p>
      </div>
    </>
  )
}
