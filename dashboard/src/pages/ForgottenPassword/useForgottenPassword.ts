import { useForm } from "@mantine/form";
import { yupResolver } from "mantine-form-yup-resolver";
import * as Yup from "yup";
import { forgottenPasswordInitialValues } from "./ForgottenPassword.helper";
import type { TForgottenPasswordParams } from "@/services/auth/auth.model";

export const useForgottenPassword = () => {
  const forgottenPasswordValidationSchema =
    useForgottenPasswordValidationSchema();

  const { getInputProps, onSubmit } = useForm<TForgottenPasswordParams>({
    initialValues: forgottenPasswordInitialValues,
    validate: yupResolver(forgottenPasswordValidationSchema),
  });
  const handleSubmit = onSubmit(async (values) => {
    //TODO: add logic for submit
  });
  return { getInputProps, handleSubmit };
};

const useForgottenPasswordValidationSchema = () => {
  return Yup.object({
    email: Yup.string().email().required(),
  });
};
