import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  domain: {},
}

export const domainSlice = createSlice({
  name: 'domain',
  initialState,
  reducers: {

    addDomain: (state, action) => {
      state.domain = action.payload
    },
    updateDomain: (state, action) => {
      state.domain = action.payload
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { addDomain,updateDomain } = domainSlice.actions


export default domainSlice.reducer