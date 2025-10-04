import { MODAL_OPEN } from "@/store/ui/ui.events";
import useGlobalState from "./useGlobalState";

export const useOpenForm = () => {
  const { dispatch } = useGlobalState();
  return (id: number, details?: any) => {
    dispatch({
      type: MODAL_OPEN,
      payload: {
        id,
        details,
      },
    });
  };
};
