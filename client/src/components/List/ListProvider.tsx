import { createContext } from "react";
import { TListProviderProps, TListSharedProps } from "./List.model";

export const listContext = createContext<TListSharedProps>(null);
const ListProvider = (props: TListProviderProps) => {
  const { listProps, children } = props;
  return (
    <listContext.Provider value={listProps}>{children}</listContext.Provider>
  );
};

export default ListProvider;
