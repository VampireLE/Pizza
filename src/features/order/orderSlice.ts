import { createSlice } from '@reduxjs/toolkit'

export const orderSlice = createSlice({
  name: 'order',
  initialState: {
    value: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.value.push(action.payload)
    },
    removeItem: (state, action) => {
      state.value.push(action.payload)
    },
    clear: (state) => {
      state.value = []
    },
  },
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem, clear } = counterSlice.actions

export default counterSlice.reducer