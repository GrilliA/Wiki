import { USER_ROLE, USER_STATUS } from "@/helper/constants";
import { TOptionData } from "../option/option.model";

export type TUserData = {
  id: string;
  email: string;
  name: string;
  surname: string;
  phoneNumber: string;
  permissions: string;
  status: USER_STATUS;
  role: USER_ROLE;
  facility?: TOptionData;
};
