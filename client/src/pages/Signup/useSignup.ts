import { useForm } from "@mantine/form";
import { yupResolver } from "mantine-form-yup-resolver";
import { signupInitialValues, signupValidationSchema } from "./Signup.helper";
import { useRegisterMutation } from "@/services/auth";
import { useRouter } from "@/hooks/useRouter";

export const useSignup = () => {
  const { push } = useRouter();
  const { values, getInputProps, onSubmit } = useForm({
    initialValues: signupInitialValues,
    validate: yupResolver(signupValidationSchema),
  });
  const [registerUser, { isSuccess }] = useRegisterMutation();
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
