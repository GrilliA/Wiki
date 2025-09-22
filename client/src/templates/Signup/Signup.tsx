import { WikiLink } from "@/components/Link";
import { yupResolver } from "mantine-form-yup-resolver";
import useGlobalState from "@/hooks/useGlobalState";
import { AUTH_LOGIN } from "@/store/auth/auth.event";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useWikiFetch } from "@/hooks/useFetch";
import { signupInitialValues, signupValidationSchema } from "./Signup.helper";
import { useForm } from "@mantine/form";
import { useRouter } from "next/router";
import { GoogleButton } from "@/components/GoogleButton.tsx/GoogleButton";

export const Signup = (_) => {
  const { push } = useRouter();
  const { dispatch } = useGlobalState();
  const { getInputProps, onSubmit, errors, values } = useForm({
    initialValues: signupInitialValues,
    validate: yupResolver(signupValidationSchema),
  });

  const { fetch } = useWikiFetch("/auth/signup", {
    atCommand: true,
    method: "POST",
    body: values,
    hasLoader: true,
    onSuccess(response) {
      const user = response.data;
      dispatch({
        type: AUTH_LOGIN,
        payload: user,
      });
      push("/");
    },
  });

  return (
    <Stack>
      <Box>
        <Title order={2}>Hi, register here</Title>
        <Text c={"dimmed"}>
          Enter the requested details and be part of the community
        </Text>
      </Box>
      <form onSubmit={onSubmit(fetch)}>
        <Stack>
          <TextInput
            {...getInputProps("email")}
            label={"Email"}
            type="email"
            size="md"
            autoComplete="email"
            error={errors.email}
          />
          <PasswordInput
            {...getInputProps("password")}
            autoComplete="current-password"
            error={errors.password}
            label={"Password"}
            size="md"
          />
          <PasswordInput
            {...getInputProps("confirmPassword")}
            error={errors.password}
            label={"Confirm password"}
            size="md"
          />
          <Checkbox
            {...getInputProps("terms", { type: "checkbox" })}
            label="I agree to the terms and conditions"
            size="md"
          />
        </Stack>
      </form>
      <Stack>
        <Button>Signup</Button>
        <GoogleButton>Signup with google</GoogleButton>
      </Stack>
      <WikiLink c="dimmed" size="xs" fw={"bold"} href="/auth/login">
        You already have an account? Login
      </WikiLink>
    </Stack>
  );
};
