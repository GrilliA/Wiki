import { Button, Group, Stack, Text, Title } from "@mantine/core";

const EmailVerification = () => {
  return (
    <Stack>
      <Title order={2} ta={"center"}>
        Email Verification
      </Title>
      <Text ta={"center"}>
        Please check your email to verify your account. If you did not receive
        the email, please check your spam folder or click the button below to
        resend the verification email.
      </Text>
      <Group justify={"center"}>
        <Button>Resend</Button>
      </Group>
    </Stack>
  );
};

export default EmailVerification;
