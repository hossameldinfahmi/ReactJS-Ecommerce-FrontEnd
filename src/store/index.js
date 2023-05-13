import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./products/products-slice";
import authReducer from "./authSlice/login";
const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    auth: authReducer,
  },
});

export default store;
