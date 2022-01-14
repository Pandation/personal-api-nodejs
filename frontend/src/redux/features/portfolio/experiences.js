import { createSlice } from "@reduxjs/toolkit";
import createGenericReducer from "../../generics/createGenericReducer";

const experiences = createGenericReducer("experiences");

const experiencesSlice = createSlice({
  name: "experiences",
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
    ...experiences.reducers,
  },
});

export const Experiences = {
  ...experiencesSlice.actions,
  ...experiences.actions,
};
export default experiencesSlice.reducer;

