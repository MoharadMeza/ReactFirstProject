export const StatusCssClasses = ["success", "danger", "danger", "primary"];
export const StatusTitles = ["confirm", "reject", "remove", "pending"];
export const defaultSorted = [{ dataField: "createdAt", order: "desc" }];
export const sizePerPageList = [
  { text: "3", value: 3 },
  { text: "5", value: 5 },
  { text: "10", value: 10 }
];
export const initialFilter = {
  filter: {
    status: ""
  },
  sortOrder: "desc", // asc||desc
  sortField: "createdAt",
  pageNumber: 1,
  pageSize: 5
};
