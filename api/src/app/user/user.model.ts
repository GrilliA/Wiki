import { USER_STATUS, USER_ROLE } from "../../helper/constants";
export type TUserResponseData = {
  id: string;
  email: string;
  surname: string;
  name: string;
  phoneNumber: string;
  permissions: Array<string>;
  status: USER_STATUS;
  role: USER_ROLE;
  password?: string;
  facilityId?: string;
  facilityName?: string;
};
