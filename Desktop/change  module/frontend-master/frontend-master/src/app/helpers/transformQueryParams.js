import ForLodash from "lodash/forEach";

const transformQueryParams = queryParams => {
  const search = {};
  const exactSearchFields = [
    "type",
    "scheduleStatus",
    "typeOfDevice",
    "accountStatus",
    "status",
    "role",
    "typeOfSupport",
    "currency",
    "charged",
    "rate",
    "amount",
    "handlingFee",
    "profit",
    "enabled",
    "createdAt",
    "updatedAt"
  ];

  ForLodash(queryParams.filter, (value, key) => {
    if (value !== "") {
      if (exactSearchFields.includes(key)) {
        search[key] = value;
      } else {
        search[`search[${key}]`] = value;
      }
    }
  });

  return {
    page: queryParams.pageNumber,
    limit: queryParams.pageSize,
    ["sort[" + queryParams.sortField + "]"]: queryParams.sortOrder,
    ...search
  };
};

export { transformQueryParams };
