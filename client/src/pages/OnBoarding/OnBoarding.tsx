import styles from "./OnBoarding.module.css";
import type { TDirection } from "../../components/Full/Full.model";
import { Stack, Divider, Group } from "@mantine/core";
import { CopyRight } from "../../components/CopyRight/CopyRight";
import { WikiFull } from "../../components/Full";
import { WikiLink } from "../../components/Link";
import { WikiLogo } from "../../components/Logo";
import { PageComponent } from "../../components/PageComponent/PageComponent";
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
