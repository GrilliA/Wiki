import { yupResolver } from "mantine-form-yup-resolver";
import { useWikiFetch } from "@/hooks/useFetch";
import { useForm } from "@mantine/form";
import { TDirection } from "@/components/Full/Full.model";
import {
  profileFormInitialValues,
  profileFormValidationSchema,
} from "./ProfileForm.helper";
import { useEffect, useState } from "react";
import getImage from "@/helper/getImage";
import { WikiFull } from "@/components/Full";
import { PageTemplate } from "@/components/PageTemplate/PageTemplate";
import { UserForm } from "@/components/UserForm/UserForm";

const formId = "onboarding-form";
const avatarKey = null;

export const ProfileForm = (_) => {
  const [logo, setLogo] = useState("");
  const confirmProps: TDirection = {
    text: "Complete",
    form: formId,
  };
  const { getInputProps, onSubmit, errors, values } = useForm({
    initialValues: profileFormInitialValues,
    validate: yupResolver(profileFormValidationSchema),
  });

  const { fetch } = useWikiFetch("/auth/login", {
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
    <PageTemplate>
      <WikiFull title="Edit Profile" right={confirmProps}>
        <UserForm />
      </WikiFull>
    </PageTemplate>
  );
};
