import { Reducer } from "react";
import { RootState, Action } from "./stateModel";
import authReducer from "./auth/auth.reducer";
import uiReducer from "./ui/ui.reducer";

const reducers = {
  ui: uiReducer,
  auth: authReducer,
};

const rootReducer: Reducer<RootState, Action> = (state, action) => {
  console.log(`ACTION: ${action.type},  PAYLOAD:`, action.payload);
  const newState = Object.keys(reducers).reduce((prev, key) => {
    return {
      ...prev,
      [key]: {
        ...reducers[key](prev[key], action),
      },
    };
  }, state) as any;
  return newState;
};

export default rootReducer;
