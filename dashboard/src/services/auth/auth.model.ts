import type { TWikiResponseData } from "@/model/baseQuery.model";

export type TLoginParams = {
  identifier: string;
  password: string;
};

export type TSignupParams = {
  email: string;
  username: string;
  password: string;
  confirmPassword?: string;
  terms?: boolean;
};

export type TLoginResponseData = TWikiResponseData<null>;
export type TSignupResponseData = TWikiResponseData<null>;
