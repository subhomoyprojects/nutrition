import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./slice/AuthSlice";
import ProductSlice from "./slice/ProductSlice";

const store = configureStore({
  reducer: {
    Auth: AuthSlice,
    Pro: ProductSlice,
  },
});

export default store;
