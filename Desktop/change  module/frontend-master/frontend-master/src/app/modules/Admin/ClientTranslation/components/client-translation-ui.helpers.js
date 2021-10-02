import i18next from "i18next";
export const StatusCssClasses = ["success", "warning", "danger"];
export const StatusTitles = ["active", "deActive", "remove"];
export const TypeCssClasses = ["success", "danger", "warning", "info"];
export const TypeTitles = ["success", "danger", "warning", "info"];
export const defaultSorted = [{ dataField: "createdAt", order: "desc" }];
export const sizePerPageList = [
  { text: "3", value: 3 },
  { text: "5", value: 5 },
  { text: "10", value: 10 }
];
export const initialFilter = {
  filter: {
    platform: "",
    status: "",
    nameSpaces: ""
  },
  sortOrder: "desc", // asc||desc
  sortField: "createdAt",
  pageNumber: 1,
  pageSize: 5
};

const statusPrefixOptions = [
  {
    value: "",
    // label: i18next.t("messages.DEFAULT.ALL"),
    label: "All"
  },
  {
    value: "draft",
    // label: i18next.t("noun.CLIENT_TRANSLATION.STATUS.DRAFT"),
    label: "Draft"
  },
  {
    value: "published",
    // label: i18next.t("noun.CLIENT_TRANSLATION.STATUS.PUBLISHED"),
    label: "Published"
  },
  {
    value: "removed",
    // label: i18next.t("noun.CLIENT_TRANSLATION.STATUS.REMOVED"),
    label: "Removed"
  }
];
const platformPrefixOptions = [
  {
    value: "",
    // label: i18next.t("messages.DEFAULT.ALL")
    label: "All"
  },
  {
    value: "mobile",
    // label: i18next.t("noun.CLIENT_TRANSLATION.PLATFORM.MOBILE")
    label: "Mobile"
  },
  {
    value: "adminPanel",
    // label: i18next.t("noun.CLIENT_TRANSLATION.PLATFORM.ADMIN_PANEL")
    label: "Admin Panel"
  },
  {
    value: "webApp",
    // label: i18next.t("noun.CLIENT_TRANSLATION.PLATFORM.WEB_APP")
    label: "Web App"
  }
];

const directionPrefixOptions = [
  {
    value: "",
    // label: i18next.t("messages.DEFAULT.ALL")
    label: "All"
  },
  {
    value: "rtl",
    // label: i18next.t("noun.CLIENT_TRANSLATION.DIRECTION.RTL")
    label: "RTL"
  },
  {
    value: "ltr",
    // label: i18next.t("noun.CLIENT_TRANSLATION.DIRECTION.LTR")
    label: "LTR"
  }
];

const defaultPrefixOptions = [
  {
    value: "",
    // label: i18next.t("messages.DEFAULT.ALL")
    label: "All"
  },
  {
    value: "true",
    // label: i18next.t("noun.CLIENT_TRANSLATION.ISDEFAULT.TRUE")
    label: "True"
  },
  {
    value: "false",
    // label: i18next.t("noun.CLIENT_TRANSLATION.ISDEFAULT.FALSE")
    label: "False"
  }
];

const fieldsIds = {
  name: i18next.t("noun.CLIENT_TRANSLATION.NAME"),
  language: i18next.t("noun.CLIENT_TRANSLATION.LANGUAGE_CODE")
};
const searchByPrefixOptions = [
  { value: "name", label: fieldsIds.name },
  { value: "language", label: fieldsIds.language }
];

const nameSpacePrefixOptions = [
  {
    value: "messages",
    // label: i18next.t("noun.CLIENT_TRANSLATION.NAMESPACE.MESSAGES")
    label: "Messages"
  },
  {
    value: "errors",
    // label: i18next.t("noun.CLIENT_TRANSLATION.NAMESPACE.ERRORS")
    label: "Errors"
  },
  {
    value: "labels",
    // label: i18next.t("noun.CLIENT_TRANSLATION.NAMESPACE.NOUN")
    label: "Labels"
  },
  {
    value: "placeholders",
    // label: i18next.t("noun.CLIENT_TRANSLATION.NAMESPACE.NOUN")
    label: "PlaceHolders"
  },
  {
    value: "texts",
    // label: i18next.t("noun.CLIENT_TRANSLATION.NAMESPACE.NOUN")
    label: "Texts"
  },
  {
    value: "titles",
    // label: i18next.t("noun.CLIENT_TRANSLATION.NAMESPACE.NOUN")
    label: "Titles"
  }
];

const generateEnum = array => {
  return array.splice(0, 1);
};

export {
  defaultPrefixOptions,
  directionPrefixOptions,
  statusPrefixOptions,
  platformPrefixOptions,
  fieldsIds,
  nameSpacePrefixOptions,
  searchByPrefixOptions,
  generateEnum
};
