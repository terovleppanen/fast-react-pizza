import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //   cart: [],

  cart: [
    {
      pizzaId: 12,
      name: "Mediterranean",
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = new pizza object
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // payload = pizza id
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaceItemQuantity(state, action) {
      // payload = pizza id
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    deacreaseItemQuantity(state, action) {
      // payload = pizza id
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaceItemQuantity,
  deacreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
