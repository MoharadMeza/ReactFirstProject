import * as columnFormatters from "./column-formatters";
import { sortCaret } from "../../../../../../_metronic/_helpers";

const columns = (UIProps, entities) => {
  const cols = [
    {
      dataField: "_availablePaymentId.name",
      text: "Name",
      sort: true,
      sortCaret: sortCaret
    },

    {
      dataField: "_availablePaymentId.paymentType",
      text: "peyment type",
      sort: true,
      sortCaret: sortCaret
    },

    {
      dataField: "charged",
      text: "Charged",
      sort: true,
      sortCaret: sortCaret
    },

    {
      dataField: "amount",
      text: "Amount",
      sort: true,
      sortCaret: sortCaret
    },

    {
      dataField: "currency",
      text: "Curreny",
      sort: true,
      sortCaret: sortCaret
    },

    {
      dataField: "status",
      text: "Status",
      sort: true,
      sortCaret: sortCaret,
      formatter: columnFormatters.StatusColumnFormatter
    },

    {
      dataField: "action",
      text: "Actions",
      formatter: columnFormatters.ActionsColumnFormatter,
      formatExtraData: {
        openEditPage: UIProps.openEditPage
      },
      classes: "text-right pr-0",
      headerClasses: "text-right pr-3",
      style: {
        minWidth: "100px"
      }
    }
  ];
  return cols;
};

export { columns };
