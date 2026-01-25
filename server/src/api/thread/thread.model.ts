import { TCommentResponseData } from "../comment/comment.model";
import { TLikeResponseData } from "../like/like.model";

export type TThreadRequestData = {
  title: string;
  description: string;
  crop: number;
};

export type TThreadResponseData = {
  id: number;
  title: string;
  description: string;
  comments: Array<TCommentResponseData>;
  likes: Array<TLikeResponseData>;
};
