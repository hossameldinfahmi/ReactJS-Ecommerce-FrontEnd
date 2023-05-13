import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./products/products-slice";
import cartSlice from "./cart/cart-slice";
const store = configureStore({
    reducer:{
        products: productSlice.reducer,
        cart: cartSlice.reducer,
    }
})

export default store;