import { createSlice } from '@reduxjs/toolkit'

export const orderSlice = createSlice({
  name: 'order',
  initialState: {
    value: [],
  },
  reducers: {
    addItem: (state, action) => {
      const {id, title, price, img, dough, size} = action.payload 
      const item = state.value.find(
        (el) => 
          el.id === id && 
          el.dough === dough && 
          el.title === title
      );
      
      if (item) {
        item.count += 1
      } else {
        state.value.push({
          id,
          title,
          price,
          img,
          dough,
          size,
          count: 1,
        })
      }
      
    },
    decreaseItem: (state, action) => {
      const {id, title, price, img, dough, size, count} = action.payload;
      const item = state.value.find(
        (el) => 
          el.id === id && 
          el.dough === dough && 
          el.title === title
        )
      if (!item) return
      if (item.count > 1) {
        item.count -= 1
        return
      }
      
      console.log(item);
    },
    removeItem: (state, action) => {
      const {id, title, price, img, dough, size, count} = action.payload;
      const item = state.value.find(
        (el) => 
          el.id === id && 
          el.dough === dough && 
          el.title === title
        )
        if (!item) return
        const index = state.value.findIndex(item => item.id === id)
        if (index !== -1) {
          state.value.splice(index, 1)
        }
    },
    addCount: (state, action) => {
      const {id, title, price, img, dough, size, count} = action.payload;
      const item = state.value.find(
        (el) => 
          el.id === id && 
          el.dough === dough && 
          el.title === title
        )
      if (!item) return
      item.count += 1
    },

    clear: (state) => {
      state.value = []
    },
  },
})

export const { addItem, decreaseItem, removeItem, addCount,  clear } = orderSlice.actions

export default orderSlice.reducer