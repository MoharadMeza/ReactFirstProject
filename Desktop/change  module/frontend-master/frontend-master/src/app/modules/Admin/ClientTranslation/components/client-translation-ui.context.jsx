import React, { createContext, useContext, useState, useCallback } from "react";
import { isEqual, isFunction } from "lodash";
/* change module */
import { initialFilter } from "./client-translation-ui.helpers";
/* change module */
const ClientTranslationUIContext = createContext();
/* change module */
export function useUIContext() {
  return useContext(ClientTranslationUIContext);
}
/* change module */
export const ClientTranslationUIConsumer = ClientTranslationUIContext.Consumer;
/* change module */
export function ClientTranslationUIProvider({ moduleUIEvents, children }) {
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
    <ClientTranslationUIContext.Provider value={value}>
      {children}
    </ClientTranslationUIContext.Provider>
  );
}
