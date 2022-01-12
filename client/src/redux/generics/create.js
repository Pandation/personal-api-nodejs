import { createAsyncThunk } from "@reduxjs/toolkit";

const create = (type, url) => createAsyncThunk(
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

export default create;
