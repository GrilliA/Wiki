import { appModeKey, defaultAppMode } from "@/helper/constants";
import { useEffect } from "react";

export const useAppInit = () => {
  useEffect(() => {
    localStorage.setItem(appModeKey, defaultAppMode);
  }, []);
};
