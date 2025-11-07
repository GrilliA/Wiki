import { AuthPageTemplate } from "@/components/AuthPageTemplate/AuthPageTemplate";
import { useWikiFetch } from "@/hooks/useFetch";
import { Stack, Title, Group, Button, TextInput, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import { yupResolver } from "mantine-form-yup-resolver";
import {
  forgottenPasswordInitialValues,
  forgottenPasswordValidationSchema,
} from "./ForgottenPassword.helper";

export const ForgottenPassword = () => {
  const { getInputProps, onSubmit, errors, values } = useForm({
    initialValues: forgottenPasswordInitialValues,
    validate: yupResolver(forgottenPasswordValidationSchema),
  });

  const { fetch } = useWikiFetch("/auth/signup", {
    atCommand: true,
    method: "POST",
    body: values,
    hasLoader: true,
    onSuccess(response) {
      //TODO: add a on success function
    },
  });
  return (
    <AuthPageTemplate>
      <Stack align="center">
        <Title order={2} ta={"center"}>
          Forgotten Password
        </Title>
        <Text ta={"center"}>
          Please check your email to verify your account. If you did not receive
          the email, please check your spam folder or click the button below to
          resend the verification email.
        </Text>
        <form style={{ width: "100%" }} onSubmit={onSubmit(fetch)}>
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
    </AuthPageTemplate>
  );
};
