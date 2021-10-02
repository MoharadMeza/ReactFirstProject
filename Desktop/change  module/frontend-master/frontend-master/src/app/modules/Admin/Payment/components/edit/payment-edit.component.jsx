/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../../../../_metronic/_partials/controls";
import { useSubheader } from "../../../../../../_metronic/layout";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
/* change module */
import * as actions from "../../_redux/payment.actions";
import { ModuleEditForm } from "./payment-detail-form.component";

/* change module */
// const initRecord = {
//   Paypal: {
//     links: {
//       self: "https://api.sandbox.paypal.com/v2/checkout/orders/8D219382NN751980P",
//       approve: "https://www.sandbox.paypal.com/checkoutnow?token=8D219382NN751980P",
//       update: "https://api.sandbox.paypal.com/v2/checkout/orders/8D219382NN751980P",
//       capture: "https://api.sandbox.paypal.com/v2/checkout/orders/8D219382NN751980P/capture"
//     },
//     payer: {
//       name: {
//         given_name: "John",
//         surname: "Doe"
//       },
//       address: {
//         country_code: "US"
//       },
//       email_address: "sb-skb3y6411259@personal.example.com",
//       payer_id: "YXNQ2DJL3V5ZN"
//     },
//     description: "chargingUserAccount",
//     productName: "Charging",
//     details: "Payer has not yet approved the Order for payment. Please redirect the payer to the 'rel':'approve' url returned as part of the HATEOAS links within the Create Order call or provide a valid payment_source in the request.",
//     amount: 2,
//     handlingFee: 0.6
//   },
//   finalizationIp: "::1",
//   status: "COMPLETED",
//   _id: "614e125ec35fa20cacd4d266",
//   orderId: "8D219382NN751980P",
//   amount: 2.6,
//   currency: "usd",
//   initiationIp: "::ffff:127.0.0.1",
//   paymentType: "Paypal",
//   hasSuccessUrlPage: true,
//   payURL: "https://www.sandbox.paypal.com/checkoutnow?token=8D219382NN751980P",
//   createdAt: "2021-09-24T18:01:02.314Z",
//   updatedAt: "2021-09-24T18:02:10.917Z",
//   __v: 0
// }

const openNode = {
  // _id: ObjectId("614e0f34c35fa20cacd4d265"),
  OpenNode: {
    lightning_invoice: {
      expires_at: 1632506400,
      payreq: "lntb11570n1ps5ur7fpp5mlmaws93ld9u8aj3q5rga3p8w6zkh4yvyu8uxjhjlwa0fpznep0sdqlvd5xzun8d9hxw4tnv4eyzcmrda6kuaqcqzpgxqzjhsp5slv4cdkzuc6rgd9zsnm5z6wkds6t4n0v3c5340vsz0wpnfceunts9qyyssqw52c332wcvk5wau30s0svy5v6x4xprsf7clpm7y344retkusy3cnucrqpjd9pdqgrtdx229wjcxaqyh25033t2wm0uh8uzv4nnz64eqqctll6v"
    },
    chain_invoice: {
      address: "2N4j18cguvYZcK8TUmronmZdkw6pkYnL2DL"
    },
    description: "chargingUserAccount",
    order_id: null,
    source_fiat_value: 20300,
    fiat_value: "0.41",
    auto_settle: false,
    notif_email: null,
    amount: 20000,
    handlingFee: 300,
    uri: "bitcoin:2N4j18cguvYZcK8TUmronmZdkw6pkYnL2DL?amount=0.00001157&label=chargingUserAccount&lightning=lntb11570n1ps5ur7fpp5mlmaws93ld9u8aj3q5rga3p8w6zkh4yvyu8uxjhjlwa0fpznep0sdqlvd5xzun8d9hxw4tnv4eyzcmrda6kuaqcqzpgxqzjhsp5slv4cdkzuc6rgd9zsnm5z6wkds6t4n0v3c5340vsz0wpnfceunts9qyyssqw52c332wcvk5wau30s0svy5v6x4xprsf7clpm7y344retkusy3cnucrqpjd9pdqgrtdx229wjcxaqyh25033t2wm0uh8uzv4nnz64eqqctll6v",
    approveLink: "https://dev-checkout.opennode.com/f1b0cc17-0434-4ec4-9592-c4e6b5bb0d86"
  },
  finalizationIp: "::ffff:127.0.0.1",
  status: "paid",
  orderId: "f1b0cc17-0434-4ec4-9592-c4e6b5bb0d86",
  currency: "IRR",
  initiationIp: "::ffff:127.0.0.1",
  paymentType: "OpenNode",
  amount: 20300,
  hasSuccessUrlPage: false,
  payURL: "https://dev-checkout.opennode.com/f1b0cc17-0434-4ec4-9592-c4e6b5bb0d86",
  // createdAt: ISODate("2021-09-24T17:47:32.474Z"),
  // updatedAt: ISODate("2021-09-24T18:15:05.870Z"),
  __v: 0
}

export function ModuleEdit({
  history,
  match: {
    params: { id },
  },
}) {
  // Subheader
  const suhbeader = useSubheader();

  // Tabs
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  // const layoutDispatch = useContext(LayoutContext.Dispatch);
  const { actionsLoading, moduleForEdit } = useSelector(
    (state) => ({
      actionsLoading: state.paymentAdmin.actionsLoading /* change module */,
      moduleForEdit: state.paymentAdmin.moduleForEdit /* change module */,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(actions.fetchRecord(id));
  }, [id, dispatch]);

  useEffect(() => {
    let _title = id ? "" : "New Global Message";
    if (moduleForEdit && id) {
      _title = `Edit Global Message '${moduleForEdit.title}'`;
    }

    setTitle(_title);
    suhbeader.setTitle(_title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moduleForEdit, id]);

  const saveRecord = (values) => {
    if (!id) {
      dispatch(actions.createRecord(values)).then(() => backToModuleList());
    } else {
      dispatch(actions.updateRecord(values)).then(() => backToModuleList());
    }
  };

  const btnRef = useRef();

  /* change module */
  const backToModuleList = () => {
    history.push(`/admin/payment`);
  };

  return (
    <Card>
      {actionsLoading && <ModalProgressBar />}
      <CardHeader title={title}>
        <CardHeaderToolbar>
          <button
            type="button"
            onClick={backToModuleList}
            className="btn btn-light"
          >
            <i className="fa fa-arrow-left"></i>
            Back
          </button>

        </CardHeaderToolbar>
      </CardHeader>

      <CardBody>

        <div className="mt-5">
          <ModuleEditForm
            actionsLoading={actionsLoading}
            record={openNode}
            btnRef={btnRef}
            saveRecord={saveRecord}
          />
        </div>
      </CardBody>
    </Card>
  );
}
