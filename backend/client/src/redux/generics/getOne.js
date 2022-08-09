import { createAsyncThunk } from "@reduxjs/toolkit";

const getOne = (type, url) =>
  createAsyncThunk(`${type}/getOne`, async (id) => {
    const data = await fetch(url + "/" + type + '/' + id);
    return await data.json();
  });

export default getOne;
