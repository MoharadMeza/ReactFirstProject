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
    type: "",
    status: ""
  },
  sortOrder: "desc", // asc||desc
  sortField: "createdAt",
  pageNumber: 1,
  pageSize: 5
};
