import { getConnectById } from "../../helper/getConnectById";
import { Prisma } from "@prisma/client";
import { TLikeRequestData, TLikeResponseData } from "./like.model";
import { getUserResponseMapper } from "../user/user.mapper";

export const getLikeRequestMapper = (like: TLikeRequestData): Prisma.LikeCreateInput => {
  return {
    user: getConnectById(like.user),
    thread: getConnectById(like.thread),
    isLiked: like.isLiked,
  };
};

export const getLikeReponseData = (like: any): TLikeResponseData => {
  if (!like) {
    return null;
  }
  return {
    id: like?.id,
    isLiked: like?.isLiked,
    user: getUserResponseMapper(like?.user),
  };
};
