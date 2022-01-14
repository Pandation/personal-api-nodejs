import { createSlice } from "@reduxjs/toolkit";
import createGenericReducer from "../../generics/createGenericReducer";

const learnings = createGenericReducer("learnings");

const learningsSlice = createSlice({
  name: "learnings",
  initialState: {
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
  },
  extraReducers: {
    ...learnings.reducers,
  },
});

export const Learnings = {
  ...learningsSlice.actions,
  ...learnings.actions,
};
export default learningsSlice.reducer;

