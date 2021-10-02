export const StatusCssClasses = ["success", "warning", "danger"];
export const StatusTitles = ["APPROVED", "PENDING", "DECLINED"];
export const defaultSorted = [{ dataField: "createdAt", order: "desc" }];
export const sizePerPageList = [
  { text: "3", value: 3 },
  { text: "5", value: 5 },
  { text: "10", value: 10 }
];
export const initialFilter = {
  filter: {
    charged: "",
    status: ""
  },
  sortOrder: "desc", // asc||desc
  sortField: "createdAt",
  pageNumber: 1,
  pageSize: 5
};

export const paymentStatus = [
  { value: "", label: "All" },
  { value: "APPROVED", label: "APPROVED" },
  { value: "PENDING", label: "PENDING" },
  { value: "DECLINED", label: "DECLINED" }
];
