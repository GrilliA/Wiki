import { TOptionResponseData } from "../options/option.model";

export type TInventoryRequestData = {
  stockQuantity: number;
  product: number;
  storage: number;
};

export type TInventoryResponseData = {
  id: number;
  stockQuantity: number;
  product: TOptionResponseData;
  storage: TOptionResponseData;
};
