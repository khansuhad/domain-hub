import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  TotalBill:""
}

export const paymentSlice = createSlice({
  name: 'TotalBill',
  initialState,
  reducers: {

    addPayment: (state, action) => {
      state.TotalBill = action.payload
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { addPayment } = paymentSlice.actions

export default paymentSlice.reducer