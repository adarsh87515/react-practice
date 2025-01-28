import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state,action){
      console.log(action)
      state.push(action.payload)
    },
    removeFromCart(state,action){
      return state.filter(item=>item.id !==action.payload.id)
    }
  },
});

export const {addToCart, removeFromCart} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;


// if
// export const cartReducer = cartSlice.reducer;
// then
// import {cartReducer} from "./cart-slice"


// if
// export default cartSlice.reducer
// then
// import cartReducer from "./cart-slice"