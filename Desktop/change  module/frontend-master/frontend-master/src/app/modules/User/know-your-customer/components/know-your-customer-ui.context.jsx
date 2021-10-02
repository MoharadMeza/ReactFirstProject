import React, { createContext, useContext, useState, useCallback } from "react";
import { isEqual, isFunction } from "lodash";
/* change module */
import { initialFilter } from "./know-your-customer-ui.helpers";
/* change module */
const KycUIContext = createContext();
/* change module */
export function useUIContext() {
  return useContext(KycUIContext);
}
/* change module */
export const KycUIConsumer = KycUIContext.Consumer;
/* change module */
export function KycUIProvider({ moduleUIEvents, children }) {
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
    <KycUIContext.Provider value={value}>
      {children}
    </KycUIContext.Provider>
  );
}
