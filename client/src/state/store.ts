import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../services/auth";
import { modalReducer } from "./modalSlice/modalSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(authApi.middleware);
  },
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
