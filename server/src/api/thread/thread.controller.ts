import { Response, Request } from "express";
import { createThread, deleteThread, getallThreads, getThreadById, updateThread } from "./thread.service";
import { getThreadReponseData, getThreadRequestMapper } from "./thread.mapper";

export const getThreadController = async (req: Request, res: Response) => {
  const threadId = Number(req.params.id);
  const thread = await getThreadById(threadId);
  res.status(200).json({
    data: getThreadReponseData(thread),
    message: "got thread succefully",
  });
};

export const getAllThreadController = async (_: Request, res: Response) => {
  const threads = await getallThreads();
  res.status(200).json({
    data: threads.map(getThreadReponseData),
    message: "got all thread succefully",
  });
};

export const createThreadController = async (req: Request, res: Response) => {
  const data = getThreadRequestMapper(req.body);
  const thread = await createThread(data);
  res.status(200).json({
    data: thread,
    message: "Create thread succefully",
  });
};

export const updateThreadController = async (req: Request, res: Response) => {
  const { body } = req;
  const data = getThreadRequestMapper(body);
  const threadId = Number(req.params.id);
  const location = await updateThread(threadId, data);
  res.status(200).json({
    data: location,
    message: "updated thread succefully",
  });
};

export const deleteThreadController = async (req: Request, res: Response) => {
  const threadId = Number(req.params.id);
  await deleteThread(threadId);
  const allThreads = await getallThreads();
  res.status(200).json({
    data: allThreads.map(getThreadReponseData),
    message: "deleted thread succefully",
  });
};
