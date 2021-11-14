import { createSlice } from "@reduxjs/toolkit";
import createGenericReducer from "../../generics/createGenericReducer";

const skills = createGenericReducer("skills");

const skillsSlice = createSlice({
  name: "skills",
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
    ...skills.reducers,
  },
});

export const Skills = {
  ...skillsSlice.actions,
  ...skills.actions,
};
export default skillsSlice.reducer;

