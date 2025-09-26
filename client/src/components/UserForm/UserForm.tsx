import { yupResolver } from "mantine-form-yup-resolver";
import { useWikiFetch } from "@/hooks/useFetch";
import styles from "./UserForm.module.css";
import { useForm } from "@mantine/form";
import { IMAGE_MIME_TYPE } from "@mantine/dropzone";
import {
  userFormInitialValues,
  userFormValidationSchema,
} from "./UserForm.helper";
import {
  Avatar,
  Button,
  FileButton,
  Stack,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useEffect, useState } from "react";
import getImage from "@/helper/getImage";

const avatarKey = null;

export const UserFormForm = (_) => {
  const [logo, setLogo] = useState("");
  const { getInputProps, onSubmit, errors, values } = useForm({
    initialValues: userFormInitialValues,
    validate: yupResolver(userFormValidationSchema),
  });

  const { fetch } = useWikiFetch("/profile", {
    method: "POST",
    atCommand: true,
    body: values,
    hasLoader: true,
    onSuccess(response) {
      //TODO: add the logic for on Success
    },
  });
  useEffect(() => {
    if (!values.avatar) return;
    const logo = values.avatar as File;
    const fileReader = new FileReader();
    !(logo as any)?.key && fileReader.readAsDataURL(logo);
    fileReader.addEventListener("load", () =>
      setLogo(fileReader.result as string),
    );
  }, [(values.avatar as File)?.lastModified]);
  const logoSrc = logo || getImage(avatarKey);
  return (
    <form onSubmit={onSubmit(fetch)}>
      <Stack>
        <FileButton
          {...getInputProps("avatar")}
          accept={IMAGE_MIME_TYPE.join(",")}
        >
          {(props) => (
            <>
              <Stack align="flex-start">
                <Avatar
                  className={styles.avatar}
                  size={"xl"}
                  src={logoSrc}
                  {...props}
                />
                <Button
                  type="button"
                  p={0}
                  variant="transparent"
                  size="md"
                  {...props}
                >
                  Upload avatar
                </Button>
              </Stack>
            </>
          )}
        </FileButton>
        <TextInput
          {...getInputProps("firstName")}
          label={"First name"}
          size="md"
        />
        <TextInput
          {...getInputProps("lastName")}
          label={"Last name"}
          size="md"
        />
        <TextInput
          {...getInputProps("username")}
          label={"Username"}
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
  );
};
