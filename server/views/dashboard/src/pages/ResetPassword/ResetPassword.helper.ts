import * as Yup from "yup";

export const resetPasswordInitialValues = {
  password: "",
  confirmPassword: "",
};

export const resetPasswordValidationSchema = Yup.object({
  password: Yup.string().required(),
  confirmPassword: Yup.string().required(),
});
