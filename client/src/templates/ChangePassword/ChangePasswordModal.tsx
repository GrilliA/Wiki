import { WikiModal } from "@/components/Modal";
import { ChangePassword } from "./ChangePassword";
import useGlobalState from "@/hooks/useGlobalState";
import { MODAL_CLOSE } from "@/store/ui/ui.events";
import { AppModals } from "@/helper/constants";

export const ChangePasswordModal = () => {
  const { state, dispatch } = useGlobalState();
  const handleClose = () => {
    dispatch({
      type: MODAL_CLOSE,
      payload: {
        id: AppModals.ChangePassword,
      },
    });
  };
  const isOpened = Boolean(state.ui.modals[AppModals.ChangePassword]?.show);
  return (
    <WikiModal
      title={"Change password"}
      onClose={handleClose}
      opened={isOpened}
      maw={400}
      w={"100%"}
    >
      <ChangePassword />
    </WikiModal>
  );
};
