import { Prisma } from "@prisma/client";
import { TThreadRequestData, TThreadResponseData } from "./thread.model";
import { getCommentReponseData } from "../comment/comment.mapper";
import { getConnectById } from "../../helper/getConnectById";
import { getLikeReponseData } from "../like/like.mapper";

export const getThreadRequestMapper = (thread: TThreadRequestData): Prisma.ThreadCreateInput => {
  return {
    title: thread.title,
    description: thread.description,
    crop: getConnectById(thread.crop),
  };
};

export const getThreadReponseData = (thread: any): TThreadResponseData => {
  if (!thread) {
    return null;
  }
  return {
    id: thread?.id,
    title: thread?.title,
    description: thread?.description,
    comments: thread?.comments?.map(getCommentReponseData),
    likes: thread?.likes?.map(getLikeReponseData),
  };
};
