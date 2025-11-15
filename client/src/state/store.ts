import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../services/auth";
import { modalReducer } from "./modalSlice/modalSlice";
import { apiErrorReducer } from "./apiErrorSlice/apiErrorSlice";
import { uiReducer } from "./uiSlice/uiSlice";
import { translationApi } from "@/services/translation";
import { fileApi } from "@/services/file";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    modal: modalReducer,
    apiError: apiErrorReducer,
    [authApi.reducerPath]: authApi.reducer,
    [translationApi.reducerPath]: translationApi.reducer,
    [fileApi.reducerPath]: fileApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      authApi.middleware,
      translationApi.middleware,
      fileApi.middleware,
    );
  },
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
