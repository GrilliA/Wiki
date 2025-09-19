import { TOptionResponseData } from "../options/option.model";

export type TCommentRequestData = {
  text: string;
  recipe?: number;
  thread?: number;
};

export type TCommentResponseData = {
  id: number;
  text: string;
  recipe?: TOptionResponseData;
  thread?: TOptionResponseData;
};
