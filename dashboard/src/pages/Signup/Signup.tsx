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
import { GoogleButton } from "../../components/GoogleButton.tsx/GoogleButton";
import { WikiLink } from "@/components/Link";
import { useSignup } from "./useSignup";

export const Signup = (_) => {
  const { getInputProps, handleSubmit } = useSignup();

  return (
    <Stack>
      <Box>
        <Title order={2}>Hi, register here</Title>
        <Text c={"dimmed"}>
          Enter the requested details and be part of the community
        </Text>
      </Box>
      <form onSubmit={handleSubmit} id="signup">
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
