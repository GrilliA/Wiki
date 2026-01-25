import { getConnectById } from "../../helper/getConnectById";
import { Prisma } from "@prisma/client";
import { TCropRequestData, TCropResponseData } from "./crop.model";
import { getOptionResponseData } from "../options/option.util";
import { getThreadReponseData } from "../thread/thread.mapper";
import { getRecipeReponseData } from "../recipe/recipe.mapper";

export const getCropRequestMapper = (crop: TCropRequestData): Prisma.CropCreateInput => {
  return {
    group: getConnectById(crop.group),
    regime: getConnectById(crop.regime),
    crop: getConnectById(crop.crop),
    plan: getConnectById(crop.plan),
  };
};

export const getCropReponseData = (crop: any): TCropResponseData => {
  if (!crop) {
    return null;
  }
  return {
    id: crop?.id,
    regime: getOptionResponseData(crop?.regime),
    group: getOptionResponseData(crop?.group),
    crop: getOptionResponseData(crop?.crop),
    threads: crop?.threads?.map(getThreadReponseData),
    recipes: crop?.recipes?.map(getRecipeReponseData),
  };
};
