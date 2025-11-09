import { WikiModal } from "../../components/Modal";
import { AppModals } from "../../helper/constants";
import useGlobalState from "../../hooks/useGlobalState";
import { MODAL_CLOSE } from "../../store/ui/ui.events";
import { Signup } from "./Signup";

export const SignupModal = () => {
  const { state, dispatch } = useGlobalState();
  const handleClose = () => {
    dispatch({
      type: MODAL_CLOSE,
      payload: {
        id: AppModals.Signup,
      },
    });
  };
  const isOpened = Boolean(state.ui.modals[AppModals.Signup]?.show);
  return (
    <WikiModal
      title={"Signup"}
      onClose={handleClose}
      opened={isOpened}
      maw={400}
      w={"100%"}
    >
      <Signup />
    </WikiModal>
  );
};
