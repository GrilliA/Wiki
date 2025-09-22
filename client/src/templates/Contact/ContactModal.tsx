import { WikiModal } from "@/components/Modal";
import { Contact } from "./Contact";
import useGlobalState from "@/hooks/useGlobalState";
import { MODAL_CLOSE } from "@/store/ui/ui.events";
import { AppModals } from "@/helper/constants";

export const ContactModal = () => {
  const { state, dispatch } = useGlobalState();
  const handleClose = () => {
    dispatch({
      type: MODAL_CLOSE,
      payload: {
        id: AppModals.Contact,
      },
    });
  };
  const isOpened = Boolean(state.ui.modals[AppModals.Contact]?.show);
  return (
    <WikiModal
      title={"Contact us"}
      onClose={handleClose}
      opened={isOpened}
      maw={400}
      w={"100%"}
    >
      <Contact />
    </WikiModal>
  );
};
