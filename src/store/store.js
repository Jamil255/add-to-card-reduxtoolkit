import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slice/productSlice";
import addToCart from "./slice/addToCard"
const store = configureStore({
    reducer: {
        product: productSlice,
        addToCart: addToCart

    }
})
export default store