import * as requestFromServer from "./schedule.crud";
import { moduleSlice, callTypes } from "./schedule.slice";
import MapLodash from "lodash/map";
import {
  errorHandling,
  successHandling
} from "../../../../helpers/api-message-handling";
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
      errorHandling(error);
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
      errorHandling(error);
    });
};

export const deleteRecord = id => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteRecord(id)
    .then(response => {
      dispatch(actions.recordDeleted({ id }));
      successHandling("delete");
    })
    .catch(error => {
      error.clientMessage = "Can't delete data";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
      errorHandling(error);
    });
};

export const createRecord = recordForCreation => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .createRecord(recordForCreation)
    .then(response => {
      const { data } = response.data;
      dispatch(actions.recordCreated({ ...data, id: data._id }));

      successHandling("create");
    })
    .catch(error => {
      error.clientMessage = "Can't create data";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
      errorHandling(error);
    });
};

export const updateRecord = record => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateRecord(record)
    .then(() => {
      dispatch(actions.recordUpdated({ record }));
      successHandling("update");
    })
    .catch(error => {
      error.clientMessage = "Can't update data";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
      errorHandling(error);
    });
};

export const deleteRecords = ids => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteRecords(ids)
    .then(() => {
      dispatch(actions.recordsDeleted({ ids }));
      successHandling("delete");
    })
    .catch(error => {
      error.clientMessage = "Can't delete data";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
      errorHandling(error);
    });
};
