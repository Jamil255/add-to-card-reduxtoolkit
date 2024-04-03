import { createSlice } from "@reduxjs/toolkit";

const initialState = []
const addToCart = createSlice({
    name: 'addToCart',
    initialState,
    reducers: {
        addCart: (state, action) => {
            state.push(action.payload)
        }
    }
})
export const { addCart } = addToCart.actions
export default addToCart.reducer