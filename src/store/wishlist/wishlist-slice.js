const { createSlice } = require('@reduxjs/toolkit');

const WishlistSlice = createSlice({
    name:'wishlist',
    initialState:{
        items: []
    },
    reducers:{
        getWishlist(state,actions) {
            state.items = actions.payload.items;
        },
        deleteFromWishlistR(state,action) {
            state.items = state.items.filter(item=> item.id !== action.payload.id)
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