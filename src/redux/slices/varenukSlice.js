import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchVarenuks = createAsyncThunk(
  "varenuk/fetchVarenuksStatus",
  async (params) => {
    const { order, sortBy, category, search, currentPage } = params;
    const { data } = await axios.get(
      `https://63ebc7d7be929df00ca23593.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    );

    return data;
  }
);

const initialState = {
  items: [],
  status: "loading",
};

const varenukSlice = createSlice({
  name: "varenuk",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchVarenuks.pending]: (state) => {
      state.status = "loading";
      state.items = [];
    },
    [fetchVarenuks.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [fetchVarenuks.rejected]: (state) => {
      state.status = "error";
      state.items = [];
    },
  },
});

export const selectVarenuk = (state) => state.varenuk;

export const { setItems } = varenukSlice.actions;

export default varenukSlice.reducer;
