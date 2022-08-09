import { createSlice } from "@reduxjs/toolkit";
import createGenericReducer from "./createGenericReducer";

const initialErrorState = {
  status: false,
  message: "",
};

const initialState = {
  delete: {
    fetching: false,
    loaded: false,
    error: initialErrorState,
  },
  collection: {
    items: [],
    error: initialErrorState,
    fetching: false,
    loaded: false,
  },
  item: {
    data: {},
    fetching: false,
    loaded: false,
    error: initialErrorState,
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
