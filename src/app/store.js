import domainReducer from '../features/domain/domainSlice'
import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'

export const store = configureStore({
  reducer: {
    domain:domainReducer,
    user:userReducer,},
})