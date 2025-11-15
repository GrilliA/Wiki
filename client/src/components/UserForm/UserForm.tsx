import { yupResolver } from "mantine-form-yup-resolver";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { RichTextEditor } from "@mantine/tiptap";
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
  InputLabel,
  MultiSelect,
  Stack,
  TextInput,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { useRouter } from "../../hooks/useRouter";
import { useCurrentUserQuery, useUpdateUserMutation } from "@/services/auth";
import { useUploadMutation } from "@/services/file";
import { imageCompressionOptions } from "@/helper/constants";
import imageCompression from "browser-image-compression";

export const UserForm = (_) => {
  const [logo, setLogo] = useState("");
  const [content, setContent] = useState("");
  const { getInputProps, onSubmit, errors, values } = useForm({
    initialValues: userFormInitialValues,
    validate: yupResolver(userFormValidationSchema),
  });
  console.log(errors);
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
  const [updateUser, { isSuccess }] = useUpdateUserMutation();
  const { data: user } = useCurrentUserQuery();
  const userId = user?.id;
  const [uploadFile] = useUploadMutation();
  const handleSubmit = onSubmit(async (data: any) => {
    await updateUser({
      userId,
      data: {
        ...data,
        profession: data?.profession?.join(","),
        genre: data?.genre?.join(","),
        bio: content,
      },
    });

    const fileData = {
      files: data?.avatar,
      ref: "plugin::users-permissions.user",
      refId: userId,
    };
    await uploadFile(fileData);
    if (isSuccess) {
      push("/profile");
    }
  });

  const editor = useEditor({
    extensions: [StarterKit],
    content,
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
  });

  return (
    <form onSubmit={handleSubmit} id="onboarding-form">
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
        <MultiSelect
          data={["dj", "dancer", "choreographer", "teacher"]}
          label={"What is your profession on the dance community?"}
          {...getInputProps("profession")}
          size="md"
        />
        <MultiSelect
          data={["hip hop", "breaking", "popping", "locking", "house"]}
          label={"What is your prefered genre?"}
          {...getInputProps("genre")}
          size="md"
        />
        <div className={styles.editor}>
          <InputLabel size="md">Tell us about your self</InputLabel>
          <RichTextEditor editor={editor} variant="subtle">
            <RichTextEditor.Toolbar
              sticky
              stickyOffset="var(--docs-header-height)"
            >
              <RichTextEditor.ControlsGroup>
                <RichTextEditor.Bold />
                <RichTextEditor.Italic />
                <RichTextEditor.Underline />
                <RichTextEditor.Strikethrough />
                <RichTextEditor.ClearFormatting />
                <RichTextEditor.Code />
              </RichTextEditor.ControlsGroup>
            </RichTextEditor.Toolbar>

            <RichTextEditor.Content />
          </RichTextEditor>
        </div>
      </Stack>
    </form>
  );
};
