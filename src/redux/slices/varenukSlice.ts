import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import CartItem from "../../components/CartItem";
import { SortSlice } from "./filterSlice";

type Varenuk = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
};

enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

interface VarenukSliceState {
  items: Varenuk[];
  status: Status;
}

const initialState: VarenukSliceState = {
  items: [],
  status: Status.LOADING,
};

export type SearchVarenukParams = {
  order: string;
  sortBy: string;
  category: string;
  search: string;
  currentPage: string;
};

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

const varenukSlice = createSlice({
  name: "varenuk",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Varenuk[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchVarenuks.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchVarenuks.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchVarenuks.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const selectVarenuk = (state: RootState) => state.varenuk;

export const { setItems } = varenukSlice.actions;

export default varenukSlice.reducer;
