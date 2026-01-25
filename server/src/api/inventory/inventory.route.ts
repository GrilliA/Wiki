import { Router } from "express";
import auth from "../../middleware/protectedRoutes";
import {
  createInventoryController,
  deleteInventoryController,
  getAllInventoryController,
  getInventoryController,
  updateInventoryController,
} from "./inventory.controller";

const inventoryRouter = Router();

inventoryRouter.post("/inventory", auth(), createInventoryController);
inventoryRouter.put("/inventory/:id", auth(), updateInventoryController);
inventoryRouter.delete("/inventory/:id", auth(), deleteInventoryController);
inventoryRouter.get("/inventory/:id", auth(), getInventoryController);
inventoryRouter.get("/inventory", auth(), getAllInventoryController);

export default inventoryRouter;
