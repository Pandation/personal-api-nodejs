import { createSlice } from "@reduxjs/toolkit";
import createGenericReducer from "../../generics/createGenericReducer";

const type = "sendingConfigs";
const url = "/api/nailedIt";

const initialState = {
  delete: {
    fetching: false,
    loaded: false,
    error: "",
  },
  collection: {
    items: [],
    error: "",
    fetching: false,
    loaded: false,
    lists: {
      companiesList: [],
      processesList: [],
      error: false,
    },
  },
};

const extraReducers = createGenericReducer(type, url);

const slice = createSlice({
  name: type,
  initialState,
  extraReducers: {
    ...extraReducers.reducers,
  },
});

export const SendingConfigs = {
  ...slice.actions,
  ...extraReducers.actions,
};

export default slice.reducer;
