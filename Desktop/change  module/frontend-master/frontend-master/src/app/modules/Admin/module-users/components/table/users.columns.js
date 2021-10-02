import * as columnFormatters from "./column-formatters";
import { sortCaret } from "../../../../../../_metronic/_helpers";

const columns = (UIProps, entities) => {
  const cols = [
    {
      dataField: "profile.name",
      text: "Name",
      sort: true,
      sortCaret: sortCaret
    },
    {
      dataField: "email",
      text: "Email",
      sort: true,
      sortCaret: sortCaret
    },

    {
      dataField: "role",
      text: "Role",
      sort: true,
      sortCaret: sortCaret,
      formatter: columnFormatters.RoleColumnFormatter
    },

    {
      dataField: "kyc.kycStatus",
      text: "Kyc Status",
      sort: true,
      sortCaret: sortCaret,
      formatter: columnFormatters.KycStatusColumnFormatter
    },

    {
      dataField: "profile.telephoneNumber",
      text: "telephone number",
      sort: true,
      sortCaret: sortCaret,
      formatter: columnFormatters.TelephoneNumberColumnFormatter,
      formatExtraData: { entities: entities }
    },

    {
      dataField: "status",
      text: "Status",
      sort: true,
      sortCaret: sortCaret,
      formatter: columnFormatters.StatusColumnFormatter
    },

    {
      dataField: "accountStatus",
      text: "account status",
      sort: true,
      sortCaret: sortCaret,
      formatter: columnFormatters.AccountColumnFormatter
    },

    {
      dataField: "action",
      text: "Actions",
      formatter: columnFormatters.ActionsColumnFormatter,
      formatExtraData: {
        openEditPage: UIProps.openEditPage,
        openDeleteRecordDialog: UIProps.openDeleteRecordDialog
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
