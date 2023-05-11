import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name : "products",
    initialState:{
        items: [],
    },
    reducers:{
        replaceProducts(state, action){
            state.items = action.payload.items;
        }
    }
})

export const productActions = productSlice.actions
export default productSlice;