import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { productId, quantity } = action.payload;
      const productExist = state.items.findIndex(
        (item) => item.productId === productId
      );
      if (productExist > 0) {
        state.items[productId].quantity += quantity;
      } else {
        state.items.push({ productId, quantity });
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
