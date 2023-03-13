import { configureStore } from '@reduxjs/toolkit'
import { questApi } from './questApi'

export const store = configureStore({
  reducer: {
    [questApi.reducerPath]: questApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(questApi.middleware),
})
