import * as Yup from "yup";

export const loginInitialValues = {
  identifier: "",
  password: "",
};

export const loginValidationSchema = Yup.object({
  identifier: Yup.string(),
  password: Yup.string().required(),
});
