import { yupResolver } from "mantine-form-yup-resolver";
import { useWikiFetch } from "@/hooks/useFetch";
import styles from "./OnBoarding.module.css";
import { useForm } from "@mantine/form";
import { IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { TDirection } from "@/components/Full/Full.model";
import {
  onBoardingInitialValues,
  onBoardingValidationSchema,
} from "./OnBoarding.helper";
import useGlobalState from "@/hooks/useGlobalState";
import {
  Avatar,
  Button,
  Divider,
  FileButton,
  Group,
  Stack,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useEffect, useState } from "react";
import getImage from "@/helper/getImage";
import { PageComponent } from "@/components/PageComponent/PageComponent";
import { WikiFull } from "@/components/Full";
import { CopyRight } from "@/components/CopyRight/CopyRight";
import { WikiLogo } from "@/components/Logo";
import { WikiLink } from "@/components/Link";
import { UserForm } from "@/components/UserForm/UserForm";

const formId = "onboarding-form";
const avatarKey = null;

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
