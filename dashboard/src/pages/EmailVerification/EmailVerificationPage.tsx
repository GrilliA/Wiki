import { WikiIcon } from "@/components/Icon";
import { PageComponent } from "@/components/PageComponent/PageComponent";
import { RESEND_EMAIL_DELAY } from "@/helper/constants";
import {
  Button,
  Group,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { resendFormatTime } from "./EmailVerificationPage.util";

const EmailVerificationPage = () => {
  const { t } = useTranslation("email_verification");
  const { colors } = useMantineTheme();
  const primaryColor = colors.violet[7];
  const RESEND_DELAY = RESEND_EMAIL_DELAY * 60;
  const [secondsLeft, setSecondsLeft] = useState(0);

  useEffect(() => {
    if (secondsLeft === 0) {
      return;
    }

    const interval = setInterval(() => {
      setSecondsLeft((seconds) => seconds - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [secondsLeft]);

  const handleResend = () => {
    if (secondsLeft !== 0) {
      return;
    }
    //TODO:  add the resend logic
    setSecondsLeft(RESEND_DELAY);
  };

  const buttonLabel =
    secondsLeft !== 0 ? resendFormatTime(secondsLeft) : "Resend";

  return (
    <PageComponent
      withPadding
      title={t("document.title")}
      description={t("document.description")}
    >
      <Stack>
        <Group>
          <WikiIcon name="check_circle" size={48} color={primaryColor} />
          <Title order={2} ta={"center"}>
            Account created successfully
          </Title>
        </Group>
        <Text>
          Please check your email to verify your account. If you did not receive
          the email, please check your spam folder or click the button below to
          resend the verification email.
        </Text>
        <Button onClick={handleResend} disabled={secondsLeft !== 0}>
          {buttonLabel}
        </Button>
      </Stack>
    </PageComponent>
  );
};

export default EmailVerificationPage;
