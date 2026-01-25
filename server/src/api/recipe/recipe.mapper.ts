import { getConnectById } from "../../helper/getConnectById";
import { Prisma } from "@prisma/client";
import { TRecipeRequestData, TRecipeResponseData } from "./recipe.model";
import { getOptionResponseData } from "../options/option.util";
import { getCommentReponseData } from "../comment/comment.mapper";
import { getProductReponseData } from "../product/product.mapper";

export const getRecipeRequestMapper = (recipe: TRecipeRequestData): Prisma.RecipeCreateInput => {
  return {
    date: recipe.date,
    hectares: recipe.hectares,
    clientNote: recipe.clientNote,
    internalNote: recipe.internalNote,
    typeOfTreatment: getConnectById(recipe.typeOfTreatment),
    treatmentPhase: getConnectById(recipe.treatmentPhase),
    crop: getConnectById(recipe.crop),
  };
};

export const getRecipeReponseData = (recipe: any): TRecipeResponseData => {
  if (!recipe) {
    return null;
  }
  return {
    id: recipe?.id,
    date: recipe?.date,
    hectares: recipe?.hectares,
    clientNote: recipe?.clientNote,
    internalNote: recipe?.internalNote,
    typeOfTreatment: getOptionResponseData(recipe?.typeOfTreatment),
    treatmentPhase: getOptionResponseData(recipe?.treatmentPhase),
    comments: recipe?.comments?.map(getCommentReponseData),
    products: recipe?.products?.map(getProductReponseData),
  };
};
