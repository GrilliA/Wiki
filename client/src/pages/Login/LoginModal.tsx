import { WikiModal } from "@/components/Modal";
import { Login } from "./Login";
import useGlobalState from "@/hooks/useGlobalState";
import { MODAL_CLOSE } from "@/store/ui/ui.events";
import { AppModals } from "@/helper/constants";

export const LoginModal = () => {
  const { state, dispatch } = useGlobalState();
  const handleClose = () => {
    dispatch({
      type: MODAL_CLOSE,
      payload: {
        id: AppModals.Login,
      },
    });
  };
  const isOpened = Boolean(state.ui.modals[AppModals.Login]?.show);
  return (
    <WikiModal
      title={"Login"}
      onClose={handleClose}
      opened={isOpened}
      maw={400}
      w={"100%"}
    >
      <Login />
    </WikiModal>
  );
};
