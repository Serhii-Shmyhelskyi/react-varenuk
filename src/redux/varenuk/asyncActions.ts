import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SearchVarenukParams, dataTest } from "./types";

export const fetchVarenuks = createAsyncThunk<dataTest, SearchVarenukParams>(
  "varenuk/fetchVarenuksStatus",
  async (params) => {
    const { order, sortBy, category, search, currentPage } = params;

    const limitVarenuk = await axios.get(
      `https://63ebc7d7be929df00ca23593.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    );

    const allVarenuk = await axios
      .get(`https://63ebc7d7be929df00ca23593.mockapi.io/items?${category}`)
      .then((response) => response.data.length);

    return Promise.all([limitVarenuk, allVarenuk]).then(function (values) {
      return { data: values[0].data, pagination: values[1] };
    });
  }
);
