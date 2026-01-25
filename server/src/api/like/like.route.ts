import { Router } from "express";
import auth from "../../middleware/protectedRoutes";
import {
  createLikeController,
  deleteLikeController,
  getAllLikeController,
  getLikeController,
  updateLikeController,
} from "./like.controller";

const likeRouter = Router();

likeRouter.post("/like", auth(), createLikeController);
likeRouter.put("/like/:id", auth(), updateLikeController);
likeRouter.delete("/like/:id", auth(), deleteLikeController);
likeRouter.get("/like/:id", auth(), getLikeController);
likeRouter.get("/like", auth(), getAllLikeController);

export default likeRouter;
