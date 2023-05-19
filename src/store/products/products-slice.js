import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name : "products",
    initialState:{
        items: [],
        categories:[],
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
        },
        getcategories(state,action){
            state.categories = action.payload.categories;
            state.isLoading = action.payload.isLoading;
        }
    }
})

export const productActions = productSlice.actions
export default productSlice;