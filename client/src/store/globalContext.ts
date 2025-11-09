import { createContext } from "react";
import { initialState } from "./initialState";
import type { Action } from "./stateModel";

const GlobalContext = createContext({
  state: initialState,
  dispatch: (action: Action) => {},
});

export default GlobalContext;
