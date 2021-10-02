export const StatusCssClasses = ["success", "warning", "danger"];
export const StatusUsers = ["active", "deActive", "removed"];
export const AccountCssClasses = ["success", "warning"];
export const AccountStatusUsers = ["verified", "unverified"];
export const RoleCssClasses = ["primary", "secondary"];
export const RoleUsers = ["admin", "user"];

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

export const usersStatusForFilter = [
  { value: "", label: "All" },
  { value: "active", label: "active" },
  { value: "deActive", label: "deActive" },
  { value: "removed", label: "removed" }
];
export const usersStatus = [
  { value: "active", label: "active" },
  { value: "deActive", label: "deActive" },
  { value: "removed", label: "removed" }
];

export const usersRoleForFilter = [
  { value: "", label: "All" },
  { value: "admin", label: "Admin" },
  { value: "user", label: "User" }
];
export const usersRole = [
  { value: "admin", label: "Admin" },
  { value: "user", label: "User" }
];

export const usersAccountStatusForFilter = [
  { value: "", label: "All" },
  { value: "verified", label: "Verified" },
  { value: "unverified", label: "Unverified" }
];
export const usersAccountStatus = [
  { value: "verified", label: "Verified" },
  { value: "unverified", label: "Unverified" }
];
