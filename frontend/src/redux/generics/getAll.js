import { createAsyncThunk } from "@reduxjs/toolkit";

const getAll = (type, url) =>
  createAsyncThunk(`${type}/getAll`, async () => {
    const data = await fetch(url);
    return await data.json();
  });

export default getAll;
