import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartReducer = createSlice({
  name: "cartReducer",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (
        state.items.length > 0 &&
        state.items.find((item) => item?._id === action.payload._id)
      ) {
        state.items = state.items.map((item) =>
          item._id === action.payload._id
            ? { ...item, qty: item.qty + action.payload.qty }
            : item
        );
      } else {
        state.items.push(action.payload);
      }
    },
    updateCart: () => {},
    deleteItemCart: () => {},
  },
});

export const { addToCart, updateCart, deleteItemCart } = cartReducer.actions;
export default cartReducer.reducer;
