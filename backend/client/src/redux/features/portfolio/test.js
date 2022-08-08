import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = "/api/portfolio/experiences";
export const getTest = createAsyncThunk(
  "experiences/getAll",
  async (dispatch, getState) => {
    const data = await fetch(url);
    return await data.json();
  }
);
export const createTest = createAsyncThunk(
  "experiences/create",
  async (params = {}, callback = '') => {
    const data = await fetch(url, {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: params
        
    });
    return await data.json();
  }
);
// export const getTest = createAsyncThunk(
//   "experiences/getExperiences",
//   async (dispatch, getState) => {
//     const data = await fetch(url);
//     return await data.json();
//   }
// );

const testSlice = createSlice({
  name: "test",
  initialState: {
    error: null,
    collection: {
      items: [],
      fetching: false,
      loaded: false,
    },
  },
  extraReducers: {
    [getTest.pending]: (state) => {
      state.collection.fetching = true;
    },
    [getTest.fulfilled]: (state, action) => {
      state.collection.fetching = false;
      state.collection.loaded = true;
      state.collection.items = action.payload.data;
    },
    [getTest.rejected]: (state) => {
      state.error = "Vinie is a better developper. You failed";
    },
  },
});

export default testSlice.reducer;
