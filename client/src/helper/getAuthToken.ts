import { tokenKey } from "./constants";

export const getAuthToken = () => {
  return localStorage.getItem(tokenKey);
};
