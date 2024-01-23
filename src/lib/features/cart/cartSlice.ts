import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/lib/store'
import helperUtil from '@/utils/helper.util'

interface CartState {
  cartItems: CartItemI[]
}

const initialState: CartState = {
  cartItems: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItemI>) => {
      state.cartItems.push(action.payload)
    },
    removeFromCart: (state, action: PayloadAction<CartItemI>) => {
      state.cartItems = state.cartItems.filter(({ product }) => product.id !== action.payload.product.id)
    },
    emptyCart: (state) => {
      state.cartItems = []
    },
    increaseQuantity: (state, action: PayloadAction<CartItemI>) => {
      const updatedCartItems = state.cartItems.map((cartItem) => {
        if (cartItem.product.id === action.payload.product.id) {
          cartItem.quantity += 1
        }
        return cartItem
      })
      state.cartItems = updatedCartItems
    },
    decreaseQuantity: (state, action: PayloadAction<CartItemI>) => {
      const updatedCartItems = state.cartItems.map((cartItem) => {
        if (cartItem.product.id === action.payload.product.id) {
          cartItem.quantity -= 1
        }
        return cartItem
      })
      state.cartItems = updatedCartItems
    },
  },
})

export const { addToCart, removeFromCart, emptyCart, increaseQuantity, decreaseQuantity } = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCartItems = (state: RootState) => state.cart.cartItems;
export const selectCartQuantity = (state: RootState) => state.cart.cartItems
  .reduce((total: number, { quantity }: CartItemI) => total + quantity, 0);
export const selectCartTotal = (state: RootState) => state.cart.cartItems.
  reduce(
    (total: number, { product, quantity }: CartItemI) =>
      total + helperUtil.getDiscountedPrice(product.price, product.discountPercentage) * quantity
    , 0);

export default cartSlice.reducer