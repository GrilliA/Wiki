import { WikiModal } from "@/components/Modal";
import { ChangePassword } from "./ChangePassword";

export const ChangePasswordModal = () => {
  const handleClose = () => {};
  return (
    <WikiModal
      title={"Change password"}
      onClose={handleClose}
      opened={false}
      maw={400}
      w={"100%"}
    >
      <ChangePassword />
    </WikiModal>
  );
};
