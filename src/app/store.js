import domainReducer from '../features/domain/domainSlice'
import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
import paymentReducer  from '../features/PaymentPrice/PaymentPrice'
import languageReducer from '../features/language/languageSlice'


export const store = configureStore({
  reducer: {
    domain:domainReducer,
    user:userReducer,
    payment:paymentReducer,
    language:languageReducer
  },
})