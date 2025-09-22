import IUserData from "@/models/user.model";

export type AuthModel = {
  currentUser: IUserData;
  gemmaState: {
    isAppInit: boolean;
  };
};
