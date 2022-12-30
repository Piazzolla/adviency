import { configureStore } from '@reduxjs/toolkit'
import giftSlice from './gift/giftSlice'
// ...
export const store = configureStore({
  reducer: {
     gift: giftSlice,
    // two: twoSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {gift: GiftState}

export type AppDispatch = typeof store.dispatch