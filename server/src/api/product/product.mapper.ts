import { getConnectById } from "../../helper/getConnectById";
import { Prisma } from "@prisma/client";
import { TProductRequestData, TProductResponseData } from "./product.model";

export const getProductRequestMapper = (product: TProductRequestData): Prisma.ProductCreateInput => {
  return {
    isFertilizer: product.isFertilizer,
    quantity: product.quantity,
    unit: product.unit,
    name: product.name,
    fertilizerName: product.fertilizerName,
    recipe: getConnectById(product.recipe),
  };
};

export const getProductReponseData = (product: any): TProductResponseData => {
  if (!product) {
    return null;
  }
  return {
    id: product?.id,
    isFertilizer: product?.isFertilizer,
    name: product?.name,
    fertilizerName: product?.fertilizerName,
    quantity: product?.quantity,
    unit: product?.unit,
  };
};
