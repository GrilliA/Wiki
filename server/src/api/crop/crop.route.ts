import { Router } from "express";
import auth from "../../middleware/protectedRoutes";
import {
  createCropController,
  deleteCropController,
  getAllCropController,
  getCropController,
  updateCropController,
} from "./crop.controller";

const cropRouter = Router();

cropRouter.post("/crop", auth(), createCropController);
cropRouter.put("/crop/:id", auth(), updateCropController);
cropRouter.delete("/crop/:id", auth(), deleteCropController);
cropRouter.get("/crop/:id", auth(), getCropController);
cropRouter.get("/crop", auth(), getAllCropController);

export default cropRouter;
