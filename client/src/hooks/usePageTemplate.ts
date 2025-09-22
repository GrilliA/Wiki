import { TPageEntity } from "@/helper/getEntityRoute";
import useGlobalState from "./useGlobalState";
import { SET_PAGE_INIT } from "@/store/page/page.events";
import { useEffect } from "react";
type TPageTemplateHook = {
  currentPage: TPageEntity;
};
export const usePageTemplate = (opt: TPageTemplateHook) => {
  const { dispatch } = useGlobalState();
  useEffect(() => {
    dispatch({
      type: SET_PAGE_INIT,
      payload: opt ?? {},
    });
  }, []);
  return;
};
