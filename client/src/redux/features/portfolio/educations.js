import { createSlice } from "@reduxjs/toolkit";
import createGenericReducer from "../../generics/createGenericReducer";

const educations = createGenericReducer("educations");

const educationsSlice = createSlice({
  name: "educations",
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
    ...educations.reducers,
  },
});

export const Educations = {
  ...educationsSlice.actions,
  ...educations.actions,
};
export default educationsSlice.reducer;

