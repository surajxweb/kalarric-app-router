// store.js
"use client";

// store.js

import { configureStore } from "@reduxjs/toolkit";
import storeReducer from "./features/auth-slice";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { localStorageMiddleware } from "./localStorage"; // Import the middleware.

let localStorageState = "";
if (typeof window !== "undefined") {
  localStorageState = localStorage.getItem("reduxState") || "";
}
const persistedState = localStorageState ? JSON.parse(localStorageState) : {};

export const store = configureStore({
  reducer: {
    storeReducer,
  },
  preloadedState: persistedState,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    localStorageMiddleware,
  ],
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
