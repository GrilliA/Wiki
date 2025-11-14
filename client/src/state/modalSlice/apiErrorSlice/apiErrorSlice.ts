import { EStoreSlice } from "@/helper/constants";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TApiError } from "./apiErrorSlice.model";

const apiErrorSlice = createSlice({
  name: EStoreSlice.ApiError,
  initialState: [] as Array<TApiError>,
  reducers: {
    addApiError: (state, { payload }: PayloadAction<TApiError>) => {
      state.push(payload);
    },
    clearApiErrors: () => {
      return [];
    },
  },
});

export const { addApiError, clearApiErrors } = apiErrorSlice.actions;
export const { reducer: apiErrorReducer } = apiErrorSlice;
