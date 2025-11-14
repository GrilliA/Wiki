import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../services/auth";
import { modalReducer } from "./modalSlice/modalSlice";
import { apiErrorReducer } from "./apiErrorSlice/apiErrorSlice";
import { uiReducer } from "./uiSlice/uiSlice";
import { translationApi } from "@/services/translation";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    modal: modalReducer,
    apiError: apiErrorReducer,
    [authApi.reducerPath]: authApi.reducer,
    [translationApi.reducerPath]: translationApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      authApi.middleware,
      translationApi.middleware,
    );
  },
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
