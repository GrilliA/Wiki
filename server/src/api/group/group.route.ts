import { Router } from "express";
import auth from "../../middleware/protectedRoutes";
import {
  createGroupController,
  deleteGroupController,
  getAllGroupController,
  getGroupController,
  updateGroupController,
} from "./group.controller";

const groupRouter = Router();

groupRouter.post("/group", auth(), createGroupController);
groupRouter.put("/group/:id", auth(), updateGroupController);
groupRouter.delete("/group/:id", auth(), deleteGroupController);
groupRouter.get("/group/:id", auth(), getGroupController);
groupRouter.get("/group", auth(), getAllGroupController);

export default groupRouter;
