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

const formId = "onboarding-form";
const avatarKey = null;

export const OnBoardingForm = (_) => {
  const { dispatch, state } = useGlobalState();
  const [logo, setLogo] = useState("");
  const confirmProps: TDirection = {
    text: "Complete",
    form: formId,
  };
  const { getInputProps, onSubmit, errors, values } = useForm({
    initialValues: onBoardingInitialValues,
    validate: yupResolver(onBoardingValidationSchema),
  });

  const { fetch } = useWikiFetch("/auth/login", {
    method: "POST",
    atCommand: true,
    body: values,
    hasLoader: true,
    onSuccess(response) {
      //TODO: add the logic for on Success
    },
  });
  useEffect(() => {
    if (!values.avatar) return;
    const logo = values.avatar as File;
    const fileReader = new FileReader();
    !(logo as any)?.key && fileReader.readAsDataURL(logo);
    fileReader.addEventListener("load", () =>
      setLogo(fileReader.result as string),
    );
  }, [(values.avatar as File)?.lastModified]);
  const logoSrc = logo || getImage(avatarKey);
  return (
    <section>
      <PageComponent>
        <WikiFull title="OnBoarding" right={confirmProps}>
          <form onSubmit={onSubmit(fetch)}>
            <Stack>
              <FileButton
                {...getInputProps("avatar")}
                accept={IMAGE_MIME_TYPE.join(",")}
              >
                {(props) => (
                  <>
                    <Stack align="flex-start">
                      <Avatar
                        className={styles.avatar}
                        size={"xl"}
                        src={logoSrc}
                        {...props}
                      />
                      <Button
                        type="button"
                        p={0}
                        variant="transparent"
                        size="md"
                        {...props}
                      >
                        Upload avatar
                      </Button>
                    </Stack>
                  </>
                )}
              </FileButton>
              <TextInput
                {...getInputProps("firstName")}
                label={"First name"}
                size="md"
              />
              <TextInput
                {...getInputProps("lastName")}
                label={"Last name"}
                size="md"
              />
              <TextInput
                {...getInputProps("username")}
                label={"Username"}
                size="md"
              />
              <Textarea
                {...getInputProps("message")}
                label={"Message"}
                size="md"
                rows={5}
              />
            </Stack>
          </form>
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
