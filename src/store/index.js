import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./products/products-slice";
import cartSlice from "./cart/cart-slice";
import authReducer from "./authSlice/login";
import orderSlice from "./orders/order-slice";
const store = configureStore({
    reducer:{
        products: productSlice.reducer,
        cart: cartSlice.reducer,
        auth: authReducer,
        order:orderSlice.reducer
    }
})

export default store;
