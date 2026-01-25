import { Router } from "express";
import auth from "../../middleware/protectedRoutes";
import {
  createThreadController,
  deleteThreadController,
  getAllThreadController,
  getThreadController,
  updateThreadController,
} from "./thread.controller";

const threadRouter = Router();

threadRouter.post("/thread", auth(), createThreadController);
threadRouter.put("/thread/:id", auth(), updateThreadController);
threadRouter.delete("/thread/:id", auth(), deleteThreadController);
threadRouter.get("/thread/:id", auth(), getThreadController);
threadRouter.get("/thread", auth(), getAllThreadController);

export default threadRouter;
