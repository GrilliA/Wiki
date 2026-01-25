import * as Yup from "yup";

export const changePasswordInitialValues = {
  oldPassword: "",
  newPassword: "",
  confirmNewPassword: "",
};

export const changePasswordValidationSchema = Yup.object({
  oldPassword: Yup.string().required(),
  newPassword: Yup.string().required(),
  confirmNewPassword: Yup.string().required(),
});
