import { Router } from "express";
import auth from "../../middleware/protectedRoutes";
import {
  createPlanController,
  deletePlanController,
  getAllPlanController,
  getPlanController,
  updatePlanController,
} from "./plan.controller";

const planRouter = Router();

planRouter.post("/plan", auth(), createPlanController);
planRouter.put("/plan/:id", auth(), updatePlanController);
planRouter.get("/plan/:id", auth(), getPlanController);
planRouter.get("/plan", auth(), getAllPlanController);
planRouter.delete("/plan/:id", auth(), deletePlanController);

export default planRouter;
