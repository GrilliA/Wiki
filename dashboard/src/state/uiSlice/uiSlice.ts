import { EStoreSlice } from "@/helper/constants";
import { getAuthToken } from "@/helper/getAuthToken";
import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: EStoreSlice.ApiError,
  initialState: {
    loaders: 0,
    token: getAuthToken(),
  },
  reducers: {
    addLoader: (state) => {
      state.loaders = state.loaders + 1;
    },
    removeLoader: (state) => {
      state.loaders = state.loaders - 1;
    },
    addToken: (state, action) => {
      state.token = action.payload;
    },
    removeToken: (state) => {
      state.token = "";
    },
  },
});

export const { addLoader, removeLoader, addToken, removeToken } =
  uiSlice.actions;
export const { reducer: uiReducer } = uiSlice;
