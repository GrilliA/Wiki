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
import { WikiLink } from "../../components/Link";
import { GoogleButton } from "../../components/GoogleButton.tsx/GoogleButton";
import { useTranslation } from "react-i18next";
import { useLogin } from "./useLogin";

export const Login = () => {
  const { handleSubmit, getInputProps } = useLogin();
  const { t } = useTranslation("login");

  return (
    <Stack>
      <Box>
        <Title order={2}>{t("title")}</Title>
        <Text c={"dimmed"}>{t("subtitle")}</Text>
      </Box>
      <form onSubmit={handleSubmit} id="login">
        <Stack>
          <TextInput
            {...getInputProps("identifier")}
            label={t("email")}
            size="md"
            id="email"
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
              label={t("password")}
              size="md"
              id="password"
            />
            <WikiLink
              c="dimmed"
              size="xs"
              fw={"bold"}
              href="/auth/forgotten_password"
            >
              {t("forgotten_password")}
            </WikiLink>
          </Flex>
        </Stack>
      </form>
      <Stack>
        <Button form="login" type="submit">
          {t("login_button")}
        </Button>
        <GoogleButton>{t("login_google_button")}</GoogleButton>
      </Stack>
      <WikiLink c="dimmed" size="xs" fw={"bold"} href="/auth/signup">
        {t("sign_up")}
      </WikiLink>
    </Stack>
  );
};
