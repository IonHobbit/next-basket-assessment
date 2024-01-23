import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/lib/store'

interface WishlistState {
  products: ProductI[]
}

const initialState: WishlistState = {
  products: [],
}

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<ProductI>) => {
      state.products.push(action.payload)
    },
    removeFromWishlist: (state, action: PayloadAction<ProductI>) => {
      state.products = state.products.filter((product) => product.id !== action.payload.id)
    },
    emptyWishlist: (state) => {
      state.products = []
    },
  },
})

export const { addToWishlist, removeFromWishlist, emptyWishlist } = wishlistSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectWishlistProducts = (state: RootState) => state.wishlist.products;
export const selectWishListQuantity = (state: RootState) => state.wishlist.products.length;

export default wishlistSlice.reducer