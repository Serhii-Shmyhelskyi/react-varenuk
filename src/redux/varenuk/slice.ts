import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState, Status, Varenuk } from "./types";
import { fetchVarenuks } from "./asyncActions";

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
      state.pagination = 0;
    });
    builder.addCase(fetchVarenuks.fulfilled, (state, action) => {
      state.items = action.payload.data;
      state.pagination = action.payload.pagination;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchVarenuks.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
      state.pagination = 0;
    });
  },
});

export const { setItems } = varenukSlice.actions;

export default varenukSlice.reducer;
