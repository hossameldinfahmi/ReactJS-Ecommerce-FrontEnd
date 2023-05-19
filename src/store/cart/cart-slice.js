const { createSlice } = require("@reduxjs/toolkit");


const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[],
        isLoading:true
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
        },
        addTocart(state,action){
            const product = action.payload.product;
            const quantity = action.payload.quantity;
            const id = action.payload.id;
            const item = state.items.find(item=>item.id===id)
            if(item){
                item.quantity=quantity;
            }
            else{
                state.items.push({
                    id,
                    product,
                    quantity
                })
            }
        }
    }
})


export const cartActions = cartSlice.actions;
export default cartSlice;