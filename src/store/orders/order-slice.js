const { createSlice } = require("@reduxjs/toolkit");


const orderSlice = createSlice({
    name:'order',
    initialState:{
        orders:[]
    },
    reducers:{
        getUserOrders(state,action){
            state.items=action.payload.items;
        }
    }
})


export const orderActions = orderSlice.actions;
export default orderSlice;