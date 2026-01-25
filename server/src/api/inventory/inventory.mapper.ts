import { getConnectById } from "../../helper/getConnectById";
import { Prisma } from "@prisma/client";
import { TInventoryRequestData, TInventoryResponseData } from "./inventory.model";
import { getOptionResponseData } from "../options/option.util";

export const getInventoryRequestMapper = (inventory: TInventoryRequestData): Prisma.InventoryCreateInput => {
  return {
    stockQuantity: inventory.stockQuantity,
    product: getConnectById(inventory.product),
    storage: getConnectById(inventory.storage),
  };
};

export const getInventoryReponseData = (inventory: any): TInventoryResponseData => {
  if (!inventory) {
    return null;
  }
  return {
    id: inventory?.id,
    stockQuantity: inventory?.stockQuantity,
    product: getOptionResponseData(inventory?.product),
    storage: getOptionResponseData(inventory?.storage),
  };
};
