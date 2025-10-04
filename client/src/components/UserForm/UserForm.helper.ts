import * as Yup from "yup";

export const userFormInitialValues = {
  firstName: "",
  lastName: "",
  bio: "",
  username: "",
  avatar: null,
};

export const userFormValidationSchema = Yup.object({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  bio: Yup.string().required(),
  username: Yup.string().required(),
});
