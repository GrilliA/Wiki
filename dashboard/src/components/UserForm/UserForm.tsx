import { yupResolver } from "mantine-form-yup-resolver";
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
  MultiSelect,
  Stack,
  TextInput,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { useRouter } from "../../hooks/useRouter";
import { useUpdateUserMutation } from "@/services/auth/auth";
import { useUploadMutation } from "@/services/file";
import { useUser } from "@/hooks/useUser";
import { WikiTextarea } from "../WikiTextarea";

export const UserForm = () => {
  const [logo, setLogo] = useState("");
  const { setValues, getInputProps, onSubmit, values } = useForm({
    initialValues: userFormInitialValues,
    validate: yupResolver(userFormValidationSchema),
  });
  const user = useUser();
  useEffect(() => {
    if (user?.id) {
      setValues({
        firstName: user?.firstName || "",
        lastName: user?.lastName || "",
        nickName: user?.nickname || "",
        avatar: null,
        bio: user?.bio,
      });
    }
  }, [user?.id]);
  const { push } = useRouter();

  useEffect(() => {
    if (!values.avatar) return;
    const logo = values.avatar as File;
    const fileReader = new FileReader();
    !(logo as any)?.key && fileReader.readAsDataURL(logo);
    fileReader.addEventListener("load", () =>
      setLogo(fileReader.result as string),
    );
  }, [(values.avatar as File)?.lastModified]);

  const logoSrc = logo;
  const [updateUser] = useUpdateUserMutation();
  const userId = user?.id;
  const [uploadFile] = useUploadMutation();
  const handleSubmit = onSubmit(async (data: any) => {
    try {
      await updateUser({
        userId,
        data: {
          ...data,
          isOnboarded: true,
        },
      });

      const fileData = {
        files: data?.avatar,
        ref: "plugin::users-permissions.user",
        refId: userId,
        field: "avatar",
      };

      if (data?.avatar) {
        await uploadFile(fileData);
      }
    } catch (error) {
      console.log(error);
    } finally {
      push("/profile");
    }
  });

  return (
    <form onSubmit={handleSubmit} id="onboarding-form">
      <Stack gap={"xl"}>
        <TextInput
          {...getInputProps("firstName")}
          label={"What is your first name?"}
          size="md"
        />
        <TextInput
          {...getInputProps("lastName")}
          label={"What is your last name?"}
          size="md"
        />
        <TextInput
          {...getInputProps("nickName")}
          label={"What is your artist name?"}
          size="md"
        />
        <WikiTextarea
          label="Tell us about yourself"
          maxLength={500}
          rows={5}
          size="md"
          {...getInputProps("bio")}
        />
      </Stack>
    </form>
  );
};
