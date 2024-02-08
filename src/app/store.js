import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// Import your reducers
import domainReducer from '../features/domain/domainSlice';
import userReducer from '../features/user/userSlice';
import paymentReducer from '../features/PaymentPrice/PaymentPrice';

// Define persist config for each reducer
const domainPersistConfig = {
  key: 'domain',
  storage,
};

const userPersistConfig = {
  key: 'user',
  storage,
};

const paymentPersistConfig = {
  key: 'payment',
  storage,
};

// Create persisted reducers
const persistedDomainReducer = persistReducer(domainPersistConfig, domainReducer);
const persistedUserReducer = persistReducer(userPersistConfig, userReducer);
const persistedPaymentReducer = persistReducer(paymentPersistConfig, paymentReducer);

// Create store
export const store = configureStore({
  reducer: {
    domain: persistedDomainReducer,
    user: persistedUserReducer,
    payment: persistedPaymentReducer,
  },
});

// Create persistor
export const persistor = persistStore(store);