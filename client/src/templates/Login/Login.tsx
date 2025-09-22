import { WikiLink } from "@/components/Link";
import { yupResolver } from "mantine-form-yup-resolver";
import useGlobalState from "@/hooks/useGlobalState";
import { AUTH_LOGIN } from "@/store/auth/auth.event";
import {
  Box,
  Button,
  Flex,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useWikiFetch } from "@/hooks/useFetch";
import { loginInitialValues, loginValidationSchema } from "./Login.helper";
import { useForm } from "@mantine/form";
import { useRouter } from "next/router";
import { GoogleButton } from "@/components/GoogleButton.tsx/GoogleButton";

export const Login = (_) => {
  const { push } = useRouter();
  const { dispatch } = useGlobalState();
  const { getInputProps, onSubmit, errors, values } = useForm({
    initialValues: loginInitialValues,
    validate: yupResolver(loginValidationSchema),
  });

  const { fetch } = useWikiFetch("/auth/login", {
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
        <Title order={2}>Welcome Back</Title>
        <Text c={"dimmed"}>Welcome back, please enter your credentials</Text>
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
          <Flex
            justify="space-between"
            mt={"xs"}
            gap={"xs"}
            direction={"column"}
          >
            <PasswordInput
              {...getInputProps("password")}
              autoComplete="current-password"
              error={errors.password}
              label={"Password"}
              size="md"
            />
            <WikiLink
              c="dimmed"
              size="xs"
              fw={"bold"}
              href="/auth/forgotten_password"
            >
              {"Forgotten password?"}
            </WikiLink>
          </Flex>
        </Stack>
      </form>
      <Stack>
        <Button>Login</Button>
        <GoogleButton>Login with google</GoogleButton>
      </Stack>
      <WikiLink
        c="dimmed"
        size="xs"
        fw={"bold"}
        href="/auth/forgotten_password"
      >
        Are you new? Create an account
      </WikiLink>
    </Stack>
  );
};
