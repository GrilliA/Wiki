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
import { GoogleButton } from "../../components/GoogleButton.tsx/GoogleButton";
import { useLoginMutation } from "../../services/auth";
import { useRouter } from "@/hooks/useRouter";

export const Login = (_) => {
  const { getInputProps, onSubmit, errors, values } = useForm({
    initialValues: loginInitialValues,
    validate: yupResolver(loginValidationSchema),
  });
  const { push } = useRouter();
  const [login, { isSuccess }] = useLoginMutation();
  const handleSubmit = async () => {
    const data = await login(values);
    if (!data.data?.user?.id) return;
    push("/home", { replace: true });
  };

  return (
    <Stack>
      <Box>
        <Title order={2}>Welcome back</Title>
        <Text c={"dimmed"}>Insert your credentials</Text>
      </Box>
      <form onSubmit={onSubmit(handleSubmit)} id="login">
        <Stack>
          <TextInput
            {...getInputProps("identifier")}
            label={"Email or username"}
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
              Forgotten password?
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
        You don't have an account? Sign up
      </WikiLink>
    </Stack>
  );
};
