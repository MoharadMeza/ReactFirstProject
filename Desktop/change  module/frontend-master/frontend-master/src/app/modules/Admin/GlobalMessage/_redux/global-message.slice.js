import { createSlice } from "@reduxjs/toolkit";

const initialModuleState = {
  listLoading: false,
  actionsLoading: false,
  totalCount: 0,
  entities: [],
  moduleForEdit: undefined,
  lastError: null
};
export const callTypes = {
  list: "list",
  action: "action"
};

export const moduleSlice = createSlice({
  name: "globalMessages" /* change module */,
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
    // findRecords
    recordsFetched: (state, action) => {
      const { totalCount, entities } = action.payload;
      state.listLoading = false;
      state.error = null;
      state.entities = entities;
      state.totalCount = totalCount;
    },
    // createRecord
    recordCreated: (state, action) => {
      state.actionsLoading = false;
      state.error = null;
      state.entities.push(action.payload);
    },
    // updateRecord
    recordUpdated: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.map(entity => {
        if (entity.id === action.payload.record.id) {
          return action.payload.record;
        }
        return entity;
      });
    },
    // deleteRecord
    recordDeleted: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.filter(el => el.id !== action.payload.id);
    },
    // deleteRecords
    recordsDeleted: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.filter(
        el => !action.payload.ids.includes(el.id)
      );
    }
  }
});
