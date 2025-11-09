import { yupResolver } from "mantine-form-yup-resolver";
import {
  Box,
  Button,
  Checkbox,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { signupInitialValues, signupValidationSchema } from "./Signup.helper";
import { useForm } from "@mantine/form";
import { useRouter } from "../../hooks/useRouter";
import { GoogleButton } from "../../components/GoogleButton.tsx/GoogleButton";
import { useWikiFetch } from "../../hooks/useFetch";
import { WikiLink } from "../../components/Link";
import useGlobalState from "../../hooks/useGlobalState";
import { AUTH_LOGIN } from "../../store/auth/auth.event";

export const Signup = (_) => {
  const { push } = useRouter();
  const { dispatch } = useGlobalState();
  const {
    getInputProps,
    onSubmit,
    errors,
    values: { terms, confirmPassword, ...formData },
  } = useForm({
    initialValues: signupInitialValues,
    validate: yupResolver(signupValidationSchema),
  });

  const { fetch } = useWikiFetch("/auth/local/register", {
    atCommand: true,
    method: "POST",
    body: formData,
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
      <form onSubmit={onSubmit(fetch)} id="signup">
        <Stack>
          <TextInput
            {...getInputProps("email")}
            label={"Email"}
            type="email"
            size="md"
            autoComplete="email"
          />
          <TextInput
            {...getInputProps("username")}
            label={"Username"}
            size="md"
          />
          <PasswordInput
            {...getInputProps("password")}
            autoComplete="current-password"
            label={"Password"}
            size="md"
          />
          <PasswordInput
            {...getInputProps("confirmPassword")}
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
        <Button form="signup" type="submit">
          Signup
        </Button>
        <GoogleButton>Signup with google</GoogleButton>
      </Stack>
      <WikiLink c="dimmed" size="xs" fw={"bold"} href="/auth/login">
        You already have an account? Login
      </WikiLink>
    </Stack>
  );
};
