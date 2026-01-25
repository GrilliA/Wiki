import { Response, Request } from "express";
import { createComment, deleteComment, getallComments, getCommentById, updateComment } from "./comment.service";
import { getCommentReponseData, getCommentRequestMapper } from "./comment.mapper";

export const getCommentController = async (req: Request, res: Response) => {
  const commentId = Number(req.params.id);
  const comment = await getCommentById(commentId);
  res.status(200).json({
    data: getCommentReponseData(comment),
    message: "got comment succefully",
  });
};

export const getAllCommentController = async (_: Request, res: Response) => {
  const comments = await getallComments();
  res.status(200).json({
    data: comments.map(getCommentReponseData),
    message: "got all comment succefully",
  });
};

export const createCommentController = async (req: Request, res: Response) => {
  const data = getCommentRequestMapper(req.body);
  const comment = await createComment(data);
  res.status(200).json({
    data: comment,
    message: "Create comment succefully",
  });
};

export const updateCommentController = async (req: Request, res: Response) => {
  const { body } = req;
  const data = getCommentRequestMapper(body);
  const commentId = Number(req.params.id);
  const location = await updateComment(commentId, data);
  res.status(200).json({
    data: location,
    message: "updated comment succefully",
  });
};

export const deleteCommentController = async (req: Request, res: Response) => {
  const commentId = Number(req.params.id);
  await deleteComment(commentId);
  const allComments = await getallComments();
  res.status(200).json({
    data: allComments.map(getCommentReponseData),
    message: "deleted comment succefully",
  });
};
