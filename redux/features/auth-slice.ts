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
  category: string;
}

interface AddressFields {
  id: string;
  phone: string;
  firstName: string;
  lastName: string;
  addressLine1: string;
  addressLine2: string;
  streetName: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
}

interface StoreState {
  // Make user property nullable
  cart: CartItem[];
  paymentCart: CartItem[];
  deliveryAddress: AddressFields;
}

interface InitialState {
  value: StoreState;
}

const initialState: InitialState = {
  value: {
    // Set user as null
    cart: [],
    paymentCart: [],
    deliveryAddress: {
      id: "",
      phone: "",
      firstName: "",
      lastName: "",
      addressLine1: "",
      addressLine2: "",
      streetName: "",
      city: "",
      state: "",
      pincode: "",
      country: "",
    },
  },
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
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
    addToPaymentCart: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;

      // If it doesn't exist, add the new item to the cart
      state.value.paymentCart = [];
      state.value.paymentCart.push(newItem);
    },
    initializePaymentCart: (state) => {
      state.value.paymentCart = state.value.cart;
    },
    clearCart: () => {},
    updateCartItemQuantity: (
      state,
      action: PayloadAction<{ cartID: string; type: string }>
    ) => {
      const { cartID, type } = action.payload;
      const cartItem = state.value.cart.find((item) => item.cartID === cartID);

      if (cartItem) {
        // Update the quantity of the cart itemx
        type === "plus"
          ? (cartItem.quantity = cartItem.quantity + 1)
          : (cartItem.quantity = cartItem.quantity - 1);
      }
    },
    updateDeliveryAddress: (state, action: PayloadAction<AddressFields>) => {
      state.value.deliveryAddress = action.payload;
    },
  },
});

export const {
  addToCart,
  updateCartItemQuantity,
  removeFromCart,
  buyNow,
  clearCart,
  initializePaymentCart,
  addToPaymentCart,
  updateDeliveryAddress,
} = auth.actions;
export default auth.reducer;
