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
import { WikiLink } from "@/components/Link";

export const Signup = (_) => {
  const { getInputProps, onSubmit } = useForm({
    initialValues: signupInitialValues,
    validate: yupResolver(signupValidationSchema),
  });

  return (
    <Stack>
      <Box>
        <Title order={2}>Hi, register here</Title>
        <Text c={"dimmed"}>
          Enter the requested details and be part of the community
        </Text>
      </Box>
      <form onSubmit={onSubmit(() => {})} id="signup">
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
