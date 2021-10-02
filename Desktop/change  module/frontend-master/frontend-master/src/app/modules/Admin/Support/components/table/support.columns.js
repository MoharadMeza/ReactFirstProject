import * as columnFormatters from "./column-formatters";
import { sortCaret } from "../../../../../../_metronic/_helpers";

const columns = (UIProps, entities) => {
  const cols = [
    {
      dataField: "email",
      text: "Email",
      sort: true,
      sortCaret: sortCaret
    },
    {
      dataField: "contactPhone",
      text: "contact Phone",
      sort: true,
      sortCaret: sortCaret,
      formatter: columnFormatters.TelephoneNumberColumnFormatter,
      formatExtraData: { entities: entities }
    },
    {
      dataField: "typeOfSupport",
      text: "type",
      sort: true,
      sortCaret: sortCaret
    },
    {
      dataField: "status",
      text: "status",
      sort: true,
      sortCaret: sortCaret,
      formatter: columnFormatters.StatusColumnFormatter
    },
    {
      dataField: "message",
      text: "Message",
      sort: true,
      sortCaret: sortCaret,
      formatter: columnFormatters.MessageColumnFormatter
    },
    {
      dataField: "createdAt",
      text: "Created At",
      sort: true,
      sortCaret: sortCaret,
      formatter: columnFormatters.DateColumnFormatter
    },
    {
      dataField: "action",
      text: "Actions",
      formatter: columnFormatters.ActionsColumnFormatter,
      formatExtraData: {
        openEditPage: UIProps.openEditPage,
        openDeleteRecordDialog: UIProps.openDeleteRecordDialog,
        openMarkAsReadDialog: UIProps.openMarkAsReadDialog
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
