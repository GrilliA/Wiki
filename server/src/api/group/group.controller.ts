import { Response, Request } from "express";
import { createGroup, deleteGroup, getallGroups, getGroupById, updateGroup } from "./group.service";
import { getGroupReponseData, getGroupRequestMapper } from "./group.mapper";

export const getGroupController = async (req: Request, res: Response) => {
  const group = await getGroupById(+req.params.id);
  res.status(200).json({
    data: getGroupReponseData(group),
    message: "got group succefully",
  });
};

export const getAllGroupController = async (req: Request, res: Response) => {
  const groups = await getallGroups();
  res.status(200).json({
    data: groups.map(getGroupReponseData),
    message: "got all group succefully",
  });
};

export const createGroupController = async (req: Request, res: Response) => {
  const data = getGroupRequestMapper(req.body);
  const group = await createGroup(data);
  res.status(200).json({
    data: group,
    message: "Create group succefully",
  });
};

export const updateGroupController = async (req: Request, res: Response) => {
  const { body } = req;
  const data = getGroupRequestMapper(body);
  const id = +req.params.id;
  const location = await updateGroup(id, data);
  res.status(200).json({
    data: location,
    message: "updated group succefully",
  });
};

export const deleteGroupController = async (req: Request, res: Response) => {
  const groupId = +req.params.id;
  if (!groupId) {
    res.status(400).json({
      message: "group id is required",
    });
    return;
  }
  await deleteGroup(groupId);
  const allGroups = await getallGroups();
  res.status(200).json({
    data: allGroups.map(getGroupReponseData),
    message: "deleted group succefully",
  });
};
