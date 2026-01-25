import { Router } from "express";
import {
  createOptionController,
  deleteOptionController,
  getAllOptionsController,
  getOptionByIdController,
  getOptionsByGroupController,
  getOptionsByMultipleGroupsController,
  updateOptionController,
} from "./option.controller";
import auth from "../../middleware/protectedRoutes";

const optionRouter = Router();

optionRouter.get("/option/:id", auth(), getOptionByIdController);
optionRouter.get("/option/single{}", auth(), getOptionsByGroupController);
optionRouter.get("/option/multiple{}", auth(), getOptionsByMultipleGroupsController);
optionRouter.get("/option{}", auth(), getAllOptionsController);
optionRouter.post("/option", auth(), createOptionController);
optionRouter.put("/option/:id", auth(), updateOptionController);
optionRouter.delete("/option/:id", auth(), deleteOptionController);

export default optionRouter;
