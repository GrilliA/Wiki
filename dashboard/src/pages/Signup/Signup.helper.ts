import * as Yup from "yup";

export const signupInitialValues = {
  email: "",
  password: "",
  username: "",
};

export const signupValidationSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
  username: Yup.string().required(),
});
