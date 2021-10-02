import * as requestFromServer from "./payment.crud";
import { moduleSlice, callTypes } from "./payment.slice";
import MapLodash from "lodash/map";
import { errorHandling } from "../../../../helpers/api-message-handling";
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

export const fetchRecordCaptureCharge = id => dispatch => {
  return requestFromServer
    .getRecordByIdCaptureCharge(id)
    .then(response => {
      const data = response.data.data;
      dispatch(
        actions.recordFetchedCaptureCharge({
          record: { ...data, id: data._id }
        })
      );
    })
    .catch(error => {
      error.clientMessage = "Can't find data";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
      errorHandling(error);
    });
};
