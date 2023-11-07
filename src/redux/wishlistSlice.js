import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: [],
    reducers: {
        // actions
        // updating state, actions= parameter used to define argument of addToCart funct
        addToWishlist: (state, action) => {
            state.push(action.payload)
        },

        // id
        removeWishlist: (state, action) => {
            // return new filtered array
            return state.filter(i => i.id != action.payload)
        }
    }
})

// export reducer
export default wishlistSlice.reducer

// action
export const { addToWishlist, removeWishlist } = wishlistSlice.actions