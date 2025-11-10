import { WikiFull } from "../../components/Full";
import type { TDirection } from "../../components/Full/Full.model";
import { PageTemplate } from "../../components/PageTemplate/PageTemplate";
import { UserForm } from "../../components/UserForm/UserForm";

const formId = "onboarding-form";

export const ProfileForm = (_) => {
  const confirmProps: TDirection = {
    text: "Complete",
    form: formId,
  };

  return (
    <PageTemplate>
      <WikiFull title="Edit Profile" right={confirmProps}>
        <UserForm />
      </WikiFull>
    </PageTemplate>
  );
};
