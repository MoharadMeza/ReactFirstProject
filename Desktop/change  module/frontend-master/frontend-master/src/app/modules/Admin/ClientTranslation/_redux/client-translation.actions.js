import * as requestFromServer from "./client-translation.crud";
import { moduleSlice, callTypes } from "./client-translation.slice";
import MapLodash from "lodash/map";
import { toast } from "react-toastify";

const { actions } = moduleSlice;

export const fetchRecords = queryParams => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .findRecords(queryParams)
    .then(response => {
      const { total, data } = response.data;
      const dataWithId = MapLodash(data, row => ({
        ...row,
        id: row._id
      }));
      dispatch(
        actions.recordsFetched({ totalCount: total, entities: dataWithId })
      );
    })
    .catch(error => {
      error.clientMessage = "Can't find data";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};

export const fetchRecord = id => dispatch => {
  if (!id) {
    return dispatch(actions.recordFetched({ moduleForEdit: undefined }));
  }

  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getRecordById(id)
    .then(response => {
      const data = response.data.data;
      dispatch(
        actions.recordFetched({ moduleForEdit: { ...data, id: data._id } })
      );
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
