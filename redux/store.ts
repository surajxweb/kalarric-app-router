import { configureStore } from "@reduxjs/toolkit";
import storeReducer from "./features/auth-slice";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { localStorageMiddleware } from "./localStorage"; // Import the middleware.


export const store = configureStore({
  reducer: {
    storeReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    localStorageMiddleware,
  ],
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
