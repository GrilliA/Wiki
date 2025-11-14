import { WikiFull } from "../../components/Full";
import type { TDirection } from "../../components/Full/Full.model";
import { UserForm } from "../../components/UserForm/UserForm";

const formId = "onboarding-form";

export const ProfileForm = (_) => {
  const confirmProps: TDirection = {
    text: "Complete",
    form: formId,
  };

  return (
    <WikiFull title="Edit Profile" right={confirmProps}>
      <UserForm />
    </WikiFull>
  );
};
