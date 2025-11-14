import { WikiModal } from "@/components/Modal";
import { Login } from "./Login";

export const LoginModal = () => {
  const handleClose = () => {};
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
