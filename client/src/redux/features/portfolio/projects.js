import { createSlice } from "@reduxjs/toolkit";
import createGenericReducer from "../../generics/createGenericReducer";

const projects = createGenericReducer("projects");

const projectsSlice = createSlice({
  name: "projects",
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
    ...projects.reducers,
  },
});

export const Projects = {
  ...projectsSlice.actions,
  ...projects.actions,
};
export default projectsSlice.reducer;

