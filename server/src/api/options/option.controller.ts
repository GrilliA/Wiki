import { Response, Request } from "express";
import {
  createOption,
  deleteOption,
  getAllOptions,
  getOptionById,
  getOptionsByGroup,
  getOptionsByMultipleGroups,
  updateOption,
} from "./option.service";
import { getOptionInput, groupOptionsDataByGroup, getOptionValidation } from "./option.util";
import { getGroupById } from "../group/group.service";
import { TSchemaData } from "../group/group.model";
import logger from "../../helper/logger";

export const createOptionController = async (req: Request, res: Response) => {
  const currentGroup = await getGroupById(req.body?.group);
  const optionValidation = getOptionValidation(currentGroup.schema as Array<TSchemaData>);
  try {
    await optionValidation.validate(req.body);
  } catch (error) {
    logger.error(error.message);
    res.status(400).json({ message: error.message });
  }
  const body = getOptionInput(req.body);
  const data = await createOption(body);

  res.status(200).json({
    data,
    message: "option created successfully",
  });
};
export const updateOptionController = async (req: Request, res: Response) => {
  const optionId = Number(req.params.id);
  const body = getOptionInput(req.body);
  const option = await updateOption(optionId, body);
  res.status(200).json({
    message: "option updated successfully",
    data: option,
  });
};

export const getOptionByIdController = async (req: Request, res: Response) => {
  const optionId = Number(req.params.id);
  const option = await getOptionById(optionId);
  res.status(200).json({
    message: "option retrieve successfully",
    data: option,
  });
};

export const getOptionsByGroupController = async (req: Request, res: Response) => {
  const group = req.query.group as string;
  if (!group) {
    res.status(400).json({
      message: "You must define the group you want to retrieve!",
    });
    return;
  }
  const option = await getOptionsByGroup(group);
  res.status(200).json({
    message: "options retrieve successfully",
    data: option,
  });
};

export const getOptionsByMultipleGroupsController = async (req: Request, res: Response) => {
  const groups = req.query.groups as string;
  const groupsString = groups?.split(",");

  if (!groupsString) {
    res.status(400).json({
      message: "You must define the group you want to retrieve!",
    });
    return;
  }

  const options = await getOptionsByMultipleGroups(groupsString);
  const data = groupOptionsDataByGroup(options);

  res.status(200).json({
    message: "options retrieve successfully",
    data,
  });
};
export const getAllOptionsController = async (req: Request, res: Response) => {
  const { groupId } = req.query;
  const group = Number(groupId);
  const data = await getAllOptions(group);

  res.status(200).json({
    message: "options retrieve successfully",
    data,
  });
};

export const deleteOptionController = async (req: Request, res: Response) => {
  const optionId = Number(req.params.id);
  const data = await deleteOption(optionId);

  res.status(200).json({
    message: "options deleted successfully",
    data,
  });
};
