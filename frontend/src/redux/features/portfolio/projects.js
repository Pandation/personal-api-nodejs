import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import createGenericReducer from "../../generics/createGenericReducer";

const type = "projects";
let baseUrl =
  process.env.NODE_ENV === "production" ? "" : process.env.REACT_APP_API_URL;
const url = baseUrl + `/api/portfolio/${type}`;

const projects = createGenericReducer(type, "/apî/portfolio");

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
  upload: createProjects(type, url),
};
export default projectsSlice.reducer;

function createProjects(type, url) {
  const upload = createAsyncThunk(
    `${type}/upload`,
    async (formData, callback = "") => {
      const data = await fetch(url, {
        method: "POST",
        body: formData,
      });
      return await data.json();
    }
  );

  return upload;
}
