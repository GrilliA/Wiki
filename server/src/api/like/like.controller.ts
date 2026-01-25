import { Response, Request } from "express";
import { createLike, deleteLike, getallLikes, getLikeById, getLikeByUserId, updateLike } from "./like.service";
import { getLikeReponseData, getLikeRequestMapper } from "./like.mapper";
import { getThreadById } from "../thread/thread.service";

export const getLikeController = async (req: Request, res: Response) => {
  const likeId = Number(req.params.id);
  const like = await getLikeById(likeId);
  res.status(200).json({
    data: getLikeReponseData(like),
    message: "got like succefully",
  });
};

export const getAllLikeController = async (_: Request, res: Response) => {
  const likes = await getallLikes();
  res.status(200).json({
    data: likes.map(getLikeReponseData),
    message: "got all like succefully",
  });
};

export const createLikeController = async (req: Request, res: Response) => {
  const currentUserId = req.session.user?.id;
  const threadId = req.body.thread;
  const hasLiked = await getLikeByUserId(currentUserId, threadId);
  if (hasLiked) {
    res.status(400).json({
      message: "User has already liked this entity",
    });
    return;
  }
  const data = getLikeRequestMapper({ ...req.body, user: currentUserId });
  const like = await createLike(data);
  res.status(200).json({
    data: like,
    message: "Create like succefully",
  });
};

export const updateLikeController = async (req: Request, res: Response) => {
  const { body } = req;
  const data = getLikeRequestMapper(body);
  const likeId = Number(req.params.id);
  const location = await updateLike(likeId, data);
  res.status(200).json({
    data: location,
    message: "updated like succefully",
  });
};

export const deleteLikeController = async (req: Request, res: Response) => {
  const likeId = Number(req.params.id);
  await deleteLike(likeId);
  const allLikes = await getallLikes();
  res.status(200).json({
    data: allLikes.map(getLikeReponseData),
    message: "deleted like succefully",
  });
};
