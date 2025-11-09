import { yupResolver } from "mantine-form-yup-resolver";
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
import { loginInitialValues, loginValidationSchema } from "./Login.helper";
import { useForm } from "@mantine/form";
import { WikiLink } from "../../components/Link";
import { useWikiFetch } from "../../hooks/useFetch";
import useGlobalState from "../../hooks/useGlobalState";
import { useRouter } from "../../hooks/useRouter";
import { AUTH_LOGIN } from "../../store/auth/auth.event";
import { GoogleButton } from "../../components/GoogleButton.tsx/GoogleButton";

export const Login = (_) => {
  const { push } = useRouter();
  const { dispatch } = useGlobalState();
  const { getInputProps, onSubmit, errors, values } = useForm({
    initialValues: loginInitialValues,
    validate: yupResolver(loginValidationSchema),
  });

  const { fetch } = useWikiFetch("/auth/local", {
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
      <form onSubmit={onSubmit(fetch)} id="login">
        <Stack>
          <TextInput
            {...getInputProps("identifier")}
            label={"Email or Username"}
            size="md"
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
        <Button form="login" type="submit">
          Login
        </Button>
        <GoogleButton>Login with google</GoogleButton>
      </Stack>
      <WikiLink c="dimmed" size="xs" fw={"bold"} href="/auth/signup">
        Are you new? Create an account
      </WikiLink>
    </Stack>
  );
};
