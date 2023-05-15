const { createSlice } = require('@reduxjs/toolkit');

const WishlistSlice = createSlice({
    name:'wishlist',
    initialState:{
        items: [],
        isLoading:true,
        next:null,
        previous:null
        
    },
    reducers:{
        getWishlist(state,actions) {
            state.items = actions.payload.items;
            state.isLoading = actions.payload.isLoading;
            state.next = actions.payload.next;
            state.previous =actions.payload.previous;
        },
        deleteFromWishlistR(state,action) {
            state.items = state.items.filter(item=> item.id !== action.payload.id);
            state.isLoading = action.payload.isLoading;
            

        },
        addToWishlistR(state,action) {
            const product = action.payload.product;
            const id = action.payload.id;
            state.items.push({
                id,
                product,
            })
        }
    }
})

export const wishlistActions = WishlistSlice.actions;
export default WishlistSlice;