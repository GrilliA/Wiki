import { WikiModal } from "@/components/Modal";
import { Contact } from "./Contact";

export const ContactModal = () => {
  const handleClose = () => {};
  return (
    <WikiModal
      title={"Contact us"}
      onClose={handleClose}
      opened={false}
      maw={400}
      w={"100%"}
    >
      <Contact />
    </WikiModal>
  );
};
