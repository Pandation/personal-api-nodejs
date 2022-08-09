import { createAsyncThunk } from "@reduxjs/toolkit";

const update = (type, url) =>
  createAsyncThunk(`${type}/update`, async ({ id, params }) => {
    const data = await fetch(url + "/" + type + "/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params),
    });
    return await data.json();
  });

export default update;
