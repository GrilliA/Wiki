import { yupResolver } from "mantine-form-yup-resolver";
import { useWikiFetch } from "@/hooks/useFetch";
import { useForm } from "@mantine/form";
import Full from "@/components/Full/Full";
import { TDirection } from "@/components/Full/Full.model";
import { AUTH_LOGIN } from "@/store/auth/auth.event";
import {
  onBoardingInitialValues,
  onBoardingValidationSchema,
} from "./OnBoarding.helper";
import useGlobalState from "@/hooks/useGlobalState";
import {
  Avatar,
  Button,
  FileButton,
  Stack,
  Textarea,
  TextInput,
} from "@mantine/core";
import { profile } from "console";
import { useEffect, useState } from "react";

const formId = "onboarding-form";

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
  const logoSrc = logo || getImage(profile?.avatar?.key);
  return (
    <Full>
      <form onSubmit={onSubmit(fetch)}>
        <Stack>
          <FileButton
            {...getInputProps("avatar")}
            accept={IMAGE_MIME_TYPE.join(",")}
          >
            {(props) => (
              <>
                <Stack align="flex-start">
                  <Avatar size={"xl"} src={logoSrc} {...props} />
                  <Button
                    type="button"
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
    </Full>
  );
};
