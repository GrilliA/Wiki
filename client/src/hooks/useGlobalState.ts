import GlobalContext from "@/store/globalContext";
import { useContext } from "react";

const useGlobalState = () => {
  const value = useContext(GlobalContext);
  return value;
};

export default useGlobalState;
