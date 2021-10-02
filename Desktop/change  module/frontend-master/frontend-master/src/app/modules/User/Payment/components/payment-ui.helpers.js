export const ChargedCssClasses = ["warning", "success"];
export const ChargedTitles = [false, true];
export const StatusCssClasses = ["success", "danger", "warning"];
export const StatusTitles = ["PENDING", "APPROVED", "DECLINED"];
export const defaultSorted = [{ dataField: "createdAt", order: "desc" }];
export const sizePerPageList = [
  { text: "3", value: 3 },
  { text: "5", value: 5 },
  { text: "10", value: 10 }
];
export const initialFilter = {
  filter: {
    callType: ""
  },
  sortOrder: "desc", // asc||desc
  sortField: "createdAt",
  pageNumber: 1,
  pageSize: 5
};
