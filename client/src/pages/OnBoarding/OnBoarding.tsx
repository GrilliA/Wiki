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
    <section>
      <PageComponent>
        <WikiFull title="OnBoarding" right={confirmProps}>
          <UserForm />
        </WikiFull>
        <Stack mt="md" align="center">
          <Divider mt={"md"} />

          <WikiLogo />
          <Group justify="center" mb={"lg"}>
            <WikiLink className={styles.link} href="#" size="xs">
              Cookies Policy
            </WikiLink>
            <WikiLink className={styles.link} href="#" size="xs">
              Privacy Policy
            </WikiLink>
            <WikiLink className={styles.link} href="#" size="xs">
              Terms and Service Policy
            </WikiLink>
            <WikiLink className={styles.link} href="#" size="xs">
              Contribute
            </WikiLink>
          </Group>
        </Stack>
      </PageComponent>
      <CopyRight />
    </section>
  );
};
