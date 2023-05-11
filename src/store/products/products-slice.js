import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name : "products",
    initialState:{
        items: [],
        isLoading: true
    },
    reducers:{
        replaceProducts(state, action){
            state.items = action.payload.items;
            state.isLoading = action.payload.isLoading;
        }
    }
})

export const productActions = productSlice.actions
export default productSlice;