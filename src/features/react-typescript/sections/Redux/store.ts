// src/features/AprendizajeReactTS/sections/Redux/store.ts

import { configureStore, createSlice, type PayloadAction } from "@reduxjs/toolkit"

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (s) => { s.value += 1 },
    decrement: (s) => { s.value -= 1 },
    set: (s, a: PayloadAction<number>) => { s.value = a.payload },
  },
})

export const { increment, decrement, set } = counterSlice.actions

export const store = configureStore({
  reducer: { counter: counterSlice.reducer },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
