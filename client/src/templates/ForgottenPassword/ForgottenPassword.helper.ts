import * as Yup from "yup";

export const forgottenPasswordInitialValues = {
  email: "",
  password: "",
};

export const forgottenPasswordValidationSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});
