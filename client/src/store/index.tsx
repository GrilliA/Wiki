import { ReactNode, useReducer } from "react";
import { initialState } from "./initialState";
import rootReducer from "./rootReducer";
import GlobalContext from "./globalContext";

type ProviderState = {
  children: ReactNode;
};
export const Provider = (props: ProviderState) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  console.log(state);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
