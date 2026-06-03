import type { TWikiResponseData } from "@/model/baseQuery.model";

export type TLoginParams = {
  identifier: string;
  password: string;
};

export type TLoginResponseData = TWikiResponseData<null>;
