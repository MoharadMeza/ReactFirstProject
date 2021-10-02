import { createSlice } from "@reduxjs/toolkit";
import MapLodash from "lodash/map";

const initialModuleState = {
  listLoading: false,
  actionsLoading: false,
  totalCount: 0,
  entities: null,
  moduleForEdit: undefined,
  lastError: null
};
export const callTypes = {
  list: "list",
  action: "action"
};

export const moduleSlice = createSlice({
  name: " paymentUser" /* change module */,
  initialState: initialModuleState,
  reducers: {
    catchError: (state, action) => {
      state.error = `${action.type}: ${action.payload.error}`;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = false;
      } else {
        state.actionsLoading = false;
      }
    },
    startCall: (state, action) => {
      state.error = null;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = true;
      } else {
        state.actionsLoading = true;
      }
    },
    // getRecordById
    recordFetched: (state, action) => {
      state.actionsLoading = false;
      state.moduleForEdit = action.payload.moduleForEdit;
      state.error = null;
    },
    recordFetchedCaptureCharge: (state, action) => {
      const { record } = action.payload;
      state.actionsLoading = false;
      state.entities = MapLodash(state.entities, item => {
        if (item.id === record.id) return record;
        else return item;
      });
      state.error = null;
    },
    // findRecords
    recordsFetched: (state, action) => {
      const { totalCount, entities } = action.payload;
      state.listLoading = false;
      state.error = null;
      state.entities = entities;
      state.totalCount = totalCount;
    }
  }
});
