import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./products/products-slice";
import cartSlice from "./cart/cart-slice";
import authReducer from "./authSlice/login";
import orderSlice from "./orders/order-slice";
import WishlistSlice from "./wishlist/wishlist-slice";
const store = configureStore({
    reducer:{
        products: productSlice.reducer,
        cart: cartSlice.reducer,
        auth: authReducer,
        order:orderSlice.reducer,
        wishlist:WishlistSlice.reducer
    }
})

export default store;
