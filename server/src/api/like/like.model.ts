import { TUserResponseData } from "../user/user.model";

export type TLikeRequestData = {
  user: string;
  thread: number;
  isLiked: boolean;
};

export type TLikeResponseData = {
  id: number;
  user: TUserResponseData;
  isLiked: boolean;
};
