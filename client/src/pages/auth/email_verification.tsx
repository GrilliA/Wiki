import { AuthPageTemplate } from "@/components/AuthPageTemplate/AuthPageTemplate";
import { Box, Button, Group, Stack, Text, Title } from "@mantine/core";

const EmailVerification = () => {
  return (
    <AuthPageTemplate>
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
    </AuthPageTemplate>
  );
};

export default EmailVerification;
