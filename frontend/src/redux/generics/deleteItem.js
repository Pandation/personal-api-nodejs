import { createAsyncThunk } from "@reduxjs/toolkit";

const deleteItem = (type, url) =>
  createAsyncThunk(`${type}/delete`, async (id, callback = "") => {
    const data = await fetch(url + "/" + id, {
      method: "DELETE",
    });
    return await data.json();
  });

export default deleteItem;
