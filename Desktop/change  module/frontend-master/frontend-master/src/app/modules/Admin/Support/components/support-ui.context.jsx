import React, { createContext, useContext, useState, useCallback } from "react";
import { isEqual, isFunction } from "lodash";
/* change module */
import { initialFilter } from "./support-ui.helpers";
/* change module */
const SupportsUIContext = createContext();
/* change module */
export function useUIContext() {
  return useContext(SupportsUIContext);
}
/* change module */
export const SupportsUIConsumer = SupportsUIContext.Consumer;
/* change module */
export function SupportsUIProvider({ moduleUIEvents, children }) {
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
    openMarkAsReadDialog : moduleUIEvents.openMarkAsReadDialog
  };

  /* change module */
  return (
    <SupportsUIContext.Provider value={value}>
      {children}
    </SupportsUIContext.Provider>
  );
}
