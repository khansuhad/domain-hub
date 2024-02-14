import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItemSelectedTime:{}
}
export const cartItemSelectedTimeSlice = createSlice({
  name: 'cartItemSelectedTime',
  initialState,
  reducers: {
    addCartItemSelectedTime: (state, action) => {
      state.cartItemSelectedTime = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addCartItemSelectedTime } = cartItemSelectedTimeSlice.actions

export default cartItemSelectedTimeSlice.reducer