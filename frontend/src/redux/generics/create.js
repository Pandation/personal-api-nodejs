import { createAsyncThunk } from "@reduxjs/toolkit";

const create = (type, url) =>
  createAsyncThunk(`${type}/create`, async (params = {}, callback = "") => {
    const data = await fetch(url + "/" + type, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params),
    });
    const result = await data.json()
    console.log(result)

    return result;
  });

export default create;
