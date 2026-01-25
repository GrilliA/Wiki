import { Router } from "express";
import auth from "../../middleware/protectedRoutes";
import {
  createCommentController,
  deleteCommentController,
  getAllCommentController,
  getCommentController,
  updateCommentController,
} from "./comment.controller";

const commentRouter = Router();

commentRouter.post("/comment", auth(), createCommentController);
commentRouter.put("/comment/:id", auth(), updateCommentController);
commentRouter.delete("/comment/:id", auth(), deleteCommentController);
commentRouter.get("/comment/:id", auth(), getCommentController);
commentRouter.get("/comment", auth(), getAllCommentController);

export default commentRouter;
