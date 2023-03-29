import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SearchVarenukParams, Varenuk } from "./types";

export const fetchVarenuks = createAsyncThunk<Varenuk[], SearchVarenukParams>(
  "varenuk/fetchVarenuksStatus",
  async (params) => {
    const { order, sortBy, category, search, currentPage } = params;
    const { data } = await axios.get<Varenuk[]>(
      `https://63ebc7d7be929df00ca23593.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    );
    return data;
  }
);
