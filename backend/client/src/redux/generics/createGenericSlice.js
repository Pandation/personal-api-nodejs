import { createSlice } from "@reduxjs/toolkit";
import createGenericReducer from "./createGenericReducer";

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
  },
};

const createGenericSlice = (type, url) => {
  const extraReducers = createGenericReducer(type, url);

  const slice = createSlice({
    name: type,
    initialState,
    extraReducers: {
      ...extraReducers.reducers,
    },
  });

  return {
    actions: {
      ...slice.actions,
      ...extraReducers.actions,
    },
    reducers: slice.reducer,
  };
};

export default createGenericSlice;
