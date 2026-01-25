import { appModeKey, defaultAppMode } from "@/helper/constants";
import { getAuthToken } from "@/helper/getAuthToken";
import { addToken } from "@/state/uiSlice/uiSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const useAppInit = () => {
  const token = getAuthToken();
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.setItem(appModeKey, defaultAppMode);
    dispatch(addToken(token));
  }, []);
};
