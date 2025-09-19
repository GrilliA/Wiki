import { Router } from "express";
import {
  getCapController,
  getComuniController,
  getProvinceController,
  getRegionsController,
} from "./general.controller";
import auth from "../../middleware/protectedRoutes";

const generalRouter = Router();

generalRouter.get("/general/region", auth(), getRegionsController);
generalRouter.get("/general/province/:region", auth(), getProvinceController);
generalRouter.get("/general/comune/:province", auth(), getComuniController);
generalRouter.get("/general/cap/:comune", auth(), getCapController);

export default generalRouter;
