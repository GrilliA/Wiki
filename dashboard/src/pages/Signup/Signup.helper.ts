import type { TSignupParams } from "@/services/auth/auth.model";

export const signupInitialValues: TSignupParams = {
  email: "",
  password: "",
  username: "",
  confirmPassword: "",
  terms: false,
};
