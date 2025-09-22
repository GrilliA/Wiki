import { WikiLink } from "@/components/Link";
import { yupResolver } from "mantine-form-yup-resolver";
import useGlobalState from "@/hooks/useGlobalState";
import { AUTH_LOGIN } from "@/store/auth/auth.event";
import {
  Box,
  Button,
  PasswordInput,
  Select,
  Stack,
  Text,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import { useWikiFetch } from "@/hooks/useFetch";
import {
  contactInitialValues,
  contactValidationSchema,
} from "./Contact.helper";
import { useForm } from "@mantine/form";
import { useRouter } from "next/router";
import { GoogleButton } from "@/components/GoogleButton.tsx/GoogleButton";
import { typeOptions } from "./Contact.constant";

export const Contact = (_) => {
  const { push } = useRouter();
  const { dispatch } = useGlobalState();
  const { getInputProps, onSubmit, errors, values } = useForm({
    initialValues: contactInitialValues,
    validate: yupResolver(contactValidationSchema),
  });

  const { fetch } = useWikiFetch("/auth/contact", {
    atCommand: true,
    method: "POST",
    body: values,
    hasLoader: true,
    onSuccess(response) {
      //TODO: close the modal and add a success notification
    },
  });

  return (
    <Stack>
      <Box>
        <Text c={"dimmed"}>
          Having trouble? No worries just complete the form and we will help you
        </Text>
      </Box>
      <form onSubmit={onSubmit(fetch)}>
        <Stack>
          <Select
            data={typeOptions}
            {...getInputProps("type")}
            label={"Type"}
            size="md"
          />
          <TextInput
            {...getInputProps("subject")}
            label={"Subject"}
            size="md"
          />
          <Textarea
            {...getInputProps("message")}
            label={"Message"}
            size="md"
            rows={5}
          />
        </Stack>
      </form>
      <Button>Send</Button>
    </Stack>
  );
};
