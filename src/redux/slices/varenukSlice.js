import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const varenukSlice = createSlice({
  name: "varenuk",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
});

export const { setItems } = varenukSlice.actions;

export default varenukSlice.reducer;
