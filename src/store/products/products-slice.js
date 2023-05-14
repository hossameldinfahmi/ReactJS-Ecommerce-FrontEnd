import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name : "products",
    initialState:{
        items: [],
        isLoading: true,
        next: null,
        previous: null
    },
    reducers:{
        replaceProducts(state, action){
            state.items = action.payload.items;
            state.isLoading = action.payload.isLoading;
            state.next = action.payload.next;
            state.previous = action.payload.previous;
        }
    }
})

export const productActions = productSlice.actions
export default productSlice;