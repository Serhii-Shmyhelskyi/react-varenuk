import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import cart from "./slices/cartSlice";
import varenuk from "./slices/varenukSlice";

export default configureStore({
  reducer: { filter, cart, varenuk },
});
