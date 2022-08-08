const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

let type = "config";
let url = "/api/config";
let baseUrl =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:5000";
const apiUrl = baseUrl + url;

const getSelectsLists = createAsyncThunk(
  `${type}/getSelectsLists`,
  async () => {
    const data = await fetch(apiUrl);
    const result = await data.json();
    return result;
  }
);

const initialState = {
  dataLists: {
    fetching: false,
    loaded: false,
    error: {
      status: false,
      message: "",
    },
    companiesList: [],
    processesList: [],
  },
};

const configSlice = createSlice({
  name: "config",
  initialState,
  extraReducers: {
    [getSelectsLists.pending]: (state) => {
      state.dataLists.fetching = true;
    },
    [getSelectsLists.fulfilled]: (state, action) => {
      state.dataLists.fetching = false;
      state.dataLists.loaded = true;
      state.dataLists.companiesList = action.payload.companiesList;
      state.dataLists.processesList = action.payload.processesList;
    },
    [getSelectsLists.rejected]: (state, action) => {
      state.dataLists.fetching = false;
      state.dataLists.error = {
        status: true,
        message: "Data not found.",
      };
    },
  },
});

export const Config = {
  ...configSlice.actions,
  getSelectsLists,
};

export default configSlice.reducer;
