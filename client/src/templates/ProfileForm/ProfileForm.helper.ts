import * as Yup from "yup";

export const profileFormInitialValues = {
  firstName: "",
  lastName: "",
  bio: "",
  username: "",
  avatar: null,
};

export const profileFormValidationSchema = Yup.object({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  bio: Yup.string().required(),
  username: Yup.string().required(),
});
