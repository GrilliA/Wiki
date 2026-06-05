import { useRouter } from "@/hooks/useRouter";
import { useLoginMutation } from "@/services/auth/auth";
import type { TLoginParams } from "@/services/auth/auth.model";
import { useForm } from "@mantine/form";
import { yupResolver } from "mantine-form-yup-resolver";
import { loginInitialValues, loginValidationSchema } from "./Login.helper";

export const useLogin = () => {
  const { getInputProps, onSubmit } = useForm<TLoginParams>({
    initialValues: loginInitialValues,
    validate: yupResolver(loginValidationSchema),
  });
  const { push } = useRouter();
  const [login] = useLoginMutation();
  const handleSubmit = onSubmit(async (values) => {
    const { data } = await login(values);
    if (!data.isSuccess) {
      return;
    }
    push("/home");
  });
  return {
    getInputProps,
    handleSubmit,
  };
};
