import { useForm } from "@mantine/form";
import { yupResolver } from "mantine-form-yup-resolver";
import { signupInitialValues } from "./Signup.helper";
import { useRegisterMutation } from "@/services/auth/auth";
import { useRouter } from "@/hooks/useRouter";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import type { TSignupParams } from "@/services/auth/auth.model";

export const useSignup = () => {
  const { push } = useRouter();
  const [registerUser] = useRegisterMutation();
  const signupValidationSchema = useSignupValidationSchema();
  const { getInputProps, onSubmit } = useForm<TSignupParams>({
    initialValues: signupInitialValues,
    validate: yupResolver(signupValidationSchema),
  });

  const handleSubmit = onSubmit(async (values) => {
    const { data } = await registerUser({
      username: values.username,
      email: values.email,
      password: values.password,
    });

    if (!data.isSuccess) {
      return;
    }

    push("/auth/email_verification");
  });
  return { getInputProps, handleSubmit };
};

export const useSignupValidationSchema = () => {
  const { t } = useTranslation(["common", "signup"]);

  return Yup.object({
    email: Yup.string()
      .email()
      .required(
        t("common:validation.required", {
          fieldName: t("signup:email"),
        }),
      ),
    password: Yup.string().required(
      t("common:validation.required", {
        fieldName: t("signup:password"),
      }),
    ),
    username: Yup.string().required(
      t("common:validation.required", {
        fieldName: t("signup:username"),
      }),
    ),
  });
};
