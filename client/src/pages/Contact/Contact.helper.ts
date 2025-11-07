import * as Yup from "yup";

export const contactInitialValues = {
  type: "",
  subject: "",
  message: "",
};

export const contactValidationSchema = Yup.object({
  type: Yup.string().required(),
  subject: Yup.string().required(),
  message: Yup.string().required(),
});
