import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser:{}
}

export const userSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {

    addUser: (state, action) => {
      state.currentUser = action.payload
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { addUser } = userSlice.actions

export default userSlice.reducer