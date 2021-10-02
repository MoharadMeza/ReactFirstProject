import React, { createContext, useContext, useState, useCallback } from "react";
import { isEqual, isFunction } from "lodash";
/* change module */
import { initialFilter } from "./black-list-ip-ui.helpers";
/* change module */
const blackListIpUIContext = createContext();
/* change module */
export function useUIContext() {
  return useContext(blackListIpUIContext);
}
/* change module */
export const blackListIpUIConsumer = blackListIpUIContext.Consumer;
/* change module */
export function BlackListIpUIProvider({ moduleUIEvents, children }) {
  const [queryParams, setQueryParamsBase] = useState(initialFilter);
  const [ids, setIds] = useState([]);
  const setQueryParams = useCallback(nextQueryParams => {
    setQueryParamsBase(prevQueryParams => {
      if (isFunction(nextQueryParams)) {
        nextQueryParams = nextQueryParams(prevQueryParams);
      }

      if (isEqual(prevQueryParams, nextQueryParams)) {
        return prevQueryParams;
      }

      return nextQueryParams;
    });
  }, []);

  const value = {
    queryParams,
    setQueryParamsBase,
    ids,
    setIds,
    setQueryParams,
    newButtonClick: moduleUIEvents.newButtonClick,
    openEditPage: moduleUIEvents.openEditPage,
    openDeleteRecordDialog: moduleUIEvents.openDeleteRecordDialog,
    openDeleteRecordsDialog: moduleUIEvents.openDeleteRecordsDialog,
  };

  /* change module */
  return (
    <blackListIpUIContext.Provider value={value}>
      {children}
    </blackListIpUIContext.Provider>
  );
}
