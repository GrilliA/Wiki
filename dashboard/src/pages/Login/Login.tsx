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
import { useLoginMutation } from "../../services/auth/auth";
import { useRouter } from "@/hooks/useRouter";
import type { TLoginParams } from "@/services/auth/auth.model";
import { useTranslation } from "react-i18next";

export const Login = () => {
  const { getInputProps, onSubmit, errors, values } = useForm<TLoginParams>({
    initialValues: loginInitialValues,
    validate: yupResolver(loginValidationSchema),
  });
  const { t } = useTranslation("login");
  const { push } = useRouter();
  const [login] = useLoginMutation();
  const handleSubmit = async () => {
    const { data } = await login(values);
    if (!data.isSuccess) {
      return;
    }
    push("/home");
  };

  return (
    <Stack>
      <Box>
        <Title order={2}>{t("title")}</Title>
        <Text c={"dimmed"}>{t("subtitle")}</Text>
      </Box>
      <form onSubmit={onSubmit(handleSubmit)} id="login">
        <Stack>
          <TextInput
            {...getInputProps("identifier")}
            label={t("email")}
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
              label={t("password")}
              size="md"
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
