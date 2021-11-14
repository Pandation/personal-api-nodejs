import {  createAsyncThunk } from "@reduxjs/toolkit";

function createGenericReducer(type) {
  const url = `http://localhost:5000/api/portfolio/${type}`;
  const getAll = createAsyncThunk(`${type}/getAll`, async () => {
    const data = await fetch(url);
    return await data.json();
  });
  const create = createAsyncThunk(
    `${type}/create`,
    async (params = {}, callback = "") => {
      const data = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(params),
      });
      return await data.json();
    }
  );
  const deleteItem = createAsyncThunk(
    `${type}/delete`,
    async (id, callback = "") => {
      const data = await fetch(url + "/" + id, {
        method: "DELETE",
      });
      return await data.json();
    }
  );

  const pending = (key) => (state) => {
    state[key].fetching = true;
  };
  const resolveGetAll = (state, action) => {
    state.collection.fetching = false;
    state.collection.loaded = true;
    state.collection.items = action.payload.data;
  };
  const resolveCreate = (state, action) => {
    state.collection.fetching = false;
    state.collection.loaded = true;
    state.collection.items = state.collection.items.concat(action.payload.data);
  };
  const resolveDelete = (state, action) => {
    let newItems = state.collection.items.filter((item) => {
      return !(item._id === action.payload._id);
    });
    state.collection.items = newItems;
  };
  const rejected = (key) => (state, action) => {
    state[key].fetching = false;
    state[key].loaded = true;
    state[key].error = action.payload.data;
  };

  return {
    actions: {
      getAll,
      create,
      deleteItem,
    },
    reducers: {
      [getAll.pending]: pending("collection"),
      [getAll.fulfilled]: resolveGetAll,
      [getAll.rejected]: rejected("collection"),
      [create.pending]: pending("collection"),
      [create.fulfilled]: resolveCreate,
      [create.rejected]: rejected("collection"),
      [deleteItem.pending]: pending("delete"),
      [deleteItem.fulfilled]: resolveDelete,
      [deleteItem.rejected]: rejected("delete"),
      // [getOne.pending]: pending('item'),
    },
  };
}

export default createGenericReducer;