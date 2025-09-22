import { MODAL_OPEN } from "@/store/ui/ui.events";
import useGlobalState from "./useGlobalState";
import { TPageEntity } from "@/helper/getEntityRoute";
import { APP_MODALS } from "@/helper/constants";

export const useOpenView = () => {
  const { dispatch } = useGlobalState();
  return (entity: TPageEntity, id?: unknown) => {
    dispatch({
      type: MODAL_OPEN,
      payload: {
        id: APP_MODALS.INLINE_VIEW,
        details: {
          entity,
          id,
        },
      },
    });
  };
};
