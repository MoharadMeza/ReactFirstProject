import React, { createContext, useContext, useState, useCallback } from "react";
import { isEqual, isFunction } from "lodash";
/* change module */
import { initialFilter } from "./payment-ui.helpers";
/* change module */
const PayemntUIContext = createContext();
/* change module */
export function useUIContext() {
  return useContext(PayemntUIContext);
}
/* change module */
export const PayemntUIConsumer = PayemntUIContext.Consumer;
/* change module */
export function PayemntProvider({moduleUIEvents,children}) {
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
    // openRefreshPage:moduleUIEvents.openRefreshPage

  };
  /* change module */
  return (
    <PayemntUIContext.Provider value={value}>
      {children}
    </PayemntUIContext.Provider>
  );
}
