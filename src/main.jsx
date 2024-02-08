import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Routers/Router.jsx";
import { Provider } from "react-redux";
import { persistor, store } from "./app/store";
import { PersistGate } from 'redux-persist/integration/react';
import AuthProvider from "./Provider/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";
import './LangugeChange/I18next.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AuthProvider>
            <RouterProvider router={Router} />
          </AuthProvider>
          <Toaster />
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
