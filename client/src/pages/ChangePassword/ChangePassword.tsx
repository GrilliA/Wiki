import { yupResolver } from "mantine-form-yup-resolver";
import { Button, PasswordInput, Stack } from "@mantine/core";
import { useWikiFetch } from "@/hooks/useFetch";
import {
  changePasswordInitialValues,
  changePasswordValidationSchema,
} from "./ChangePassword.helper";
import { useForm } from "@mantine/form";

export const ChangePassword = (_) => {
  const { getInputProps, onSubmit, values } = useForm({
    initialValues: changePasswordInitialValues,
    validate: yupResolver(changePasswordValidationSchema),
  });

  const { fetch } = useWikiFetch("/auth/changePassword", {
    atCommand: true,
    method: "POST",
    body: values,
    hasLoader: true,
    onSuccess(response) {
      //TODO: close the modal and send the user the login page
    },
  });

  return (
    <Stack>
      <form onSubmit={onSubmit(fetch)}>
        <Stack>
          <PasswordInput
            {...getInputProps("oldPassword")}
            w={"100%"}
            autoComplete="current-password"
            label={"Old password"}
            size="md"
          />
          <PasswordInput
            {...getInputProps("password")}
            w={"100%"}
            label={"New password"}
            size="md"
          />
          <PasswordInput
            {...getInputProps("confirmPassword")}
            w={"100%"}
            label={"Confirm new password"}
            size="md"
          />
        </Stack>
      </form>
      <Button>Change password</Button>
    </Stack>
  );
};
