import createGeneric from "./create";
import getAllGeneric from "./getAll";
import deleteItemGeneric from "./deleteItem";
import getOneGeneric from "./getOne";
import updateGeneric from "./update";

let baseUrl =
  process.env.NODE_ENV === "production" ? "" : process.env.REACT_APP_API_URL;

function createGenericReducer(type, url) {
  const apiUrl = baseUrl + url;
  const getAll = getAllGeneric(type, apiUrl);
  const create = createGeneric(type, apiUrl);
  const deleteItem = deleteItemGeneric(type, apiUrl);
  const getOne = getOneGeneric(type, apiUrl);
  const update = updateGeneric(type, apiUrl);

  return {
    actions: {
      getAll,
      create,
      deleteItem,
      getOne,
      update,
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
      [getOne.pending]: pending("item"),
      [getOne.fulfilled]: resolveGetOne,
      [getOne.rejected]: rejected("item"),
      // [update.pending]: pending("item"),
      [update.fulfilled]: resolveUpdate,
      [update.rejected]: rejected("item"),
    },
  };
}

export default createGenericReducer;

function pending(key) {
  return (state, action) => {
    state[key].fetching = true;
  };
}
function rejected(key) {
  return (state, action) => {
    state[key].error.message = action.payload.message;
    state[key].error.status = true;
  };
}
function resolveGetAll(state, action) {
  state.collection.fetching = false;
  state.collection.loaded = true;
  state.collection.items = action.payload.data;
}
function resolveCreate(state, action) {
  state.collection.fetching = false;
  state.collection.loaded = true;
  state.collection.items = state.collection.items.concat(action.payload);
}
function resolveGetOne(state, action) {
  state.item.fetching = false;
  state.item.loaded = true;
  state.item.data = action.payload;
}
function resolveDelete(state, action) {
  let newItems = state.collection.items.filter((item) => {
    return !(item._id === action.payload._id);
  });
  state.collection.items = newItems;
}
function resolveUpdate(state, action) {
  if (action.payload.error) {
    state.item.error.message = action.payload.message;
    state.item.error.status = true;
  } else {
    state.item.fetching = false;
    state.item.loaded = true;
    state.item.data = action.payload;
  }
}
