import type { TDirection } from "../../components/Full/Full.model";
import { WikiFull } from "../../components/Full";
import { UserForm } from "../../components/UserForm/UserForm";

const formId = "onboarding-form";

export const OnBoardingForm = (_) => {
  const confirmProps: TDirection = {
    text: "Complete",
    form: formId,
  };
  return (
    <WikiFull title="OnBoarding" right={confirmProps}>
      <UserForm />
    </WikiFull>
  );
};
