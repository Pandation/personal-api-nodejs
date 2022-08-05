import createGeneric from "./create";
import getAllGeneric from "./getAll";
import deleteItemGeneric from "./deleteItem";

let baseUrl =
  process.env.NODE_ENV === "production" ? "" : process.env.REACT_APP_API_URL;

function createGenericReducer(type, url) {
  const apiUrl = baseUrl + url;
  const getAll = getAllGeneric(type, apiUrl);
  const create = createGeneric(type, apiUrl);
  const deleteItem = deleteItemGeneric(type, apiUrl);

  const pending = (key) => (state) => {
    state[key].fetching = true;
  };
  const resolveGetAll = (state, action) => {
    state.collection.fetching = false;
    state.collection.loaded = true;
    state.collection.items = action.payload.data;
  };
  const resolveCreate = (state, action) => {
    console.log(action.payload)
    state.collection.fetching = false;
    state.collection.loaded = true;
    state.collection.items = state.collection.items.concat(action.payload);
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
    state[key].error = action.payload;
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
