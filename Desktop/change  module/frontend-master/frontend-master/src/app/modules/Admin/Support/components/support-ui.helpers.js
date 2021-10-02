export const StatusCssClasses = ["success", "warning", "danger"];
export const SupportStatus = ["active", "read", "remove"];
export const TypeCssClasses = ["success", "danger", "warning", "info"];
export const SupportType = [
  "installation",
  "audioQuality",
  "equipmentDoesNotWork",
  "generalQuestion",
  "billing"
];
export const defaultSorted = [{ dataField: "createdAt", order: "desc" }];
export const sizePerPageList = [
  { text: "3", value: 3 },
  { text: "5", value: 5 },
  { text: "10", value: 10 }
];
export const initialFilter = {
  filter: {
    type: "",
    status: ""
  },
  sortOrder: "desc", // asc||desc
  sortField: "createdAt",
  pageNumber: 1,
  pageSize: 5
};

export const supportType = [
  { label: "All", value: "" },
  { label: "installation", value: "installation" },
  { label: "audioQuality", value: "audioQuality" },
  { label: "equipmentDoesNotWork", value: "equipmentDoesNotWork" },
  { label: "generalQuestion", value: "generalQuestion" },
  { label: "billing", value: "billing" }
];

export const supportStatus = [
  { label: "All", value: "" },
  { label: "active", value: "active" },
  { label: "read", value: "read" },
  { label: "remove", value: "remove" }
];

export const adminSupportStatus = [
  { label: "active", value: "active" },
  { label: "read", value: "read" },
  { label: "remove", value: "remove" }
];
