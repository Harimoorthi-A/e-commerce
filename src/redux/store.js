import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import wishlistSlice from "./wishlistSlice";
import productsSlice from "./productsSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
        wishlist:wishlistSlice,
        // below will have sam key and value  
        productsSlice
    }
})

export default store