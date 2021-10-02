import React, { createContext, useContext, useState, useCallback } from "react";
import { isEqual, isFunction } from "lodash";
/* change module */
import { initialFilter } from "./email-ui.helpers";
/* change module */
const EmailUIContext = createContext();
/* change module */
export function useUIContext() {
  return useContext(EmailUIContext);
}
/* change module */
export const EmailUIConsumer = EmailUIContext.Consumer;
/* change module */
export function EmailUIProvider({ moduleUIEvents, children }) {
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
    openViewPage: moduleUIEvents.openViewPage,
  };

  /* change module */
  return (
    <EmailUIContext.Provider value={value}>
      {children}
    </EmailUIContext.Provider>
  );
}
