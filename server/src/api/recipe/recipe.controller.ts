import { Response, Request } from "express";
import { createRecipe, deleteRecipe, getallRecipes, getRecipeById, updateRecipe } from "./recipe.service";
import { getRecipeReponseData, getRecipeRequestMapper } from "./recipe.mapper";

export const getRecipeController = async (req: Request, res: Response) => {
  const recipeId = Number(req.params.id);
  const recipe = await getRecipeById(recipeId);
  res.status(200).json({
    data: getRecipeReponseData(recipe),
    message: "got recipe succefully",
  });
};

export const getAllRecipeController = async (_: Request, res: Response) => {
  const recipes = await getallRecipes();
  res.status(200).json({
    data: recipes.map(getRecipeReponseData),
    message: "got all recipe succefully",
  });
};

export const createRecipeController = async (req: Request, res: Response) => {
  const data = getRecipeRequestMapper(req.body);
  const recipe = await createRecipe(data);
  res.status(200).json({
    data: recipe,
    message: "Create recipe succefully",
  });
};

export const updateRecipeController = async (req: Request, res: Response) => {
  const { body } = req;
  const data = getRecipeRequestMapper(body);
  const recipeId = Number(req.params.id);
  const location = await updateRecipe(recipeId, data);
  res.status(200).json({
    data: location,
    message: "updated recipe succefully",
  });
};

export const deleteRecipeController = async (req: Request, res: Response) => {
  const recipeId = Number(req.params.id);
  await deleteRecipe(recipeId);
  const allRecipes = await getallRecipes();
  res.status(200).json({
    data: allRecipes.map(getRecipeReponseData),
    message: "deleted recipe succefully",
  });
};
