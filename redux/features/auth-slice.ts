import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  cartID: string;
  productId: string;
  productName: string;
  size: string;
  mrp: number;
  price: number;
  quantity: number;
  imageURL: string;
}

interface StoreState {
  user: string | null | undefined; // Make user property nullable
  cart: CartItem[];
  paymentCart: CartItem[];
}

interface InitialState {
  value: StoreState;
}

const initialState: InitialState = {
  value: {
    user: null, // Set user as null
    cart: [],
    paymentCart: [],
  },
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      state.value.user = null;
    },
    logIn: (state, action: PayloadAction<string>) => {
      state.value.user = action.payload;
    },
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      const existingItem = state.value.cart.find(
        (item) => item.cartID === newItem.cartID
      );

      if (existingItem) {
        // If the item with the same cartID already exists, increment its quantity
        existingItem.quantity += newItem.quantity; //this wont work
      } else {
        // If it doesn't exist, add the new item to the cart
        state.value.cart.push(newItem);
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const cartID = action.payload;
      const cartItem = state.value.cart.find((item) => item.cartID === cartID);

      if (cartItem) {
        // Update the quantity of the cart itemx
        state.value.cart = state.value.cart.filter(
          (item) => item.cartID !== cartID
        );
      }
    },
    buyNow: () => {},
    clearCart: () => {},
    updateCartItemQuantity: (
      state,
      action: PayloadAction<{ cartID: string; quantity: number }>
    ) => {
      const { cartID, quantity } = action.payload;
      const cartItem = state.value.cart.find((item) => item.cartID === cartID);

      if (cartItem) {
        // Update the quantity of the cart itemx
        cartItem.quantity = quantity;
      }
    },
  },
});

export const {
  logIn,
  logOut,
  addToCart,
  updateCartItemQuantity,
  removeFromCart,
  buyNow,
  clearCart,
} = auth.actions;
export default auth.reducer;
