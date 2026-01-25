import { Response, Request } from "express";
import {
  createInventory,
  deleteInventory,
  getallInventorys,
  getInventoryById,
  updateInventory,
} from "./inventory.service";
import { getInventoryReponseData, getInventoryRequestMapper } from "./inventory.mapper";

export const getInventoryController = async (req: Request, res: Response) => {
  const inventoryId = Number(req.params.id);
  const inventory = await getInventoryById(inventoryId);
  res.status(200).json({
    data: getInventoryReponseData(inventory),
    message: "got inventory succefully",
  });
};

export const getAllInventoryController = async (_: Request, res: Response) => {
  const inventorys = await getallInventorys();
  res.status(200).json({
    data: inventorys.map(getInventoryReponseData),
    message: "got all inventory succefully",
  });
};

export const createInventoryController = async (req: Request, res: Response) => {
  const data = getInventoryRequestMapper(req.body);
  const inventory = await createInventory(data);
  res.status(200).json({
    data: inventory,
    message: "Create inventory succefully",
  });
};

export const updateInventoryController = async (req: Request, res: Response) => {
  const { body } = req;
  const data = getInventoryRequestMapper(body);
  const inventoryId = Number(req.params.id);
  const location = await updateInventory(inventoryId, data);
  res.status(200).json({
    data: location,
    message: "updated inventory succefully",
  });
};

export const deleteInventoryController = async (req: Request, res: Response) => {
  const inventoryId = Number(req.params.id);
  await deleteInventory(inventoryId);
  const allInventorys = await getallInventorys();
  res.status(200).json({
    data: allInventorys.map(getInventoryReponseData),
    message: "deleted inventory succefully",
  });
};
