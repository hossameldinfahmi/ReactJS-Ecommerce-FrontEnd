import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name : "products",
    initialState:{
        items:[],
        
    }
})

export default productSlice;