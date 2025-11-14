import { EStoreSlice } from "@/helper/constants";
import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: EStoreSlice.Modal,
  initialState: {},
  reducers: {},
});

export const {} = modalSlice.actions;
export const { reducer: modalReducer } = modalSlice;
