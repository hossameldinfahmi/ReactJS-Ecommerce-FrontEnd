const { createSlice } = require("@reduxjs/toolkit");


const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        getCartItems(state,actions) {
            state.items = actions.payload.items ;
        },
        deleteFromCart(state,action) {
            state.items = state.items.filter(item=> item.id !== action.payload.id)
        },
        updateQuantity(state,action) {
            const item = state.items.find(item => item.product.id===action.payload.id);
            item.quantity=action.payload.quantity;
        }
    }
})


export const cartActions = cartSlice.actions;
export default cartSlice;