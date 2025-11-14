import { appModeKey } from "./constants";

export const getAppMode = () => {
  const appMode = localStorage.getItem(appModeKey);
  return appMode;
};
