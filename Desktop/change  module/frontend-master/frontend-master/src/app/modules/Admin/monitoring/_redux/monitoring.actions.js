import * as requestFromServer from "./monitoring.crud";
import { moduleSlice, callTypes } from "./monitoring.slice";
import { toast } from "react-toastify";
import { GenerateArray } from "../generate-array";

const { actions } = moduleSlice;

export const fetchRecords = queryParams => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .findRecords(queryParams)
    .then(response => {
      const dataWithId = GenerateArray(response.data);
      dispatch(actions.recordsFetched({ totalCount: 6, entities: dataWithId }));
    })
    .catch(error => {
      error.clientMessage = "Can't find data";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};

export const fetchRecord = logsObject => dispatch => {
  if (!logsObject.system) {
    return dispatch(actions.recordFetched({ moduleForEdit: undefined }));
  }

  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getLogsData(logsObject)
    .then(response => {
      const data = response.data;
      dispatch(actions.recordFetched({ moduleForEdit: data }));
    })
    .catch(error => {
      error.clientMessage = "Can't find data";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteRecord = id => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteRecord(id)
    .then(response => {
      dispatch(actions.recordDeleted({ id }));
    })
    .catch(error => {
      error.clientMessage = "Can't delete data";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const createRecord = recordForCreation => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .createRecord(recordForCreation)
    .then(response => {
      const { data } = response.data;
      dispatch(actions.recordCreated({ ...data, id: data._id }));

      toast.success("succes");
    })
    .catch(error => {
      error.clientMessage = "Can't create data";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateRecord = record => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateRecord(record)
    .then(() => {
      dispatch(actions.recordUpdated({ record }));
    })
    .catch(error => {
      error.clientMessage = "Can't update data";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteRecords = ids => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteRecords(ids)
    .then(() => {
      dispatch(actions.recordsDeleted({ ids }));
    })
    .catch(error => {
      error.clientMessage = "Can't delete data";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
