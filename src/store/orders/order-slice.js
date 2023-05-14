const { createSlice } = require("@reduxjs/toolkit");


const orderSlice = createSlice({
    name:'order',
    initialState:{
        orders:[]
    },
    reducers:{
        getUserOrders(state,action){
            state.orders=action.payload.orders;
        }
    }
})


export const orderActions = orderSlice.actions;
export default orderSlice;