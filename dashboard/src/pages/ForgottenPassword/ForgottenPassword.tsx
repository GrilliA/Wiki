import { Stack, Title, Button, TextInput, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import { yupResolver } from "mantine-form-yup-resolver";
import {
  forgottenPasswordInitialValues,
  forgottenPasswordValidationSchema,
} from "./ForgottenPassword.helper";
import { PageComponent } from "@/components/PageComponent/PageComponent";
import { useTranslation } from "react-i18next";

export const ForgottenPassword = () => {
  const { t } = useTranslation("forgotten_password");
  const { getInputProps, onSubmit, errors } = useForm({
    initialValues: forgottenPasswordInitialValues,
    validate: yupResolver(forgottenPasswordValidationSchema),
  });

  return (
    <PageComponent
      withPadding
      title={t("document.title")}
      description={t("document.description")}
    >
      <Stack align="center">
        <Title order={2} ta={"center"}>
          Forgotten Password
        </Title>
        <Text ta={"center"}>
          Please check your email to verify your account. If you did not receive
          the email, please check your spam folder or click the button below to
          resend the verification email.
        </Text>
        <form style={{ width: "100%" }} onSubmit={onSubmit(() => {})}>
          <Stack align="center">
            <TextInput
              {...getInputProps("email")}
              label={"Email"}
              type="email"
              size="md"
              w={"100%"}
              autoComplete="email"
              error={errors.email}
            />
            <Button fullWidth>Continue</Button>
          </Stack>
        </form>
      </Stack>
    </PageComponent>
  );
};
