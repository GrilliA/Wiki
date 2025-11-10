import { WikiModal } from "@/components/Modal";
import { Login } from "./Login";
import { AppModals } from "@/helper/constants";

export const LoginModal = () => {
  const handleClose = () => {
    console.log("close");
  };
  return (
    <WikiModal
      title={"Login"}
      onClose={handleClose}
      opened={false}
      maw={400}
      w={"100%"}
    >
      <Login />
    </WikiModal>
  );
};
