
import domainReducer from '../features/domain/domainSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    domain:domainReducer,
  },
})