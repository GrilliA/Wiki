import { getConnectById } from "../../helper/getConnectById";
import { Prisma } from "@prisma/client";
import { TCommentRequestData, TCommentResponseData } from "./comment.model";
import { getOptionResponseData } from "../options/option.util";

export const getCommentRequestMapper = (comment: TCommentRequestData): Prisma.CommentCreateInput => {
  return {
    text: comment.text,
    recipe: getConnectById(comment.recipe),
    thread: getConnectById(comment.thread),
  };
};

export const getCommentReponseData = (comment: any): TCommentResponseData => {
  if (!comment) {
    return null;
  }
  return {
    id: comment?.id,
    text: comment?.text,
    recipe: getOptionResponseData(comment?.recipe),
    thread: getOptionResponseData(comment?.thread),
  };
};
