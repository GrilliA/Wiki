import { Router } from "express";
import auth from "../../middleware/protectedRoutes";
import {
  createRecipeController,
  deleteRecipeController,
  getAllRecipeController,
  getRecipeController,
  updateRecipeController,
} from "./recipe.controller";

const recipeRouter = Router();

recipeRouter.post("/recipe", auth(), createRecipeController);
recipeRouter.put("/recipe/:id", auth(), updateRecipeController);
recipeRouter.delete("/recipe/:id", auth(), deleteRecipeController);
recipeRouter.get("/recipe/:id", auth(), getRecipeController);
recipeRouter.get("/recipe", auth(), getAllRecipeController);

export default recipeRouter;
