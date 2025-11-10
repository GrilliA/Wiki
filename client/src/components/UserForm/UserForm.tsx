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
import getImage from "../../helper/getImage";
import { useRouter } from "../../hooks/useRouter";
import { useWikiFetch } from "../../hooks/useFetch";

const avatarKey = null;

export const UserForm = (_) => {
  const [logo, setLogo] = useState("");
  const { getInputProps, onSubmit, errors, values } = useForm({
    initialValues: userFormInitialValues,
    validate: yupResolver(userFormValidationSchema),
  });
  const { push } = useRouter();
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
  const handleSubmit = () => {
    //onSubmit(fetch)
    push("/profile");
  };
  const [content, setContent] = useState("");
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
          {...getInputProps("artistName")}
          label={"What is your artist name?"}
          size="md"
        />
        <MultiSelect
          data={["dj", "dancer", "choreographer", "teacher"]}
          label={"What is your profession on the dance community?"}
          {...getInputProps("job")}
          size="md"
        />
        <MultiSelect
          data={["hip hop", "breaking", "popping", "locking", "house"]}
          label={"What is your prefered genre?"}
          {...getInputProps("genre")}
          size="md"
        />
        <div>
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
