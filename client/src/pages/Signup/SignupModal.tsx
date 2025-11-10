import { WikiModal } from "../../components/Modal";
import { Signup } from "./Signup";

export const SignupModal = () => {
  const handleClose = () => {
    console.log("close");
  };
  return (
    <WikiModal
      title={"Signup"}
      onClose={handleClose}
      opened={false}
      maw={400}
      w={"100%"}
    >
      <Signup />
    </WikiModal>
  );
};
