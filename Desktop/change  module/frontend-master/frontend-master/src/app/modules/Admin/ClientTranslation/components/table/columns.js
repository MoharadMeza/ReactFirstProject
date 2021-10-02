import * as columnFormatters from "./column-formatters";
import { sortCaret } from "../../../../../../_metronic/_helpers";

export const columns = entities => {
  const cols = [
    {
      dataField: "name",
      // text: t("noun.CLIENT_TRANSLATION.NAME"),
      text: "Name",
      formatter: (cell, row, rowIndex) =>
        isLtrDir ? cell : toFarsiNumber(cell),
      headerAlign: "center",
      align: "center",
      sort: true,
      sortCaret: sortCaret,
      headerSortingClasses
    },

    {
      dataField: "language",
      // text: t("noun.CLIENT_TRANSLATION.LANGUAGE_CODE"),
      text: "Language",
      headerAlign: "center",
      align: "center",
      sort: true,
      formatter: (dataField, rowIndex, row) => {
        return (
          <>
            {dataField}
            <span className="svg-icon svg-icon-md mx-3 ">
              <SVG
                className="rounded-circle"
                src={toAbsoluteUrl(
                  `/media/svg/flags/${entities.languages[row].flag}`
                )}
              />
            </span>
          </>
        );
      },
      sortCaret: sortCaret,
      headerSortingClasses
    },
    {
      dataField: "isDefault",
      // text: t("noun.CLIENT_TRANSLATE.ISDEFAULT"),
      text: "isDefault",
      formatter: (cell, row, rowIndex) =>
        isLtrDir ? cell : toFarsiNumber(cell),
      headerAlign: "center",
      align: "center",
      sort: true,
      sortCaret: sortCaret,
      headerSortingClasses
    },
    {
      dataField: "platform",
      // text: t("noun.CLIENT_TRANSLATE.PLATFORM"),
      text: "Platform",
      headerAlign: "center",
      align: "center",
      sort: true,
      sortCaret: sortCaret,
      headerSortingClasses
    },
    {
      dataField: "status",
      // text: t("messages.USERS.STATUS"),
      text: "Status",
      headerAlign: "center",
      align: "center",
      sort: true,
      sortCaret: sortCaret,
      headerSortingClasses
    },
    {
      dataField: "action",
      // text: t("messages.USERS.ACTIONS"),
      text: "action",
      formatter: (...args) =>
        ActionsColumnFormatterForLang(entities.languages, ...args),
      formatExtraData: {
        openEditClientLangsKey: clientLangUIProps.openEditClientLangsKey,
        openEditClientLangModal: clientLangUIProps.openEditClientLangModal,
        openDeleteClientLangModal: clientLangUIProps.openDeleteClientLangModal
      },
      classes: "text-right pr-0",
      headerClasses: "text-right pr-3",
      style: {
        minWidth: "100px"
      }
    }
  ];
};
