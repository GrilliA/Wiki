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
import { useTranslation } from "react-i18next";
import { tokenKey } from "@/helper/constants";
import { useRouter } from "@/hooks/useRouter";
import type { TRootState } from "@/state/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getAuthToken } from "@/helper/getAuthToken";

export const Login = (_) => {
  const { getInputProps, onSubmit, errors, values } = useForm({
    initialValues: loginInitialValues,
    validate: yupResolver(loginValidationSchema),
  });
  const token = useSelector((state: TRootState) => state.ui.token);
  const { push } = useRouter();
  const { t } = useTranslation();
  const [login] = useLoginMutation();
  const handleSubmit = async () => {
    await login(values);
  };

  useEffect(() => {
    if (getAuthToken()) {
      push("/home", { replace: true });
    }
  }, [token]);

  return (
    <Stack>
      <Box>
        <Title order={2}>{t("Login.Title")}</Title>
        <Text c={"dimmed"}>{t("Login.Subtitle")}</Text>
      </Box>
      <form onSubmit={onSubmit(handleSubmit)} id="login">
        <Stack>
          <TextInput
            {...getInputProps("identifier")}
            label={t("Login.Identifier")}
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
              label={t("Login.Password")}
              size="md"
            />
            <WikiLink
              c="dimmed"
              size="xs"
              fw={"bold"}
              href="/auth/forgotten_password"
            >
              {t("Login.ForgottenPassword")}
            </WikiLink>
          </Flex>
        </Stack>
      </form>
      <Stack>
        <Button form="login" type="submit">
          {t("Login.Login")}
        </Button>
        <GoogleButton>{t("Login.LoginWithGoogle")}</GoogleButton>
      </Stack>
      <WikiLink c="dimmed" size="xs" fw={"bold"} href="/auth/signup">
        {t("Login.SignupMessage")}
      </WikiLink>
    </Stack>
  );
};
