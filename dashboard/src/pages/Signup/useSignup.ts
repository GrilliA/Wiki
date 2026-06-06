import { useForm } from "@mantine/form";
import { yupResolver } from "mantine-form-yup-resolver";
import { signupInitialValues } from "./Signup.helper";
import { useRegisterMutation } from "@/services/auth/auth";
import { useRouter } from "@/hooks/useRouter";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";

export const useSignup = () => {
  const { push } = useRouter();
  const signupValidationSchema = useSignupValidationSchema();
  const { getInputProps, onSubmit } = useForm({
    initialValues: signupInitialValues,
    validate: yupResolver(signupValidationSchema),
  });

  const [registerUser] = useRegisterMutation();
  const handleSubmit = onSubmit(async (values) => {
    const data = await registerUser({
      username: values.username,
      email: values.email,
      password: values.password,
    });
    if (!data.data?.user?.id) return;
    push("/auth/login");
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
