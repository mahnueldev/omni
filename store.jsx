import { configureStore } from "@reduxjs/toolkit"
import { apiSlice } from "./src/features/api/apiSlice"
import authReducer from './src/features/auth/authSlice'

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})